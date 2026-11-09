import test from "node:test";
import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";
import {readFile,access} from "node:fs/promises";
import vm from "node:vm";
import {resolve} from "node:path";

test("los 26 temas jurídicos pasan las validaciones de artículos, esquemas y ejercicios",()=>{
 const proc=spawnSync(process.execPath,["scripts/validate-legal.cjs"],{encoding:"utf8",timeout:30000});
 assert.equal(proc.status,0,proc.stdout+"\n"+proc.stderr);
 const s=proc.stdout.match(/Jurídica validada estructuralmente: (\[[^\n]+\])/);
 assert.ok(s,proc.stdout);
 const audit=JSON.parse(s[1]);
 assert.equal(audit.length,26);
 assert.equal(audit.every(t=>t.apartados>=6&&t.articulos>=2&&t.tarjetas>0&&t.preguntas>0),true,JSON.stringify(audit));
});
test("cada tema jurídico incluye páginas, artículos, prácticas y claves de progreso independientes",async()=>{
 const keys=new Set();
 for(let i=1;i<=26;i++){
  const base="juridica/"+i+"/";
  const source=await readFile(base+"data.js","utf8"),html=await readFile(base+"index.html","utf8");
  const context=vm.createContext({window:{}});vm.runInContext(source,context,{filename:base+"data.js"});
  const info=context.window.LEGAL_SOURCE;
  assert.ok(info.sections.length>=2);
  assert.ok(info.articles.length>=2);
  assert.ok(info.classify?.length&&info.order?.length&&info.judge?.length&&info.values?.length);
  assert.equal(new Set(info.sections.map(s=>s.id)).size,info.sections.length);
  assert.ok(info.sections.every(s=>s.topics.every(t=>t.points.length>=4&&t.pages)));
  const key="study-firefighting-j"+i+"-v1";
  assert.ok(html.includes(key),"Progreso faltante: "+i);assert.ok(!keys.has(key));keys.add(key);
  for(const file of ["../legal-base.css","../legal-app.js","../legal-builder.js","../legal-visuals.js","../legal-study.js"]){
   await access(resolve(base,file));
  }
  assert.ok(!/Unidades SI, magnitudes|Buscar EPI, UNE/.test(html),"Texto técnico heredado en "+i);
 }
});
test("se preservan las rutas de técnica y psicotécnicos y la biblioteca muestra jurídica",async()=>{
 const home=await readFile("index.html","utf8");
 assert.match(home,/href="#juridica"/);
 assert.match(home,/href="\.\/psicotecnicos\//);
 assert.match(home,/id="legal-topic-grid"/);
 assert.match(await readFile("juridica/portal.js","utf8"),/Personal al servicio/);
 assert.match(await readFile("temas/11/index.html","utf8"),/questions\.js/);
 assert.match(await readFile("psicotecnicos/temas/espacial/index.html","utf8"),/data-topic="espacial"/);
});
test("la copia de seguridad conserva soporte para artículos y exportación nativa Android",async()=>{
 const c=await readFile("progress.js","utf8");
 assert.match(c,/j\[0-9\]\+-articles-v1/);
 assert.match(c,/cleanArticle/);
 assert.match(c,/capacitor\.isNativePlatform/);
});

test("referencias normativas del tema 24 cotejadas con el PDF y actividades específicas del 25/26",async()=>{
 const load=async i=>{const txt=await readFile("juridica/"+i+"/data.js","utf8");const win={};vm.runInNewContext(txt,{window:win});return win.LEGAL_SOURCE;};
 const bienes=await load(24),contratos=await load(25),personal=await load(26);
 const refs=bienes.articles.map(a=>a[1]+":"+a[2]);
 for(const n of ["74","75","76"])assert.ok(refs.includes("TRRL:"+n),"Tema 24: art. "+n+" debe citar TRRL, no RBEL");
 for(const n of ["74","75","76"])assert.ok(!refs.includes("RBEL:"+n));
 const a74=bienes.articles.find(a=>a[1]==="TRRL"&&a[2]==="74");
 const a75=bienes.articles.find(a=>a[1]==="TRRL"&&a[2]==="75");
 const a76=bienes.articles.find(a=>a[1]==="TRRL"&&a[2]==="76");
 assert.equal(a74[4],23);
 assert.equal(a75[4],24);
 assert.equal(a76[4],25);
 assert.ok(contratos.articles.some(a=>a[1]==="LCSP"&&a[2]==="71"));
 assert.ok(personal.articles.some(a=>a[1]==="TREBEP"&&a[2]==="97"));
});

test("entrenador jurídico distingue artículos bis, apartados y letras",async()=>{
 const source=await readFile("juridica/legal-study.js","utf8");
 const begin=source.indexOf("const normNum=str=>{"),end=source.indexOf("const pool=()=>",begin);
 assert.ok(begin>=0&&end>begin);
 const normalize=vm.runInNewContext(source.slice(begin,end)+"\n normNum");
 const cases=[
  ["14","14"],["Artículo 17.2","17.2"],["Art. 4.1.d","4.1.d"],
  ["92 bis","92 bis"],["artículo 24 bis","24 bis"],
  ["Art 132,1","132.1"],["Art. 24 TER","24 ter"],
  ["92","92"],["92 bis texto extra",""],["92 ter","92 ter"]
 ];
 for(const [input,expected] of cases)assert.equal(normalize(input),expected,input);
 assert.notEqual(normalize("92"),normalize("92 bis"));
});
