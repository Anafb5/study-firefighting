// Claves copiadas de las tablas de soluciones de los PDF aportados por la usuaria.
// No son claves de un examen oficial de convocatoria. Un guion indica un fallo de la clave impresa.
const def=(label,start,end,answers,extra={})=>({label,pages:Array.from({length:end-start+1},(_,i)=>start+i),answers,first:extra.first??1,studyPage:extra.studyPage??null,questionPage:extra.questionPage??null,notes:extra.notes??""});
const groups=(items)=>Object.fromEntries(items.map(([name,start,end,answers,extra])=>[name,def("Prueba "+name,start,end,answers,extra||{})]));
export const OFFICIAL_EXAMS={
 linguistico:{pdf:"PRUEBAS_LING#U00dc#U00cdSTICAS_RAZONAMIENTO.pdf",display:"Pruebas lingüísticas de razonamiento.pdf",groups:groups([
  ["A",19,21,"BACCDACBBC"],["B",22,23,"CBCABCCCCC"],["C",24,25,"CACDBCDBBB"],["D",26,27,"CCBDDBCACA"]
 ])},
 numerico:{pdf:"PRUEBAS_NUMERICAS_RAZONAMIENTO.pdf",display:"Pruebas numéricas de razonamiento.pdf",groups:groups([
  ["A",65,66,"ABABADCDCC"],["B",67,68,"DDCBCBBBAC"],["C",69,70,"DCCBDCABDC"],["D",71,72,"CBDDBDCDCA"]
 ])},
 grafico:{pdf:"PRUEBAS_GRAFICAS_RAZONAMIENTO.pdf",display:"Pruebas gráficas de razonamiento.pdf",groups:{
  "1":def("Diagnóstico · preguntas 1–11",2,4,"BDCABCBBABB",{first:1}),
  "2":def("Diagnóstico · preguntas 12–22",4,6,"DAADCCCBDDC",{first:12}),
  "3":def("Diagnóstico · preguntas 23–33",6,8,"ACCBBACBDBB",{first:23}),
  "4":def("Diagnóstico · preguntas 34–44",9,11,"BADABBABCDC",{first:34}),
  "5":def("Diagnóstico · preguntas 45–55",11,13,"AABBDDDDDCB",{first:45})
 }},
 espacial:{pdf:"FLO_04_PRUEBAS_APTITUD_ESPACIAL.pdf",display:"Pruebas de aptitud espacial.pdf",groups:groups([
  ["A",2,5,"CCBBC-BCDC",{notes:"La tabla original no contiene una respuesta legible para la pregunta 6; queda sin puntuar."}],
  ["B",6,9,"ACDCCBCCDA"],["C",10,13,"ADDACABBCD"],["D",14,17,"BADABDBADD"]
 ])},
 mecanica:{pdf:"PRUEBAS_APTITUD_MECANICA.pdf",display:"Pruebas de aptitud mecánica.pdf",groups:groups([
  ["A",2,4,"AAABCADBCB"],["B",5,8,"AABDACBBCB"],
  ["C",9,12,"BAC-CCBBCA",{notes:"La solución impresa de la pregunta 4 figura como E, aunque las opciones visibles son A–D; no se puntúa."}],
  ["D",13,16,"DBBDCCDBCA"]
 ])},
 perceptiva:{pdf:"PRUEBAS_APTITUD_PERCEPTIVA.pdf",display:"Pruebas de aptitud perceptiva.pdf",groups:groups([
  ["A",2,4,"BADADBDCDC"],["B",5,8,"DBABCCCBCA"],["C",9,11,"CDCCAD BDBD".replace(/ /g,"")],
  ["D",12,15,"CABCCBCABB",{notes:"La pregunta 3 tiene una discrepancia en el solucionario: la tabla contiene cinco letras posteriores a la R (dos S, T, U, X), por lo que la respuesta deducida es C, pero la clave impresa indica B. Se presenta para practicar, sin puntuar."}]
 ])},
 memoria:{pdf:"FLO_07_PRUEBAS_MEMORIA.pdf",display:"Pruebas de aptitud de memoria.pdf",groups:groups([
  ["A",2,4,"CCABBCDAAD",{studyPage:2,questionPage:3}],
  ["B",5,7,"AC CDB CDBBC".replace(/ /g,""),{studyPage:5,questionPage:6}],
  ["C",8,10,"CCBBBCADBD",{studyPage:8,questionPage:9}],
  ["D",11,13,"BCCBCCADAD",{studyPage:11,questionPage:12}]
 ])},
 abstracto:{pdf:"PRUEBAS_RAZONAMIENTO_ABSTRACTO.pdf",display:"Pruebas de razonamiento abstracto.pdf",groups:groups([
  ["A",2,5,"BCBBBABDBA"],["B",6,9,"ADDD AACCBA".replace(/ /g,"")],["C",10,12,"DCCBABACAA"],["D",13,15,"DCBADCCADC"]
 ])}
};
export const PDF_ALIASES={
 "linguistico":["PRUEBAS_LING","LINGÜÍST","LING#U00dc"],
 "numerico":["PRUEBAS_NUMERICAS"],
 "grafico":["PRUEBAS_GRAFICAS"],
 "espacial":["FLO_04_PRUEBAS_APTITUD_ESPACIAL"],
 "mecanica":["PRUEBAS_APTITUD_MECANICA"],
 "perceptiva":["PRUEBAS_APTITUD_PERCEPTIVA"],
 "memoria":["FLO_07_PRUEBAS_MEMORIA"],
 "abstracto":["PRUEBAS_RAZONAMIENTO_ABSTRACTO"]
};
export function getOfficialGroup(topicId,groupId){return OFFICIAL_EXAMS[topicId]?.groups[groupId]||null;}
export function getOfficialQuestions(topicId,groupId){
 const group=getOfficialGroup(topicId,groupId);if(!group)throw Error("Prueba original desconocida");
 return Array.from(group.answers, (key,i)=>({number:group.first+i,key:/^[ABCD]$/.test(key)?key:null,
  invalid:key==="-"||(topicId==="perceptiva"&&groupId==="D"&&i===2)
 }));
}
export function scoreOfficial(topicId,groupId,responses){
 const items=getOfficialQuestions(topicId,groupId);let correct=0,graded=0,unanswered=0;
 for(const q of items){if(q.invalid)continue;graded++;if(responses[q.number]==null)unanswered++;if(responses[q.number]===q.key)correct++;}
 return{correct,graded,unanswered,percentage:graded?Math.round(correct/graded*100):0};
}
