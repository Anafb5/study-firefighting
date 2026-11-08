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
function notice(message,error=false){
 const t=document.getElementById("toast");
 if(t){t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),4000);}
 const status=document.getElementById("progress-status");
 if(status){status.textContent=message;status.style.color=error?"#af483b":"#1d8062";}
}
function exportFile(){
 const topics={};
 for(let i=0;i<localStorage.length;i++){
  const key=localStorage.key(i);
  if(STORAGE_PATTERN.test(key)){try{topics[key]=summary(key);}catch(e){}}
 }
 const data={format:FORMAT,version:1,exportedAt:new Date().toISOString(),topics};
 const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob),link=document.createElement("a");
 link.href=url;link.download="fuego-estudio-progreso-"+new Date().toISOString().slice(0,10)+".json";
 document.body.appendChild(link);link.click();link.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1500);
 notice("Copia de seguridad descargada.");
}
async function importFile(file){
 if(!file)return;
 if(file.size>1048576)throw Error("Archivo demasiado grande");
 let data;
 try{data=JSON.parse(await file.text());}catch(e){throw Error("Archivo JSON no válido");}
 if(!data||data.format!==FORMAT||data.version!==1||!data.topics||typeof data.topics!=="object"||Array.isArray(data.topics))throw Error("No es una copia compatible");
 const entries=Object.entries(data.topics);
 if(!entries.length)throw Error("La copia no contiene ningún tema");
 if(entries.some(([key])=>!STORAGE_PATTERN.test(key)))throw Error("Identificador de tema no compatible");
 const safe=entries.map(([key,value])=>[key,clean(value)]);
 const report=safe.map(([key,value])=>key+": "+value.read.length+" apartados y "+value.mastered.length+" tarjetas").join("\n");
 if(!confirm("Esto sustituirá el progreso local de los temas contenidos en esta copia:\n\n"+report+"\n\n¿Continuar?"))return;
 for(const [key,value] of safe)localStorage.setItem(key,JSON.stringify(value));
 // Una copia restaurada no debe quedar sobrescrita por el estado temporal de
 // navegación guardado antes de importarla (se aíslan las claves por tema).
 try{
  for(let i=0;i<sessionStorage.length;i++){
   const k=sessionStorage.key(i);
   if(/^study-firefighting-resume-(?:t\d+-v1|v1)$/.test(k)){
    sessionStorage.removeItem(k);
    i--;
   }
  }
 }catch(e){}
 notice("Progreso restaurado. Recargando...");
 location.reload();
}
let previousBackupFocus=null;
function openBackup(){
 const dialog=document.getElementById("backup-modal");if(!dialog)return;
 previousBackupFocus=document.activeElement;dialog.hidden=false;document.body.classList.add("backup-modal-open");
 dialog.querySelector("[data-backup-close]")?.focus();
}
function closeBackup(){
 const dialog=document.getElementById("backup-modal");if(!dialog)return;
 dialog.hidden=true;document.body.classList.remove("backup-modal-open");
 previousBackupFocus?.focus?.();
}
function ensureBackupDialog(){
 if(document.getElementById("backup-modal"))return;
 const wrapper=document.createElement("div");
 wrapper.innerHTML='<div class="backup-modal" id="backup-modal" role="dialog" aria-modal="true" aria-labelledby="backup-title" hidden>'+
  '<div class="backup-curtain" data-backup-close></div><div class="backup-dialog" role="document">'+
  '<div class="backup-dialog-head"><div><span class="section-label">COPIA DE SEGURIDAD</span><h2 id="backup-title">Tu progreso</h2></div><button type="button" data-backup-close class="backup-close" aria-label="Cerrar">×</button></div>'+
  '<p>Guarda tus temas, tarjetas, errores y estadísticas en un archivo JSON. Podrás restaurarlo en cualquier dispositivo.</p>'+
  '<div class="backup-actions"><button class="button dark" data-progress-export>↓ Descargar copia JSON</button><button class="button secondary" data-progress-import>↑ Restaurar archivo JSON</button></div>'+
  '<div id="progress-status" role="status" aria-live="polite"></div>'+
  '<div class="backup-warning"><strong>Antes de importar</strong><p>Restaurar sustituye el progreso local de los temas incluidos en la copia. Los tests aún sin terminar no se exportan.</p></div></div></div>';
 document.body.appendChild(wrapper.firstElementChild);
}
function init(){
 ensureBackupDialog();
 document.addEventListener("click",event=>{
  if(event.target.closest("[data-backup-open]")){event.preventDefault();openBackup();}
  if(event.target.closest("[data-backup-close]")){event.preventDefault();closeBackup();}
 });
 document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!document.getElementById("backup-modal")?.hidden)closeBackup();});
 let file=document.querySelector("[data-progress-file]");
 if(!file){file=document.createElement("input");file.type="file";file.accept=".json,application/json";file.hidden=true;file.setAttribute("data-progress-file","");document.body.appendChild(file);}
 document.addEventListener("click",event=>{
  if(event.target.closest("[data-progress-export]")){event.preventDefault();exportFile();}
  if(event.target.closest("[data-progress-import]")){event.preventDefault();file.value="";file.click();}
 });
 file.addEventListener("change",async()=>{
  try{await importFile(file.files[0]);}catch(e){notice("Error al importar: "+e.message,true);}finally{file.value="";}
 });
}
document.addEventListener("DOMContentLoaded",init);
window.FireStudyBackup={summary,exportFile};
})();