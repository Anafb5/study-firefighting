import test from "node:test";
import assert from "node:assert/strict";
import {OFFICIAL_EXAMS,getOfficialGroup,getOfficialQuestions,scoreOfficial} from "../psicotecnicos/official-exams.mjs";
import {TOPICS} from "../psicotecnicos/topics.mjs";
test("cada uno de los ocho temas tiene pruebas originales del manual y claves verificables",()=>{
 assert.deepEqual(Object.keys(OFFICIAL_EXAMS),TOPICS.map(t=>t.id));
 for(const [topic,doc] of Object.entries(OFFICIAL_EXAMS)){
  assert.ok(doc.pdf.toLowerCase().endsWith(".pdf"));
  assert.equal(Object.keys(doc.groups).length,topic==="grafico"?5:4);
  for(const [id,group] of Object.entries(doc.groups)){
   assert.equal(getOfficialGroup(topic,id),group);
   assert.ok(group.pages.length>=2);
   assert.ok(group.pages.every(n=>Number.isInteger(n)&&n>0));
   assert.equal(group.answers.length,topic==="grafico"?11:10,topic+"/"+id);
   assert.ok(/^[ABCD-]+$/.test(group.answers));
   const questions=getOfficialQuestions(topic,id);
   assert.equal(questions.length,group.answers.length);
   assert.deepEqual(questions.map(x=>x.number),questions.map((_,i)=>group.first+i));
   const allRight=Object.fromEntries(questions.filter(q=>!q.invalid).map(q=>[q.number,q.key]));
   const s=scoreOfficial(topic,id,allRight);
   assert.equal(s.correct,s.graded);
   assert.equal(s.percentage,100);
   assert.equal(s.unanswered,0);
  }
 }
});
test("las inconsistencias del solucionario no se puntúan ni alteran el porcentaje",()=>{
 const spatial=getOfficialQuestions("espacial","A");
 assert.equal(spatial.find(q=>q.number===6).key,null);
 assert.equal(spatial.find(q=>q.number===6).invalid,true);
 const mechanical=getOfficialQuestions("mecanica","C");
 assert.equal(mechanical.find(q=>q.number===4).invalid,true);
 const a=scoreOfficial("mecanica","C",{1:"B",2:"A",3:"C",4:"D",5:"C",6:"C",7:"B",8:"B",9:"C",10:"A"});
 assert.deepEqual(a,{correct:9,graded:9,unanswered:0,percentage:100});
 assert.equal(getOfficialQuestions("mecanica","D").find(q=>q.number===10).invalid,false);
 assert.equal(getOfficialQuestions("perceptiva","D").find(q=>q.number===10).invalid,false);
});
test("el diagnóstico gráfico contiene exactamente las 55 preguntas originales",()=>{
 const qs=Object.entries(OFFICIAL_EXAMS.grafico.groups).flatMap(([id])=>getOfficialQuestions("grafico",id));
 assert.equal(qs.length,55);
 assert.deepEqual(qs.map(x=>x.number),Array.from({length:55},(_,i)=>i+1));
 assert.equal(qs.filter(q=>!q.invalid).length,55);
});

test("el banco integrado contiene las 335 preguntas originales y figuras espaciales completas",async()=>{
 const {readFile}=await import("node:fs/promises");
 const bank=JSON.parse(await readFile("psicotecnicos/official-bank.json","utf8"));
 let total=0;
 for(const [topic,groups] of Object.entries(bank.groups)){
  for(const [set,questions] of Object.entries(groups)){
   assert.equal(questions.length,topic==="grafico"?11:10,`${topic}/${set}`);
   for(const q of questions){
    total++;
    assert.equal(q.k,getOfficialQuestions(topic,set).find(k=>k.number===q.n)?.key??"-",`${topic}/${set}/${q.n}`);
    assert.ok(typeof q.q==="string"&&q.q.length>0);
    if(topic==="grafico"||topic==="espacial"){
      assert.ok(q.img||q.refImg,`Figura obligatoria ${topic}/${set}/${q.n}`);
      for(const value of [q.img,q.refImg].filter(Boolean)) assert.ok(value.startsWith("iVBORw0KGgo"),"PNG válido en base64");
    }
   }
  }
 }
 assert.equal(total,335);
});
