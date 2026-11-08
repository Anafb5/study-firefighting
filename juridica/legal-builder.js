/* Temario jurídico — datos explícitos por PDF, sin sustituir el manual por la ley actual.
 * Las referencias se identifican siempre con norma + artículo + apartado.
 * El banco se fundamenta en entradas revisadas, nunca en números inferidos. */
"use strict";
const SOURCE=window.LEGAL_SOURCE;
if(!SOURCE||!Array.isArray(SOURCE.sections)||!SOURCE.sections.length)throw Error("No se ha cargado el temario jurídico del PDF");
const SECTIONS=SOURCE.sections.map((s,i)=>({id:s.id,n:String(i+1).padStart(2,"0"),title:s.title,sub:s.sub||s.title,pages:s.pages}));
const TOPICS=[];
SOURCE.sections.forEach((section,i)=>{
 section.topics.forEach((topic,j)=>{
  if(!Array.isArray(topic.points)||topic.points.length<4)throw Error("Falta contenido revisado en "+topic.title);
  TOPICS.push({id:(i+1)+"-"+(j+1),section:section.id,number:(i+1)+"."+(j+1),title:topic.title,pages:topic.pages,lead:topic.lead||topic.points[0][1],points:topic.points,format:topic.format||"default",tip:topic.tip||"",...(topic.table?{table:topic.table}:{}),...(topic.formulas?{formulas:topic.formulas}:{}),...(topic.visual?{visual:topic.visual}:{})});
 });
});
const ARTICLES=(SOURCE.articles||[]).map((a,i)=>({id:i,section:a[0],norm:a[1],art:String(a[2]),label:a[3],page:a[4],note:a[5]||""}));
const CARDS=[
 ...TOPICS.flatMap(t=>t.points.map(([name,definition])=>[t.section,"¿Qué significa «"+name+"» según este tema?",definition,"p. "+t.pages])),
 ...ARTICLES.flatMap(a=>[[a.section,"¿Qué regula el artículo "+a.art+" de "+a.norm+"?",a.label,"p. "+a.page],
 [a.section,"¿En qué artículo de "+a.norm+" se encuentra «"+a.label+"»?","Art. "+a.art+" · "+a.norm,"p. "+a.page]])
];
const MATCH_SETS=SOURCE.matches||SECTIONS.map(s=>({title:"Conceptos jurídicos · "+s.title,
 pairs:TOPICS.filter(t=>t.section===s.id).flatMap(t=>t.points.slice(0,2)).slice(0,8)}));
function distinct(values){return [...new Set(values)];}
function questionOptions(correct,others,seed){
 const choices=[correct,...distinct(others).filter(v=>v!==correct).slice(0,3)];
 if(choices.length!==4)return null;
 const shift=(seed*3+1)%4;
 return {options:choices.slice(shift).concat(choices.slice(0,shift)),correct:(4-shift)%4};
}
const QUESTIONS=[];
ARTICLES.forEach((a,i)=>{
 const base=ARTICLES.filter(b=>b.id!==a.id&&b.norm===a.norm);
 const preferred=base.filter(b=>b.section===a.section);
 const other=preferred.concat(base.filter(b=>b.section!==a.section));
 const nums=questionOptions("Art. "+a.art+" · "+a.norm,other.map(b=>"Art. "+b.art+" · "+b.norm),i);
 if(nums)QUESTIONS.push({id:"a"+i+"n",section:a.section,q:"Según el PDF, ¿qué artículo de "+a.norm+" corresponde a «"+a.label+"»?",
  options:nums.options,correct:nums.correct,why:"El manual vincula esta materia al artículo "+a.art+" de "+a.norm+". "+a.note,page:"p. "+a.page,difficulty:"Artículo"});
 const labels=questionOptions(a.label,other.map(b=>b.label),i+7);
 if(labels)QUESTIONS.push({id:"a"+i+"c",section:a.section,q:"Según el PDF, ¿qué contenido corresponde al artículo "+a.art+" de "+a.norm+"?",
  options:labels.options,correct:labels.correct,why:"Este artículo trata de: "+a.label+". "+a.note,page:"p. "+a.page,difficulty:"Contenido"});
});
const REVIEW_CLASSIFY=SOURCE.classify||[];
const REVIEW_ORDER=SOURCE.order||[];
const REVIEW_JUDGE=SOURCE.judge||[];
const REVIEW_VALUES=SOURCE.values||[];
if(!QUESTIONS.length)throw Error("Los ejercicios jurídicos necesitan artículos verificados en el PDF");
if(!REVIEW_CLASSIFY.length||!REVIEW_ORDER.length||!REVIEW_JUDGE.length||!REVIEW_VALUES.length)throw Error("Faltan ejercicios jurídicos revisados");
window.LEGAL_ARTICLES=ARTICLES;
window.LEGAL_NOTICE=SOURCE.notice||[];
