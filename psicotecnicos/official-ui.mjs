import {OFFICIAL_EXAMS,PDF_ALIASES,getOfficialQuestions,scoreOfficial} from "./official-exams.mjs";
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fileDbName="fire-study-original-pdfs-v1";
function openDb(){
 return new Promise(resolve=>{
  if(typeof indexedDB==="undefined"){resolve(null);return;}
  let req;try{req=indexedDB.open(fileDbName,1);}catch(_){resolve(null);return;}
  req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains("pdfs"))req.result.createObjectStore("pdfs");};
  req.onsuccess=()=>resolve(req.result);req.onerror=()=>resolve(null);
 });
}
async function storedFile(id){
 const db=await openDb();if(!db)return null;
 return new Promise(resolve=>{try{const req=db.transaction("pdfs","readonly").objectStore("pdfs").get(id);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>resolve(null);}catch(_){resolve(null);}});
}
async function saveFile(id,file){
 const db=await openDb();if(!db)return false;
 return new Promise(resolve=>{try{const tx=db.transaction("pdfs","readwrite");tx.objectStore("pdfs").put(file,id);tx.oncomplete=()=>resolve(true);tx.onerror=()=>resolve(false);}catch(_){resolve(false);}});
}
function validPDF(file,id){return file&&file.type!=="text/plain"&&/\.pdf$/i.test(file.name)&&PDF_ALIASES[id].some(x=>file.name.toUpperCase().includes(x.toUpperCase()));}
const initialQuestions={
 A:[
  {number:1,text:"¿Cuántas palabras hay en el listado?",options:["Menos de 10","Entre 10 y 15","Entre 15 y 20","Más de 20"]},
  {number:2,text:"¿Cuántos nombres de animales hay en el listado?",options:["1","2","3","4"]}
 ],
 B:[{number:1,text:"¿Qué palabra acompañaba a «perro»?",options:["Gato","Ratón","Mascota","Animal"]}],
 C:[
  {number:1,text:"¿Qué palabra va entre palmera y botella?",options:["Armario","Elefante","Chocolate","Impresora"]},
  {number:2,text:"¿Cuántos nombres de animal hay en el listado?",options:["1","2","3","4"]}
 ],
 D:[{number:1,text:"¿Qué palabra acompaña a carta?",options:["Sobre","Copa","Vaso","Envío"]}]
};
function questionCard(q,group,selected,finished=false){
 if(q.invalid&&(q.number===10&&(group==="D")))return "";
 return '<div class="official-q '+(q.invalid?"ungraded":"")+'"><div class="official-q-title"><strong>Pregunta '+q.number+'</strong>'+(q.invalid?'<span class="pill">Sin puntuación · clave dudosa</span>':"")+'</div><fieldset aria-label="Pregunta '+q.number+'" '+(finished?"disabled":"")+'>'+
 ["A","B","C","D"].map(k=>'<label class="official-answer '+(selected===k?"chosen":"")+'"><input type="radio" name="official-q-'+q.number+'" data-official-answer="'+q.number+'" value="'+k+'" '+(selected===k?"checked":"")+' '+(finished?"disabled":"")+'> '+k+'</label>').join("")+'</fieldset></div>';
}
function memoryFirst(groupId){
 const set=initialQuestions[groupId]||[];
 return set.length?'<div class="notice"><strong>Preguntas de la página de memorización</strong><p>Para impedir que vuelvas a ver el listado durante el examen, reproducimos aquí el enunciado y las opciones de las primeras preguntas de esa página.</p>'+set.map(q=>'<p><b>'+q.number+'. '+esc(q.text)+'</b> '+q.options.map((option,i)=>'<span style="margin-right:10px">'+("ABCD"[i])+') '+esc(option)+'</span>').join(" ")+'</p>').join("")+'</div>':"";
}
const validPage=(topicId,groupId,page)=>{
 // El solucionario se imprime bajo la última pregunta en estas dos páginas.
 if(groupId==="D"&&((topicId==="mecanica"&&page===16)||(topicId==="perceptiva"&&page===15)))return false;
 return true;
};
export class OfficialExamController{
 constructor(topicId,rerender,record){
  this.topicId=topicId;this.doc=OFFICIAL_EXAMS[topicId];this.group=Object.keys(this.doc.groups)[0];
  this.phase="config";this.answers={};this.pageIndex=0;this.file=null;this.url=null;
  this.status="";this.deadline=0;this.timer=null;this.rerender=rerender;this.record=record;this.didRecord=false;
  this.ready=this.restore();
 }
 async restore(){
  const f=await storedFile(this.topicId);
  if(f&&validPDF(f,this.topicId)){this.setFile(f);this.rerender();}
 }
 setFile(file){
  if(this.url)URL.revokeObjectURL(this.url);
  this.file=file;
  this.url=URL.createObjectURL(file);
 }
 pages(){const g=this.doc.groups[this.group];return g.pages.filter(p=>validPage(this.topicId,this.group,p)&&!(this.topicId==="memoria"&&this.phase!=="study"&&p===g.studyPage));}
 remaining(){return Math.max(0,Math.ceil((this.deadline-Date.now())/1000));}
 schedule(){this.stopTimer();if(this.phase!=="study"&&this.phase!=="exam")return;this.timer=setInterval(()=>this.tick(),250);this.tick();}
 stopTimer(){if(this.timer){clearInterval(this.timer);this.timer=null;}}
 tick(){
  if(this.phase!=="exam"&&this.phase!=="study")return;
  if(this.remaining()===0){if(this.phase==="study"){this.phase="exam";this.pageIndex=0;this.deadline=Date.now()+this.duration();this.rerender();}else this.finish();return;}
  const node=document.getElementById("official-time");
  if(node)node.textContent=(this.phase==="study"?"Memorización: ":"Tiempo restante: ")+Math.floor(this.remaining()/60)+":"+String(this.remaining()%60).padStart(2,"0");
 }
 duration(){const count=getOfficialQuestions(this.topicId,this.group).filter(q=>!q.invalid).length;return Math.max(1,count)*45000;}
 render(){
  const g=this.doc.groups[this.group],file=this.file;
  const head='<div role="tabpanel" class="original-exam"><span class="eyebrow" style="color:#bc5b39">EXAMEN · MATERIAL ORIGINAL DEL PDF</span><h2 class="section-head">Pruebas del manual</h2><p class="intro">Estos exámenes muestran los enunciados y figuras del PDF original, sin demostraciones. Al finalizar se corrigen mediante el solucionario del manual. No son preguntas oficiales de una convocatoria.</p>';
  if(this.phase==="config"){
   return head+'<div class="trainer-settings"><div class="field"><label for="official-set">Prueba del documento</label><select id="official-set" data-official-set>'+Object.entries(this.doc.groups).map(([k,v])=>'<option value="'+esc(k)+'" '+(this.group===k?"selected":"")+'>'+esc(v.label)+'</option>').join("")+'</select></div><div class="field"><label>Duración orientativa</label><div class="source">'+Math.ceil(this.duration()/60000)+' minutos · '+getOfficialQuestions(this.topicId,this.group).length+' ejercicios del manual</div></div></div>'+
   '<div class="original-upload"><h3>PDF original de este tema</h3><p class="muted small">'+esc(this.doc.display)+'</p>'+(file?'<p class="upload-ok">✓ Documento disponible en este dispositivo ('+esc(file.name)+')</p>':'<p>Para mostrar las figuras exactamente como aparecen en el PDF, selecciona el documento de tu ZIP. Se guarda únicamente en este navegador y no se sube a GitHub ni a ningún servidor.</p>')+
   '<label for="official-file" class="btn secondary" style="cursor:pointer">Seleccionar PDF del ZIP</label><input type="file" accept=".pdf,application/pdf" id="official-file" hidden><p id="official-status" role="status" class="source">'+esc(this.status)+'</p></div>'+
   '<div class="notice">'+(g.notes?esc(g.notes)+' ':"")+'El examen no incluye pistas ni visualizaciones de solución. Se conserva el enunciado original del documento.</div><div class="setting-actions"><button class="btn accent" type="button" data-official-action="start" '+(!file?"disabled":"")+'>Comenzar prueba '+esc(this.group)+'</button></div></div>';
  }
  if(this.phase==="result"){const score=scoreOfficial(this.topicId,this.group,this.answers),qs=getOfficialQuestions(this.topicId,this.group);
   return head+'<div class="result"><h3>Resultado · '+esc(g.label)+'</h3><div class="score">'+score.percentage+' %</div><p>'+score.correct+' de '+score.graded+' respuestas evaluables correctas. '+score.unanswered+' sin responder.</p><p class="muted small">Las preguntas con problemas en el solucionario original quedan excluidas del denominador.</p>'+
   '<ol class="answer-review">'+qs.filter(q=>!(q.invalid&&q.number===10&&this.group==="D")).map(q=>'<li><strong>Pregunta '+q.number+'</strong>: elegiste '+esc(this.answers[q.number]||"—")+' · '+(q.invalid?'Sin calificar (anomalía del solucionario)':(this.answers[q.number]===q.key?'Correcta':'Correcta: '+q.key))+'</li>').join("")+'</ol>'+
   '<button class="btn accent" data-official-action="reset">Otra prueba del documento</button></div></div>';
  }
  const pages=this.pages();if(this.pageIndex>=pages.length)this.pageIndex=0;const page=pages[this.pageIndex];
  if(this.phase==="study")return head+'<div class="board-head"><span class="pill">Memorización · prueba '+esc(this.group)+'</span><span class="timer" id="official-time"></span></div><p class="notice">Durante dos minutos observa la lista original del documento. Después se ocultará y no podrás regresar a esta página hasta entregar el examen.</p>'+this.pdfFrame(g.studyPage)+
    '<div class="board-actions"><button class="btn accent" data-official-action="end-study">He memorizado · comenzar preguntas</button></div></div>';
  const qs=getOfficialQuestions(this.topicId,this.group);
  const done=qs.filter(q=>this.answers[q.number]!=null).length;
  return head+'<div class="board-head"><span class="pill">'+esc(g.label)+' · '+done+'/'+qs.length+' respuestas</span><span class="timer" id="official-time"></span></div>'+
   '<div class="original-pages"><div class="board-head"><strong>Documento original · página '+page+'</strong><span class="source">Páginas '+pages[0]+'–'+pages[pages.length-1]+'</span></div>'+
   '<div class="board-actions" style="margin:8px 0">'+
   '<button class="btn secondary" data-official-action="prev-page" '+(this.pageIndex===0?"disabled":"")+'>← Página anterior</button><button class="btn secondary" data-official-action="next-page" '+(this.pageIndex===pages.length-1?"disabled":"")+'>Página siguiente →</button></div>'+
   this.pdfFrame(page)+'<p class="source">Si el visor integrado de tu móvil no muestra el PDF, utiliza el enlace para abrirlo en el visor del dispositivo. Mantén la misma página al regresar a la web.</p></div>'+
   (this.topicId==="memoria"?memoryFirst(this.group):"")+
   '<h3>Hoja de respuestas</h3><p class="muted small">Marca una opción para cada pregunta. No se muestran resultados hasta entregar la prueba.</p><div class="official-answer-grid">'+qs.map(q=>questionCard(q,this.group,this.answers[q.number])).join("")+'</div>'+
   '<div class="board-actions"><button class="btn accent" data-official-action="finish">Entregar examen</button><button class="btn secondary" data-official-action="cancel">Salir sin guardar resultados</button></div></div>';
 }
 pdfFrame(page){
  const url=this.url+"#page="+page+"&view=FitH&toolbar=0&navpanes=0";
  return '<div class="original-viewer"><iframe title="PDF original · página '+page+'" src="'+esc(url)+'" loading="lazy"></iframe></div><a class="source original-open" href="'+esc(url)+'" target="_blank" rel="noopener">Abrir la página '+page+' en el visor de PDF</a>';
 }
 async fileChosen(files){
  const file=files?.[0];if(!file)return;
  if(!validPDF(file,this.topicId)){this.status="El archivo no coincide con el PDF de "+this.doc.display+". Selecciona el documento correspondiente del ZIP.";this.rerender();return;}
  this.setFile(file);this.status="PDF cargado en este dispositivo.";this.rerender();const saved=await saveFile(this.topicId,file);this.status=saved?"PDF conservado en el navegador para futuras sesiones.":"PDF cargado para esta sesión; el navegador no permitió guardarlo de forma persistente.";
  this.rerender();
 }
 onChange(target){
  if(target.id==="official-file"){this.fileChosen(target.files);return true;}
  if(target.dataset?.officialSet){if(this.phase==="config"&&this.doc.groups[target.value]){this.group=target.value;this.rerender();}return true;}
  if(target.id==="official-set"){if(this.phase==="config"&&this.doc.groups[target.value]){this.group=target.value;this.rerender();}return true;}
  if(target.dataset?.officialAnswer){
   const num=Number(target.dataset.officialAnswer);
   if(this.phase==="exam"&&getOfficialQuestions(this.topicId,this.group).some(q=>q.number===num)&&/^[ABCD]$/.test(target.value))this.answers[num]=target.value;
   const status=document.querySelector(".original-exam .pill");if(status){const qs=getOfficialQuestions(this.topicId,this.group);status.textContent=this.doc.groups[this.group].label+" · "+qs.filter(q=>this.answers[q.number]!=null).length+"/"+qs.length+" respuestas";}
   return true;
  }
  return false;
 }
 onAction(action){
  if(!["start","prev-page","next-page","end-study","finish","reset","cancel"].includes(action))return false;
  const g=this.doc.groups[this.group];
  switch(action){
   case"start":if(this.phase==="config"&&this.file){this.answers={};this.didRecord=false;this.pageIndex=0;this.phase=this.topicId==="memoria"?"study":"exam";this.deadline=Date.now()+(this.phase==="study"?120000:this.duration());this.rerender();this.schedule();}break;
   case"prev-page":if(this.phase==="exam"&&this.pageIndex>0){this.pageIndex--;this.rerender();}break;
   case"next-page":if(this.phase==="exam"&&this.pageIndex<this.pages().length-1){this.pageIndex++;this.rerender();}break;
   case"end-study":if(this.phase==="study"){this.phase="exam";this.pageIndex=0;this.deadline=Date.now()+this.duration();this.rerender();this.schedule();}break;
   case"finish":if(this.phase==="exam")this.finish();break;
   case"cancel":if(this.phase==="exam"||this.phase==="study"){this.stopTimer();this.phase="config";this.answers={};this.rerender();}break;
   case"reset":if(this.phase==="result"){this.phase="config";this.rerender();}break;
  }return true;
 }
 finish(){
  if(this.phase!=="exam")return;this.stopTimer();this.phase="result";
  if(!this.didRecord){
   for(const q of getOfficialQuestions(this.topicId,this.group)){
    if(q.invalid)continue;
    this.record("examen",{variant:"original-"+this.group+"-"+q.number,answer:q.key},this.answers[q.number]??null);
   }
   this.didRecord=true;
  }this.rerender();
 }
 handleVisibility(){if((this.phase==="exam"||this.phase==="study")&&this.remaining()===0)this.tick();}
 dispose(){this.stopTimer();if(this.url)URL.revokeObjectURL(this.url);}
}
