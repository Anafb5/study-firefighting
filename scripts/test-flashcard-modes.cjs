#!/usr/bin/env node
"use strict";
/* Pruebas de los dos modos de tarjetas sobre los 19 temas. Sin dependencias externas.
 * node scripts/test-flashcard-modes.cjs */
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const ROOT=path.resolve(__dirname,"..");
const source=p=>fs.readFileSync(path.join(ROOT,p),"utf8");
function makeApp(theme,shared){
 const saved=shared||new Map(),nodes=new Map(),listeners=new Map();
 const element=id=>{
  if(nodes.has(id))return nodes.get(id);
  const classes=new Set();
  const node={id,innerHTML:"",textContent:"",value:["cards-filter","exam-section","exam-pool"].includes(id)?"all":id==="match-filter"?"0":id==="exam-count"?"10":"",checked:false,disabled:false,
   classList:{add(x){classes.add(x)},remove(x){classes.delete(x)},toggle(x,b){if(b===undefined)b=!classes.has(x);b?classes.add(x):classes.delete(x);return b},contains(x){return classes.has(x)}},
   addEventListener(){},insertAdjacentHTML(_,text){this.innerHTML+=text},querySelectorAll(){return[]},querySelector(){return null},setAttribute(){}
  };
  nodes.set(id,node);return node;
 };
 const document={getElementById:element,querySelectorAll(){return[]},querySelector(){return null},addEventListener(type,fn){
  if(!listeners.has(type))listeners.set(type,[]);
  listeners.get(type).push(fn);
 }};
 const localStorage={getItem:k=>saved.get(k)||null,setItem:(k,v)=>saved.set(k,v)};
 const window={STUDY_CONFIG:{store:"test-flash-"+theme},scrollTo(){}};
 const context=vm.createContext({window,document,localStorage,confirm:()=>true,setTimeout:()=>0,clearTimeout(){}});
 const base=theme===11?"":("temas/"+theme+"/");
 const files=(theme<=6||theme>=12)?[base+"data.js","reader-theme-builder.js","reader-questions.js"]:
 theme===7?[base+"data.js","reader-questions.js"]:
 [base+"data.js",base+"questions.js"];
 for(const file of [...files,"app.js"])new vm.Script(source(file),{filename:file}).runInContext(context,{timeout:1500});
 for(const fn of listeners.get("DOMContentLoaded")||[])fn();
 function click(dataset,id=""){
  const button={dataset,id,closest(tag){return tag==="button"?this:null}};
  for(const fn of listeners.get("click")||[])fn({target:button});
 }
 return {window,element,click,saved,storageKey:window.STUDY_CONFIG.store};
}
let count=0;
for(let theme=1;theme<=19;theme++){
 const app=makeApp(theme);
 const html=()=>app.element("flashcard-area").innerHTML;
 const snap=()=>app.window.FireStudySession.snapshot();
 const mastered=()=>JSON.parse(app.saved.get(app.storageKey)||'{"mastered":[]}').mastered||[];
 app.click({view:"tarjetas"});
 assert(html().includes('id="flashcard-flip"'),"Tema "+theme+": modo original no disponible");
 app.click({cardsMode:"quiz"});
 assert(html().includes("flash-quiz"),"Tema "+theme+": no inicia el nuevo modo");
 const original=snap().cards,correctID=original.order[original.index],correct=original.quizOptions.indexOf(correctID);
 assert(original.quizOptions.length>=3&&original.quizOptions.length<=4,"Tema "+theme+": alternativas insuficientes");
 assert.equal(new Set(original.quizOptions).size,original.quizOptions.length,"Tema "+theme+": distractores duplicados");
 assert(correct>=0,"Tema "+theme+": respuesta correcta ausente");
 app.click({cardAnswer:String(correct)});
 assert(html().includes("Respuesta correcta."),"Tema "+theme+": no indica acierto");
 assert(html().includes('data-cards-judge="known"'),"Tema "+theme+": valoración voluntaria ausente");
 assert.equal(mastered().length,0,"Tema "+theme+": el acierto no puede dominar automáticamente");
 const mid=snap();
 const restored=makeApp(theme,app.saved);
 restored.click({view:"tarjetas"});
 restored.window.FireStudySession.restore(mid);
 assert(restored.element("flashcard-area").innerHTML.includes("Respuesta correcta."),"Tema "+theme+": restauración de respuesta falla");
 app.click({cardsJudge:"pending"});
 assert.equal(mastered().length,0,"Tema "+theme+": un acierto valorado como pendiente ha dominado tarjeta");
 const second=snap().cards,secondID=second.order[second.index],wrong=second.quizOptions.findIndex(id=>id!==secondID);
 assert(wrong>=0,"Tema "+theme+": no hay alternativa errónea");
 app.click({cardAnswer:String(wrong)});
 assert(html().includes("Respuesta incorrecta."),"Tema "+theme+": no indica fallo");
 app.click({cardsJudge:"known"});
 assert(mastered().includes(secondID),"Tema "+theme+": no acepta como dominada la tarjeta fallada");
 app.click({cardsMode:"flip"});
 assert(html().includes('id="flashcard-flip"'),"Tema "+theme+": no vuelve al modo original");
 assert.equal(app.saved.get(app.storageKey+"-cards-mode"),"flip","Tema "+theme+": no conserva preferencia");
 count++;
}
console.log("OK: "+count+" temas · modo clásico, 3/4 opciones, corrección, autovaloración y reanudación.");
