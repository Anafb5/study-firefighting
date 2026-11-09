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
