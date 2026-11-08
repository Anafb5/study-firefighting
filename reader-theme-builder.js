/* Constructor de temas: mantiene un banco original por PDF sin repetir estructuras.
 * Solo lo usan Temas 1–6; los Temas 7–11 conservan sus datos existentes.
 * Cada pregunta de cuatro opciones incluye explicación y página de origen. */
"use strict";
const SOURCE=window.READER_SOURCE;
if(!SOURCE||!Array.isArray(SOURCE.sections)||!SOURCE.sections.length)throw Error("Fuente de tema no definida");
const SECTIONS=SOURCE.sections.map((s,i)=>({id:s.id,n:String(i+1).padStart(2,"0"),title:s.title,sub:s.sub,pages:s.pages}));
const TOPICS=[];
for(const section of SOURCE.sections){
 for(let i=0;i<section.topics.length;i++){
  const topic=section.topics[i];
  if(!Array.isArray(topic.points)||topic.points.length<4)throw Error("Apartado incompleto: "+topic.title);
  TOPICS.push({id:(SECTIONS.findIndex(s=>s.id===section.id)+1)+"-"+(i+1),section:section.id,number:(SECTIONS.findIndex(s=>s.id===section.id)+1)+"."+(i+1),title:topic.title,pages:topic.pages,lead:topic.lead||topic.points[0][1],points:topic.points,format:topic.format||"default",tip:topic.tip||topic.points.at(-1)[1],...(topic.formulas?{formulas:topic.formulas}:{}),...(topic.table?{table:topic.table}:{})});
 }
}
const CARDS=TOPICS.flatMap(t=>t.points.map(p=>[t.section,"¿Qué significa o indica «"+p[0]+"»?",p[1],"p. "+t.pages]));
const MATCH_SETS=SOURCE.sections.map(s=>{
 const selected=TOPICS.filter(t=>t.section===s.id).flatMap(t=>t.points.slice(0,3));
 return {title:"Conceptos: "+s.title,pairs:selected.slice(0,12).map(p=>[p[0],p[1]])};
});
function wrongOptions(t,idx){
 const other=t.points.filter((p,i)=>i!==idx).map(x=>x[1]);
 const extra=TOPICS.filter(x=>x.section===t.section&&x.id!==t.id).flatMap(x=>x.points.slice(0,1).map(p=>p[1]));
 return Array.from(new Set([...other,...extra])).slice(0,3);
}
const RAW_QUESTIONS=[];
for(const t of TOPICS){
 t.points.slice(0,Math.min(4,t.points.length)).forEach((p,i)=>{
  const distractors=wrongOptions(t,i);
  if(distractors.length<3)throw Error("Distractores insuficientes "+t.id);
  RAW_QUESTIONS.push([t.section,"¿Qué afirmación corresponde al concepto «"+p[0]+"»?",p[1],distractors,"Según el apartado "+t.number+" («"+t.title+"»): "+p[1],"p. "+t.pages]);
 });
}
if(SOURCE.extraQuestions)RAW_QUESTIONS.push(...SOURCE.extraQuestions);
const RAW_REVIEWS={
 classify:SOURCE.classify||[],
 order:SOURCE.order||[],
 judge:SOURCE.judge||[],
 values:SOURCE.values||[]
};
if(!RAW_REVIEWS.classify.length||!RAW_REVIEWS.order.length||!RAW_REVIEWS.judge.length||!RAW_REVIEWS.values.length)throw Error("Un tema requiere modalidades de repaso útiles");
