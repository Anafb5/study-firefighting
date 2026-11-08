import test from "node:test";
import assert from "node:assert/strict";
import {readFile,access} from "node:fs/promises";
import {fileURLToPath} from "node:url";
import {dirname,resolve} from "node:path";
import {TOPICS,TOPIC_BY_ID} from "../psicotecnicos/topics.mjs";
import {VARIANTS,createQuestion,createSession} from "../psicotecnicos/generator.mjs";
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
test("las reglas espaciales y mecánicas se comprueban independientemente",()=>{
  const opposite=[5,3,4,1,2,0];
  for(let k=0;k<150;k++){
    for(const type of ["cubeOpposite","cubeAdjacent"]){
      const q=createQuestion("espacial",type);
      assert.equal(q.answer,q.visual.marks[opposite[q.visual.selected]]);
    }
    const paths=createQuestion("mecanica","path");
    const turns=paths.visual.directions.reduce((sum,d,i,a)=>sum+(i>0&&d!==a[i-1]?1:0),0);
    assert.equal(Number(paths.answer),turns);
    const balance=createQuestion("mecanica","balance");
    assert.equal(Number(balance.answer),balance.visual.unit*balance.visual.amount);
    const connections=createQuestion("mecanica","connections");
    assert.equal(Number(connections.answer),connections.visual.map[connections.visual.selected]);
    const blocks=createQuestion("espacial","blocks");
    assert.equal(Number(blocks.answer),blocks.visual.heights.reduce((sum,v)=>sum+v,0));
  }
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
  change("variant","cubeOpposite");change("length","5");
  click("[data-action]",{dataset:{action:"start-session"}});
  assert.ok(!html.includes('data-action="open-demo"'));
  assert.ok(!html.includes("Demostración visual"));
  for(let i=0;i<5;i++){
    click("[data-answer]",{dataset:{answer:"0"}});
    assert.ok(!html.includes("Demostración visual"));
  }
  assert.ok(html.includes("Resultado del examen"));
  assert.ok(!html.includes("Demostración visual"));
 }finally{
  globalThis.document=previous.document;globalThis.window=previous.window;globalThis.localStorage=previous.localStorage;
 }
});
