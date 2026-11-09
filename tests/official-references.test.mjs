import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {PERCEPTUAL_REFERENCES,countSymbol,countPair,perceptualTableFor} from "../psicotecnicos/official-references.mjs";
import {getOfficialQuestions} from "../psicotecnicos/official-exams.mjs";

const answer=(set,n)=>getOfficialQuestions("perceptiva",set).find(q=>q.number===n);
const choose=(set,n,correctText)=> {
 const q=bank.groups.perceptiva[set].find(q=>q.n===n);
 return Object.entries(q.o).filter(([_,val])=>val===String(correctText)).map(([letter])=>letter);
};
const bank=JSON.parse(await readFile("psicotecnicos/official-bank.json","utf8"));

test("las cuatro tablas están fielmente estructuradas y se reutilizan en 8 preguntas",()=>{
 assert.deepEqual(Object.keys(PERCEPTUAL_REFERENCES),["A","B","C","D"]);
 const expected={A:[5,5,[8,9]],B:[4,4,[3,4]],C:[5,5,[8,9]],D:[4,4,[3,4]]};
 for(const [set,[rows,cols,ids]] of Object.entries(expected)){
  const ref=PERCEPTUAL_REFERENCES[set];
  assert.equal(ref.rows.length,rows);
  assert.ok(ref.rows.every(row=>row.length===cols));
  assert.deepEqual(ref.questions,ids);
  assert.ok(ref.rows.flat().every(cell=>cell.length>=6&&!/\s/.test(cell)));
  for(const num of ids) {
   assert.equal(perceptualTableFor(set,num),ref);
   assert.ok(bank.groups.perceptiva[set].some(q=>q.n===num));
  }
  assert.equal(perceptualTableFor(set,1),null);
 }
 // Casilla de nueve cifras conservada literalmente como aparece en el PDF.
 assert.equal(PERCEPTUAL_REFERENCES.A.rows[4][1],"888868686");
});
test("el recuento independiente coincide con los solucionarios salvo discrepancia documentada",()=>{
 const a=PERCEPTUAL_REFERENCES.A,b=PERCEPTUAL_REFERENCES.B,c=PERCEPTUAL_REFERENCES.C,d=PERCEPTUAL_REFERENCES.D;
 assert.equal(countSymbol(a,3,"6"),19);
 assert.deepEqual(choose("A",8,19),["C"]);
 assert.equal(answer("A",8).key,"C");
 assert.equal(countPair(a,[0,1],"86"),26);
 assert.deepEqual(choose("A",9,26),["D"]);
 assert.equal(answer("A",9).key,"D");
 assert.equal(b.rows.reduce((sum,row)=>sum+[...row[1]].filter(char=>"AEIOU".includes(char)).length,0),6);
 assert.equal(answer("B",3).key,"A");
 // En la pregunta B4 la columna D contiene 8 caracteres en todas las filas.
 assert.ok(b.rows.every(row=>row[3].length===8));
 assert.ok(b.rows[0].join("").split("D").length>b.rows[0].join("").split("F").length);
 assert.equal(answer("B",4).key,"B");
 assert.equal(countSymbol(c,1,"F"),9);
 assert.equal(answer("C",8).key,"D");
 assert.equal(c.rows.flat().join("").replace(/[EFILT]/g,"").length,1);
 assert.equal(answer("C",9).key,"B");
 // En la D3 se cuentan S,S,T,U,X: cinco posteriores a R.
 const posterior="STUVWXYZ";
 const found=[...d.rows.flat().join("")].filter(ch=>posterior.includes(ch));
 assert.deepEqual([...found].sort(),["S","S","T","U","X"]);
 assert.equal(answer("D",3).key,"B","La clave del PDF indica B (4), pese al recuento 5 (C)");
 assert.equal(answer("D",3).invalid,true,"No puntuar una pregunta con clave contradictoria");
 assert.ok(d.rows.every(row=>row.length===4));
 assert.equal(d.rows.reduce((n,row)=>n+[...row[3]].filter(ch=>ch==="P").length,0)>d.rows.reduce((n,row)=>n+[...row[3]].filter(ch=>ch==="Ñ").length,0),true);
 assert.equal(answer("D",4).key,"C");
});
test("cada pregunta integrada tiene respuesta, alternativas legibles o figura y ninguna opción de otra pregunta",()=>{
 let total=0,invalid=0;
 for(const [topic,groups] of Object.entries(bank.groups))for(const [set,questions] of Object.entries(groups)){
  for(const q of questions){
   total++;
   const key=getOfficialQuestions(topic,set).find(x=>x.number===q.n);
   assert.ok(key,"Clave ausente "+topic+"/"+set+"/"+q.n);
   if(key.invalid)invalid++;
   assert.equal(q.k,key.key??"-","Respuesta transcrita distinta "+topic+"/"+set+"/"+q.n);
   assert.ok(q.q.trim().length>0);
   const values=Object.values(q.o||{});
   assert.ok(values.length===4||q.img||q.refImg,"Alternativas y figuras ausentes "+topic+"/"+set+"/"+q.n);
   for(const option of values){
    assert.ok(typeof option==="string"&&option.trim().length>0);
    assert.doesNotMatch(option,/Observa (la siguiente|el siguiente).*(imagen|laberinto)|responde a las preguntas:/i,
     "Se ha pegado una instrucción del siguiente ejercicio en "+topic+"/"+set+"/"+q.n);
   }
  }
 }
 assert.equal(total,335);
 assert.equal(invalid,3);
});
