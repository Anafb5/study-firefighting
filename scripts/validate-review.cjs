#!/usr/bin/env node
/* Auditoría del banco de repaso de los temas publicados.
   Sin paquetes externos: node scripts/validate-review.cjs */
"use strict";
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const root=path.join(__dirname,"..");
function content(file){return fs.readFileSync(path.join(root,file),"utf8");}
function model(theme){
 const folder=theme===11?"":("temas/"+theme+"/");
 const js=content(folder+"data.js")+"\n"+content(folder+"review-data.js")+"\n"+
 "({SECTIONS,TOPICS,CARDS,MATCH_SETS,REVIEW_CLASSIFY,REVIEW_ORDER,REVIEW_JUDGE,REVIEW_VALUES})";
 return vm.runInNewContext(js,{}, {timeout:1000});
}
const count={};
for(const theme of [9,10,11]){
 const m=model(theme),prefix="Tema "+theme+": ";
 assert(m.TOPICS.length>0,prefix+"sin temario");
 assert(m.REVIEW_VALUES.length>0,prefix+"sin ejercicios de cifras");
 assert(m.REVIEW_ORDER.length>0,prefix+"sin secuencias");
 const pages=content("temas/"+theme+"/index.html");
 assert(pages.includes('id="review-values-area"'),prefix+"falta panel de cifras");
 assert(pages.includes('id="review-values-select"'),prefix+"falta selector de cifras");
 for(const [i,set] of m.REVIEW_VALUES.entries()){
  assert(set.name&&set.why,prefix+"banco de cifras "+i+" incompleto");
  assert(set.items.length>0,prefix+"banco de cifras vacío");
  for(const [j,q] of set.items.entries()){
   assert.equal(q.length,4,prefix+"cifra "+i+"/"+j+" con esquema inválido");
   assert(typeof q[0]==="string"&&q[0].length>=18,prefix+"enunciado de cifra insuficiente");
   assert.equal(q[1].length,4,prefix+"debe tener cuatro alternativas disponibles solo como pista");
   assert.equal(new Set(q[1]).size,4,prefix+"alternativas duplicadas");
   assert(Number.isInteger(q[2])&&q[2]>=0&&q[2]<4,prefix+"índice correcto inválido");
   assert(/\d/.test(q[1][q[2]]),prefix+"respuesta no numérica");
   assert(typeof q[3]==="string"&&q[3].length>10,prefix+"falta explicación");
  }
 }
 for(const [i,set] of m.REVIEW_CLASSIFY.entries()){
  assert(set.groups.length>1&&set.items.length>2&&set.why,prefix+"clasificación incompleta "+i);
  for(const [question,answer] of set.items){
   assert(Number.isInteger(answer)&&answer>=0&&answer<set.groups.length,prefix+"categoría inexistente");
   assert(typeof question==="string"&&question.length>=3,prefix+"etiqueta vacía");
  }
 }
 for(const [i,set] of m.REVIEW_ORDER.entries()){
  assert(set.name&&set.why&&set.prompt,prefix+"falta objetivo o fundamentación en orden "+i);
  assert(set.steps.length>=3,prefix+"secuencia con menos de 3 actuaciones");
  assert.equal(new Set(set.steps).size,set.steps.length,prefix+"pasos repetidos");
  const selfAnswer=/\b(?:nivel|categoría)\s*\d+\s*[·:]/i;
  assert(!set.steps.some(s=>selfAnswer.test(s)),prefix+"ordena niveles ya rotulados; usar Cifras");
 }
 for(const [question,truth,explanation] of m.REVIEW_JUDGE){
  assert(typeof question==="string"&&question.length>12,prefix+"afirmación pobre");
  assert(typeof truth==="boolean",prefix+"veredicto inválido");
  assert(typeof explanation==="string"&&explanation.length>=10,prefix+"falta justificación");
 }
 for(const set of m.MATCH_SETS){
  assert(set.pairs.length>=3,prefix+"faltan parejas");
  for(const pair of set.pairs)assert(pair.length===2&&pair.every(x=>typeof x==="string"&&x.trim()),prefix+"asociación incompleta");
 }
 count[theme]={temario:m.TOPICS.length,matching:m.MATCH_SETS.length,clasificar:m.REVIEW_CLASSIFY.length,ordenar:m.REVIEW_ORDER.length,cifras:m.REVIEW_VALUES.reduce((a,s)=>a+s.items.length,0),errores:m.REVIEW_JUDGE.length};
}
assert(content("review.js").includes("function submitValue"),"Falta mecanismo de respuesta escrita");
assert(content("review.js").includes("¡Correcto sin pistas!"),"No se distingue acierto sin pistas");
console.log("Ejercicios validados:",JSON.stringify(count,null,2));
