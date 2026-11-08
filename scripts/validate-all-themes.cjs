#!/usr/bin/env node
"use strict";
/* Integridad estructural de los once temas, sin dependencias externas. */
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const exists=p=>fs.existsSync(path.join(root,p));
const report={};let errors=0;
for(let id=1;id<=11;id++){
 const prefix=id===11?"":"temas/"+id+"/";
 try{
  const scripts=id<=6?[prefix+"data.js","reader-theme-builder.js","reader-questions.js","reader-review-data.js"]:
                id===7?[prefix+"data.js","reader-questions.js","reader-review-data.js"]:
                [prefix+"data.js",prefix+"questions.js",prefix+"review-data.js"];
  const ctx=vm.createContext({window:{},console});
  for(const file of scripts){assert(exists(file),"Falta "+file);new vm.Script(read(file),{filename:file}).runInContext(ctx,{timeout:1000});}
  const m=vm.runInContext("({SECTIONS,TOPICS,CARDS,QUESTIONS,MATCH_SETS,REVIEW_CLASSIFY,REVIEW_ORDER,REVIEW_JUDGE,REVIEW_VALUES})",ctx);
  assert(m.TOPICS.length>=8&&m.SECTIONS.length>0,"Contenido insuficiente");
  const section=new Set(m.SECTIONS.map(s=>s.id)),ids=new Set(m.TOPICS.map(t=>t.id));
  assert.equal(ids.size,m.TOPICS.length,"Apartados repetidos");
  for(const t of m.TOPICS){
   assert(section.has(t.section),"Bloque desconocido de "+t.id);
   assert(t.title&&t.lead&&t.pages&&t.points.length>=3,"Apartado incompleto "+t.id);
   assert(t.points.every(p=>p.length===2&&typeof p[0]==="string"&&typeof p[1]==="string"&&p[1].length>3),"Puntos incompletos");
  }
  for(const q of m.QUESTIONS){
   assert(section.has(q.section),"Sección de pregunta desconocida");
   assert(q.options.length===4&&new Set(q.options).size===4,"Alternativas duplicadas");
   assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,"Respuesta fuera de rango");
   assert(q.q&&q.why&&q.page,"Falta pregunta, explicación o referencia");
  }
  for(const c of m.CARDS)assert(section.has(c[0])&&c.length===4&&c[1]&&c[2],"Tarjeta incompleta");
  assert(m.REVIEW_CLASSIFY.length&&m.REVIEW_ORDER.length&&m.REVIEW_JUDGE.length&&m.REVIEW_VALUES.length,"Faltan modalidades de repaso");
  for(const set of m.REVIEW_CLASSIFY){
   assert(set.items.length>=3&&set.groups.length>=2,"Clasificación insuficiente");
   assert(set.items.every(x=>x[1]>=0&&x[1]<set.groups.length),"Clasificación fuera de rango");
  }
  for(const set of m.REVIEW_ORDER){
   assert(set.steps.length>=3,"Secuencia insuficiente");
   assert.equal(new Set(set.steps).size,set.steps.length,"Pasos repetidos");
  }
  for(const s of m.REVIEW_VALUES){
   assert(s.items.length>0,"Cifras vacías");
   for(const q of s.items)assert(q.length===4&&q[1].length===4&&new Set(q[1]).size===4&&Number.isInteger(q[2])&&q[2]>=0&&q[2]<4&&q[3],"Cifra incorrecta");
  }
  const html=read("temas/"+id+"/index.html");
  assert(html.includes('id="review-values-area"'),"Falta panel de cifras");
  assert(html.includes("study-firefighting-t"+id+"-v1"),"Progreso no aislado");
  const dir=path.join(root,"temas",String(id));
  const refs=[...html.matchAll(/(?:href|src)="([^"]+\.(?:js|css))"/g)].map(x=>x[1]).filter(x=>x.startsWith("."));
  for(const ref of refs)assert(fs.existsSync(path.resolve(dir,ref)),"Recurso inexistente "+ref);
  report[id]={apartados:m.TOPICS.length,tarjetas:m.CARDS.length,preguntas:m.QUESTIONS.length,ejercicios:m.REVIEW_CLASSIFY.length+m.REVIEW_ORDER.length+m.REVIEW_JUDGE.length+m.REVIEW_VALUES.reduce((n,v)=>n+v.items.length,0)};
 }catch(e){errors++;console.error("Tema "+id+": "+e.message);}
}
const catalog=read("catalog.js");
for(let id=1;id<=11;id++)assert(new RegExp("(?:^|[,{}])"+id+":\\{topics:").test(catalog),"Tema "+id+" no publicado en índice");
if(errors){console.error(errors+" tema(s) con errores");process.exitCode=1;}
else console.log("Temario completo: "+JSON.stringify(report,null,2));
