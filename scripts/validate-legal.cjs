#!/usr/bin/env node
"use strict";
/* Node 22 · Sin paquetes externos · node scripts/validate-legal.cjs */
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const catalog=read("catalog.js");
assert(catalog.includes("const legalTitles="),"Falta listado de los 26 temas jurídicos");
assert(catalog.includes('"j'+"" )||catalog.includes("study-firefighting-j"),"Falta clave jurídica aislada");
for(const file of ["juridica/legal-builder.js","juridica/legal-study.js","juridica/legal.css","progress.js","app.js"])assert(fs.existsSync(path.join(root,file)),"Falta "+file);
const audit=[];
for(let i=1;i<=26;i++){
 const file="juridica/"+i+"/data.js";
 if(!fs.existsSync(path.join(root,file))){audit.push({tema:i,estado:"en preparación"});continue;}
 const win={},ctx=vm.createContext({window:win});
 new vm.Script(read(file),{filename:file}).runInContext(ctx,{timeout:1000});
 assert(win.LEGAL_SOURCE?.sections?.length>0,"Tema "+i+": sin contenido");
 new vm.Script(read("juridica/legal-builder.js"),{filename:"juridica/legal-builder.js"}).runInContext(ctx,{timeout:1000});
 const data=vm.runInContext("({SECTIONS,TOPICS,CARDS,ARTICLES,QUESTIONS,MATCH_SETS,REVIEW_CLASSIFY,REVIEW_ORDER,REVIEW_JUDGE,REVIEW_VALUES})",ctx);
 assert(data.TOPICS.length>=6,"Tema "+i+": número insuficiente de apartados revisados");
 const sections=new Set(data.SECTIONS.map(s=>s.id)),keys=new Set();
 for(const a of data.ARTICLES){
  assert(sections.has(a.section),"Tema "+i+": artículo con sección inexistente");
  assert(a.art&&a.norm&&a.label&&Number.isInteger(a.page)&&a.page>0&&a.page<=win.LEGAL_SOURCE.pdfPages,"Artículo sin fuente correcta");
  const key=a.norm+":"+a.art;
  assert(!keys.has(key),"Tema "+i+": artículo duplicado "+key);
  keys.add(key);
  assert(!/^(?:art[.íi]culo)?\s*\d+[.:]/i.test(a.label),"Tema "+i+": el enunciado da el número de artículo");
 }
 for(const t of data.TOPICS){
  assert(t.points.length>=4&&t.pages&&t.title&&t.lead,"Tema "+i+": apartado incompleto");
 }
 for(const q of data.QUESTIONS){
  assert(sections.has(q.section),"Tema "+i+": sección incorrecta");
  assert(q.options.length===4&&new Set(q.options).size===4,"Tema "+i+": alternativas duplicadas");
  assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,"Tema "+i+": índice de respuesta inválido");
  assert(q.q&&q.why&&q.page,"Tema "+i+": pregunta sin explicación o referencia");
 }
 assert(data.REVIEW_CLASSIFY.length&&data.REVIEW_ORDER.length&&data.REVIEW_JUDGE.length&&data.REVIEW_VALUES.length,"Tema "+i+": falta modalidad de repaso");
 const html="juridica/"+i+"/index.html";
 assert(fs.existsSync(path.join(root,html)),"Tema "+i+": página no publicada");
 const doc=read(html);
 assert(doc.includes("study-firefighting-j"+i+"-v1"),"Tema "+i+": clave de progreso compartida accidentalmente");
 assert(doc.includes('id="view-articulos"'),"Tema "+i+": falta entrenador de artículos");
 const dir=path.join(root,"juridica",String(i));
 const refs=[...doc.matchAll(/(?:href|src)="([^"]+\.(?:js|css))"/g)].map(x=>x[1]).filter(x=>x.startsWith("."));
 for(const ref of refs)assert(fs.existsSync(path.resolve(dir,ref)),"Tema "+i+": recurso roto "+ref);
 audit.push({tema:i,apartados:data.TOPICS.length,articulos:data.ARTICLES.length,tarjetas:data.CARDS.length,preguntas:data.QUESTIONS.length});
}
assert(audit.length===26,"Faltan temas en la biblioteca");
console.log("Jurídica validada estructuralmente: "+JSON.stringify(audit));
