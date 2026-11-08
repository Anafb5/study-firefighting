(function(){
"use strict";
const FORMAT="fire-study-backup", STORAGE_PATTERN=/^study-firefighting-t[0-9]+-v1$/;
const isInt=x=>Number.isInteger(x)&&x>=0;
function clean(x){
 if(!x||typeof x!=="object"||Array.isArray(x))throw Error("Datos de progreso incorrectos");
 const read=(Array.isArray(x.read)?x.read:[]).filter(v=>typeof v==="string"&&/^[0-9]+-[0-9]+$/.test(v)).slice(0,200);
 const mastered=(Array.isArray(x.mastered)?x.mastered:[]).filter(isInt).slice(0,1000);
 const wrong=(Array.isArray(x.wrong)?x.wrong:[]).filter(v=>typeof v==="string"&&/^q[0-9]+$/.test(v)).slice(0,1000);
 const history=(Array.isArray(x.history)?x.history:[]).filter(v=>v&&typeof v==="object"&&isInt(v.percent)&&v.percent<=100&&isInt(v.correct)&&isInt(v.total)&&typeof v.date==="string").slice(0,100).map(v=>({date:v.date.slice(0,80),percent:v.percent,correct:v.correct,total:v.total}));
 return {read:Array.from(new Set(read)),mastered:Array.from(new Set(mastered)),wrong:Array.from(new Set(wrong)),history};
}
function summary(key="study-firefighting-t11-v1"){
 try{return clean(JSON.parse(localStorage.getItem(key)||"{}"));}catch(e){return clean({});}
}
function buildBackup(){
 const topics={};
 for(let i=0;i<localStorage.length;i++){
  const key=localStorage.key(i);
  if(STORAGE_PATTERN.test(key)){try{topics[key]=summary(key);}catch(e){}}
 }
 return {format:FORMAT,version:1,exportedAt:new Date().toISOString(),topics};
}
function validateBackup(data){
 if(!data||data.format!==FORMAT||data.version!==1||!data.topics||typeof data.topics!=="object"||Array.isArray(data.topics))throw Error("No es una copia compatible");
 const entries=Object.entries(data.topics);
 if(!entries.length)throw Error("La copia no contiene ningún tema");
 if(entries.some(([key])=>!STORAGE_PATTERN.test(key)))throw Error("Identificador de tema no compatible");
 return entries.map(([key,value])=>[key,clean(value)]);
}
function notice(message,error=false){
 const t=document.getElementById("toast");
 if(t){t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),4000);}
 const status=document.getElementById("progress-status");
 if(status){status.textContent=message;status.style.color=error?"#af483b":"#1d8062";}
}
async function exportFile(){
 const data=buildBackup(), json=JSON.stringify(data,null,2);
 const filename="fuego-estudio-progreso-"+new Date().toISOString().slice(0,10)+".json";
 const capacitor=window.Capacitor;
 if(capacitor&&capacitor.isNativePlatform&&capacitor.isNativePlatform()){
  const plugins=capacitor.Plugins||{},filesystem=plugins.Filesystem,share=plugins.Share;
  if(!filesystem||!share)throw Error("No se puede abrir el guardado del sistema");
  await filesystem.writeFile({path:filename,data:json,directory:"CACHE",encoding:"utf8"});
  const result=await filesystem.getUri({path:filename,directory:"CACHE"});
  await share.share({title:"Copia de progreso de Fuego & Estudio",text:"Guarda este archivo fuera de la aplicación para poder restaurarlo.",url:result.uri,dialogTitle:"Guardar o compartir progreso"});
  notice("Copia preparada. Guárdala con una aplicación del sistema.");
  return;
 }
 const blob=new Blob([json],{type:"application/json"});
 const url=URL.createObjectURL(blob),link=document.createElement("a");
 link.href=url;link.download=filename;
 document.body.appendChild(link);link.click();link.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1500);
 notice("Copia de seguridad descargada.");
}
async function importFile(file){
 if(!file)return;
 if(file.size>1048576)throw Error("Archivo demasiado grande");
 let data;
 try{data=JSON.parse(await file.text());}catch(e){throw Error("Archivo JSON no válido");}
 const safe=validateBackup(data);
 const report=safe.map(([key,value])=>key+": "+value.read.length+" apartados y "+value.mastered.length+" tarjetas").join("\n");
 if(!confirm("Esto sustituirá el progreso local de los temas contenidos en esta copia:\n\n"+report+"\n\n¿Continuar?"))return;
 for(const [key,value] of safe)localStorage.setItem(key,JSON.stringify(value));
 try{sessionStorage.removeItem("study-firefighting-resume-v1");}catch(e){}
 notice("Progreso restaurado. Recargando...");
 location.reload();
}
function init(){
 let file=document.querySelector("[data-progress-file]");
 if(!file){file=document.createElement("input");file.type="file";file.accept=".json,application/json";file.hidden=true;file.setAttribute("data-progress-file","");document.body.appendChild(file);}
 document.addEventListener("click",event=>{
  if(event.target.closest("[data-progress-export]")){event.preventDefault();exportFile().catch(e=>notice("Error al exportar: "+e.message,true));}
  if(event.target.closest("[data-progress-import]")){event.preventDefault();file.value="";file.click();}
 });
 file.addEventListener("change",async()=>{
  try{await importFile(file.files[0]);}catch(e){notice("Error al importar: "+e.message,true);}finally{file.value="";}
 });
}
document.addEventListener("DOMContentLoaded",init);
window.FireStudyBackup={summary,buildBackup,validateBackup,exportFile,importFile};
})();
