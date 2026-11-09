import test from "node:test";
import assert from "node:assert/strict";
import {readFile,access} from "node:fs/promises";
import {fileURLToPath} from "node:url";
import {dirname,resolve} from "node:path";
import {TOPICS,TOPIC_BY_ID} from "../psicotecnicos/topics.mjs";
import {VARIANTS,createQuestion,createSession,chooseAdaptiveLevel} from "../psicotecnicos/generator.mjs";
import {foldNet,oppositesOf,applyTransform,maskOperate} from "../psicotecnicos/advanced-visual.mjs";
const root=resolve(dirname(fileURLToPath(import.meta.url)),"..");

test("el índice respeta ocho PDF de habilidades independientes",()=>{
  assert.equal(TOPICS.length,8);
  assert.equal(new Set(TOPICS.map(x=>x.id)).size,8);
  assert.deepEqual(Object.keys(VARIANTS),TOPICS.map(x=>x.id));
  for(const t of TOPICS){assert.ok(t.source.endsWith(".pdf"));assert.ok(t.strategies.length>=3);assert.ok(t.strategies.every(s=>s.ref&&s.method&&s.text));assert.equal(TOPIC_BY_ID[t.id],t);}
});
test("el generador produce cuatro respuestas distintas, incluida la correcta, para todos los subtipos",()=>{
  for(const [id,types] of Object.entries(VARIANTS)){
    for(const type of types){
      for(let k=0;k<200;k++){
        const q=createQuestion(id,type);
        assert.equal(q.topicId,id);
        assert.equal(q.variant,type);
        assert.equal(q.options.length,4,`${id}/${type}`);
        assert.equal(new Set(q.options).size,4,`${id}/${type}`);
        assert.ok(q.options.includes(q.answer),`${id}/${type}`);
        assert.ok(q.prompt.length>10&&q.explanation.length>10);
      }
    }
  }
});
test("plegado espacial: seis normales únicas, pares opuestos y vértices",()=>{
 const neg=v=>v.map(n=>-n).join(","),axis=v=>v.map(Math.abs).join(",");
 for(const difficulty of ["basico","intermedio","avanzado"])for(let k=0;k<160;k++){
  const q=createQuestion("espacial","cubeOpposite",Math.random,difficulty);
  const v=q.visual,normals=foldNet(v.positions);
  assert.equal(new Set(normals.map(n=>n.join(","))).size,6);
  assert.deepEqual(oppositesOf(normals),v.opposites);
  assert.equal(q.answer,v.labels[v.opposites[v.selected]]);
  const adj=createQuestion("espacial","cubeAdjacent",Math.random,difficulty);
  for(const option of adj.options){
   const pair=option.split(" · ").map(x=>adj.visual.labels.indexOf(x));
   assert.equal(pair.length,2);
   assert.equal(adj.visual.opposites[pair[0]]!==pair[1],option===adj.answer);
  }
  const corner=createQuestion("espacial","cubeCorner",Math.random,difficulty);
  for(const option of corner.options){
   const inds=option.split(" · ").map(x=>corner.visual.labels.indexOf(x));
   const noOpp=inds.every((i,j)=>inds.every((other,k)=>j===k||corner.visual.opposites[i]!==other));
   assert.equal(noOpp,option===corner.answer);
  }
  const blocks=createQuestion("espacial","blocks",Math.random,difficulty);
  assert.equal(Number(blocks.answer),blocks.visual.heights.reduce((sum,v)=>sum+v,0));
  assert.equal(blocks.visual.heights.length,blocks.visual.cols*blocks.visual.rows);
 }
});
test("rotaciones, espejos y series visuales reproducen exactamente la respuesta",()=>{
 for(const difficulty of ["basico","intermedio","avanzado"])for(let k=0;k<180;k++){
  const r=createQuestion("grafico","rotation",Math.random,difficulty);
  assert.deepEqual(r.optionVisuals[r.answer],applyTransform(r.visual.steps,r.visual.initial));
  assert.equal(new Set(Object.values(r.optionVisuals).map(JSON.stringify)).size,4);
  const s=createQuestion("grafico","symbolsequence",Math.random,difficulty);
  const models=s.visual.sequence,correct=s.optionVisuals[s.answer];
  const shift=((models[1].angle-models[0].angle)%360+360)%360;
  assert.equal(correct.angle,(models[4].angle+shift)%360);
  assert.equal(correct.fill,difficulty==="basico"?models[0].fill:!models[4].fill);
  assert.equal(correct.dots,difficulty==="avanzado"?models[4].dots%3+1:1);
  assert.equal(new Set(Object.values(s.optionVisuals).map(JSON.stringify)).size,4);
 }
});
test("matrices gráficas: unión, XOR, coincidencia y diferencia verificadas por bits",()=>{
 for(const difficulty of ["basico","intermedio","avanzado"])for(let k=0;k<250;k++){
  const q=createQuestion("grafico","graphicmatrix",Math.random,difficulty),v=q.visual;
  const a=v.cells[v.transpose?2:6],b=v.cells[v.transpose?5:7];
  assert.equal(q.optionVisuals[q.answer],maskOperate(v.mode,a,b));
  const rows=v.transpose?[[v.cells[0],v.cells[3],v.cells[6]],[v.cells[1],v.cells[4],v.cells[7]]]:
                           [[v.cells[0],v.cells[1],v.cells[2]],[v.cells[3],v.cells[4],v.cells[5]]];
  for(const [x,y,result] of rows)assert.equal(maskOperate(v.mode,x,y),result);
  assert.equal(new Set(Object.values(q.optionVisuals)).size,4);
 }
});
test("dificultad progresiva y ajuste según resultados sin alterar los exámenes",()=>{
 for(const topic of ["grafico","espacial"]){
  const session=createSession(topic,15,"todos",Math.random,{difficulty:"progresiva"});
  assert.deepEqual(session.map(q=>q.difficulty),[...Array(5).fill("basico"),...Array(5).fill("intermedio"),...Array(5).fill("avanzado")]);
  assert.equal(new Set(session.map(q=>q.variant)).size,VARIANTS[topic].length);
 }
 const sample=(difficulty,ok)=>({mode:"entrenamiento",variant:"graphicmatrix",difficulty,ok});
 assert.equal(chooseAdaptiveLevel([],"graphicmatrix"),"basico");
 assert.equal(chooseAdaptiveLevel(Array(5).fill(sample("basico",true)),"graphicmatrix"),"intermedio");
 assert.equal(chooseAdaptiveLevel(Array(5).fill(sample("intermedio",true)),"graphicmatrix"),"avanzado");
 assert.equal(chooseAdaptiveLevel(Array(5).fill(sample("avanzado",false)),"graphicmatrix"),"intermedio");
 assert.equal(chooseAdaptiveLevel(Array(5).fill(sample("intermedio",false)),"graphicmatrix"),"basico");
});
test("las reglas de percepción son consistentes con sus secuencias",()=>{
 for(let k=0;k<200;k++){
  const q1=createQuestion("perceptiva","count"),q2=createQuestion("perceptiva","pairCount"),q3=createQuestion("perceptiva","difference");
  assert.equal(Number(q1.answer),[...q1.visual.text].filter(c=>c===q1.visual.target).length);
  let actual=0;for(let i=0;i<q2.visual.text.length-1;i++)if(q2.visual.text.slice(i,i+2)==="96")actual++;assert.equal(Number(q2.answer),actual);
  let differences=0;for(let i=0;i<3;i++)for(let j=0;j<12;j++)if(q3.visual.left[i][j]!==q3.visual.right[i][j])differences++;
  assert.equal(Number(q3.answer),differences);
 }
});
test("las sesiones mezclan subtipos, con límites y sin categorías ajenas",()=>{
 for(const topic of TOPICS){
  const session=createSession(topic.id,15);
  assert.equal(session.length,15);
  assert.ok(session.every(q=>VARIANTS[topic.id].includes(q.variant)));
  assert.equal(new Set(session.map(q=>q.variant)).size,VARIANTS[topic.id].length);
  for(const variant of VARIANTS[topic.id])assert.ok(createSession(topic.id,5,variant).every(q=>q.variant===variant));
 }
 assert.throws(()=>createSession("espacial",51));
 assert.throws(()=>createQuestion("mecanica","analogy"));
});
test("todas las páginas temáticas existen y cargan el mismo módulo",async()=>{
 for(const topic of TOPICS){
  const p=resolve(root,"psicotecnicos/temas",topic.id,"index.html");
  const html=await readFile(p,"utf8");
  assert.ok(html.includes(`data-topic="${topic.id}"`));
  assert.ok(html.includes('../../app.mjs'));
 }
});
test("el controlador mantiene una sola demostración y nunca la ofrece en examen",async()=>{
 const previous={document:globalThis.document,window:globalThis.window,localStorage:globalThis.localStorage};
 const handlers={};
 let html="";
 const app={addEventListener(name,fn){handlers[name]=fn;},get innerHTML(){return html;},set innerHTML(s){html=s;},querySelector(){return null;}};
 globalThis.document={body:{dataset:{topic:"espacial"}},getElementById(id){return id==="app"?app:null;}};
 globalThis.window={addEventListener(){},scrollTo(){}};
 const cache=new Map();
 globalThis.localStorage={getItem(k){return cache.get(k)||null;},setItem(k,v){cache.set(k,v);}};
 function click(selector,fields){
  const el={...fields};
  handlers.click({target:{closest(wanted){return wanted===selector?el:null;}}});
 }
 function change(name,value){handlers.change({target:{value,closest(sel){return sel==="[data-setting]"?{dataset:{setting:name},value}:null;}}});}
 try{
  await import("../psicotecnicos/app.mjs?smoke=one");
  assert.ok(html.includes("Qué tienes que saber"));
  click("[data-tab]",{dataset:{tab:"entrenamiento"}});
  assert.ok(html.includes("Comenzar entrenamiento"));
  change("variant","cubeOpposite");
  change("length","5");
  click("[data-action]",{dataset:{action:"start-session"}});
  assert.ok(html.includes('data-answer="0"'));
  click("[data-answer]",{dataset:{answer:"0"}});
  assert.equal((html.match(/data-action="open-demo"/g)||[]).length,1);
  click("[data-action]",{dataset:{action:"open-demo"}});
  assert.equal((html.match(/id="demonstration"/g)||[]).length,1);
  assert.equal((html.match(/data-action="open-demo"/g)||[]).length,0,"el botón debe desaparecer al abrir");
  click("[data-action]",{dataset:{action:"open-demo"}});
  assert.equal((html.match(/id="demonstration"/g)||[]).length,1,"un segundo evento no duplica la demostración");
  click("[data-action]",{dataset:{action:"close-demo"}});
  assert.equal((html.match(/id="demonstration"/g)||[]).length,0);
  click("[data-tab]",{dataset:{tab:"examen"}});
  assert.ok(html.includes("Pruebas del documento"));
  assert.ok(html.includes("Cargando preguntas originales") || html.includes("No se han podido cargar las preguntas"));
  assert.ok(!html.includes('data-action="open-demo"'));
  assert.ok(!html.includes('id="demonstration"'));
 }finally{
  globalThis.document=previous.document;globalThis.window=previous.window;globalThis.localStorage=previous.localStorage;
 }
});
