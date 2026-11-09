import {OFFICIAL_EXAMS,getOfficialQuestions,scoreOfficial} from "./official-exams.mjs";
import {perceptualTableFor} from "./official-references.mjs";

const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const opts=["A","B","C","D"];
const memoryLists={
 A:"JIRAFA · MARTILLO · AGUA · RAMÓN · TROMPETA · GATO · RUEDA · AGUA · SALUD · TROMPETA · ATÚN · OJO · TROMPETA · MANUEL · JAMÓN · BRAZO · SOL",
 B:"GATO – PERRO\nPANTALLA – LUZ\nCAJA – CÍRCULO\nCUATRO – NUEVE\nAZUL – VERDE\nCABELLO – CABALLO\nCORTINA – VENTANA\nMANZANA – MELÓN\nHELICÓPTERO – AVIONETA\nSOFÁ – COJÍN",
 C:"TORO · IMPRESORA · PALMERA · CHOCOLATE · BOTELLA · ARMARIO · ELEFANTE · VENTANA · JUEGO · MICRÓFONO · GRANIZO · ROSA · IMPERIO · ESPACIO · RATÓN",
 D:"CARTA – COPA\nCAJA – METAL\nNUBE – CHICLE\nCORREA – CINTURÓN\nAGUA – TIBURÓN\nLIBRO – FÍSICA\nLÁPIZ – DEDO\nLÁMPARA – ORIENTAL\nPERSIANA – LUZ\nGRIFO – CARPINTERO"
};
let sharedBank=null,bankLoading=null;
function bankLoad(){
 if(sharedBank)return Promise.resolve(sharedBank);
 if(!bankLoading)bankLoading=fetch(new URL("./official-bank.json",import.meta.url)).then(r=>{if(!r.ok)throw Error("No se ha podido leer el banco de ejercicios");return r.json();}).then(x=>{
  if(!x.groups||Object.keys(x.groups).length!==8)throw Error("El banco de ejercicios no es válido");
  sharedBank=x;return x;
 });
 return bankLoading;
}
export class OfficialExamController {
 constructor(topicId,rerender,record){
  this.topicId=topicId;this.doc=OFFICIAL_EXAMS[topicId];this.group=Object.keys(this.doc.groups)[0];
  this.phase="config";this.bank=null;this.status="Cargando preguntas originales…";
  this.answers={};this.index=0;this.deadline=0;this.timer=null;this.didRecord=false;
  this.rerender=rerender;this.record=record;
  this.ready=bankLoad().then(bank=>{this.bank=bank.groups[topicId];this.status="";this.rerender();}).catch(err=>{this.status="No se han podido cargar las preguntas: "+err.message;this.rerender();});
 }
 questions(){return this.bank?.[this.group]??[];}
 remaining(){return Math.max(0,Math.ceil((this.deadline-Date.now())/1000));}
 duration(){return this.questions().length*45000;}
 schedule(){this.stopTimer();if(!["study","exam"].includes(this.phase))return;this.timer=setInterval(()=>this.tick(),250);this.tick();}
 stopTimer(){if(this.timer){clearInterval(this.timer);this.timer=null;}}
 tick(){
  if(!["study","exam"].includes(this.phase))return;
  if(this.remaining()<=0){if(this.phase==="study")this.endStudy();else this.finish();return;}
  const node=document.getElementById("official-time");
  if(node){const s=this.remaining();node.textContent=(this.phase==="study"?"Memorización: ":"Tiempo: ")+Math.floor(s/60)+":"+String(s%60).padStart(2,"0");}
 }
 start(){
  if(this.phase!=="config"||this.questions().length===0)return;
  this.answers={};this.index=0;this.didRecord=false;
  this.phase=this.topicId==="memoria"?"study":"exam";
  this.deadline=Date.now()+(this.phase==="study"?120000:this.duration());
  this.rerender();this.schedule();
 }
 endStudy(){
  if(this.phase!=="study")return;
  this.phase="exam";this.deadline=Date.now()+this.duration();this.rerender();this.schedule();
 }
 finish(){
  if(this.phase!=="exam")return;
  this.stopTimer();this.phase="result";
  if(!this.didRecord){
   const available=new Set(this.questions().map(x=>x.n));const answers=getOfficialQuestions(this.topicId,this.group);
   for(const q of answers){if(q.invalid||!available.has(q.number))continue;
     this.record("examen",{variant:"original-"+this.group+"-"+q.number,answer:q.key},this.answers[q.number]??null);
   }
   this.didRecord=true;
  }
  this.rerender();
 }
 renderPerceptualTable(ref){
  const headers=Array.from({length:ref.rows[0].length},(_,i)=>String.fromCharCode(65+i));
  return '<figure class="exam-reference"><figcaption>Tabla original de referencia · página '+ref.sourcePage+
   '. Utilízala también para las preguntas que indican «tabla anterior».</figcaption>'+
   '<div class="exam-table-scroll" tabindex="0" aria-label="Desplazar tabla de izquierda a derecha">'+
   '<table class="exam-reference-table"><thead><tr><th scope="col">Fila</th>'+
   headers.map(h=>'<th scope="col">Columna '+h+'</th>').join("")+'</tr></thead><tbody>'+
   ref.rows.map((row,i)=>'<tr><th scope="row">'+String.fromCharCode(65+i)+'</th>'+
   row.map(value=>'<td>'+esc(value)+'</td>').join("")+'</tr>').join("")+
   '</tbody></table></div></figure>';
 }
 getVisual(q){
  if(this.topicId==="perceptiva"){
   const ref=perceptualTableFor(this.group,q.n);
   if(ref)return this.renderPerceptualTable(ref);
  }

  let primary=q.img;const reference=q.refImg;
  if(this.topicId==="mecanica"&&q.n===2)primary=null;

  const img=(s,caption)=>'<figure class="official-figure"><img alt="Figura original del ejercicio '+q.n+'" loading="lazy" src="data:image/png;base64,'+s+'"><figcaption>'+caption+'</figcaption></figure>';
  // Some mechanical questions refer to a diagram shared with the preceding item.
  let altReference=reference;
  if(!altReference&&this.topicId==="mecanica"&&[3,4,5].includes(q.n)){
   altReference=this.questions().find(x=>x.n===2)?.img;
  }
  if(!altReference&&this.topicId==="mecanica"&&q.n===2)altReference=this.questions().find(x=>x.n===1)?.img;
  if(!altReference&&this.topicId==="perceptiva"&&/tabla anterior/i.test(q.q)){
   altReference=this.questions().find(x=>x.n===q.n-1)?.img;
  }
  if(!altReference&&this.topicId==="perceptiva"&&/tabla anterior/i.test(q.q)){const prev=this.questions().find(x=>x.n===q.n-1);if(prev)return '<div class="notice"><strong>Tabla de referencia</strong><p>'+esc(prev.q)+'</p></div>'+(primary?img(primary,"Lámina original del ejercicio"):"");}
  return (altReference?img(altReference,"Figura original de referencia para esta pregunta"):"")+
    (primary?img(primary,"Lámina original del ejercicio, con sus opciones gráficas"):"");
 }
 review(){
  const available=new Set(this.questions().map(q=>q.n));const keys=getOfficialQuestions(this.topicId,this.group).filter(q=>available.has(q.number));const results=keys.map(k=>({k,item:this.questions().find(q=>q.n===k.number)}));
  const count=keys.filter(q=>!q.invalid).length;const correct=keys.filter(q=>!q.invalid&&this.answers[q.number]===q.key).length;
  const score={correct,percentage:count?Math.round(correct/count*100):0,unanswered:keys.filter(q=>!q.invalid&&this.answers[q.number]==null).length};
  return '<div class="result"><h2 class="section-head">Resultado · Prueba '+esc(this.group)+'</h2>'+
   '<div class="score">'+score.percentage+' %</div><p>'+score.correct+' respuestas correctas de '+count+' evaluables. '+score.unanswered+' sin responder.</p>'+
   '<p class="muted small">Las preguntas cuya clave está ausente o es incompatible con las opciones no se puntúan.</p><ol class="answer-review">'+results.map(({k,item})=>
    '<li><strong>Pregunta '+k.number+'</strong> · '+esc(item?.q||"")+'<div>Tu respuesta: '+esc(this.answers[k.number]||"Sin responder")+
    ' · '+(k.invalid?"Sin puntuar (anomalía del solucionario)":'Correcta: '+k.key+(this.answers[k.number]===k.key?" ✓":" ✕"))+'</div></li>').join("")+'</ol>'+
    '<button class="btn accent" data-official-action="reset">Elegir otra prueba</button></div>';
 }
 render(){
  const header='<div class="original-exam" role="tabpanel"><span class="eyebrow" style="color:#b65a39">EXAMEN · PREGUNTAS ORIGINALES DEL MANUAL</span>'+
   '<h2 class="section-head">Pruebas del documento</h2><p class="intro">Enunciados, opciones y figuras incorporados a la web, extraídos de los PDF proporcionados. Sin demostraciones ni corrección durante el examen.</p>';
  if(!this.bank)return header+'<div role="status" class="notice">'+esc(this.status)+'</div></div>';
  if(this.phase==="config"){
   const count=this.questions().length;
   return header+'<div class="trainer-settings"><div class="field"><label for="official-set">Prueba del manual</label><select id="official-set">'+
    Object.entries(this.doc.groups).map(([key,value])=>'<option value="'+esc(key)+'" '+(key===this.group?"selected":"")+'>'+esc(value.label)+'</option>').join("")+
    '</select></div><div class="field"><label>Preguntas y tiempo</label><p class="muted small">'+count+' preguntas · '+Math.round(this.duration()/60000)+' minutos</p></div></div>'+
    '<div class="notice">No necesitas seleccionar ni subir ningún PDF. En memoria dispondrás de dos minutos para estudiar la lista, que después desaparecerá.'+""+'.</div>'+
    (this.doc.groups[this.group].notes?'<p class="source">'+esc(this.doc.groups[this.group].notes)+'</p>':"")+
    '<div class="board-actions"><button class="btn accent" data-official-action="start">Comenzar prueba '+esc(this.group)+'</button></div></div>';
  }
  if(this.phase==="result")return header+this.review()+'</div>';
  if(this.phase==="study")return header+'<div class="board-head"><span class="pill">Memorización · prueba '+esc(this.group)+'</span><span class="timer" id="official-time">02:00</span></div>'+
   '<p class="intro">Memoriza estas palabras exactamente como aparecen en el manual. Cuando desaparezcan, tendrás que contestar sin volver a consultarlas.</p>'+
   '<div class="official-memory-list">'+esc(memoryLists[this.group]).replaceAll("\n","<br>")+'</div>'+
   '<div class="board-actions"><button class="btn accent" data-official-action="end-study">Ya he memorizado · empezar examen</button></div></div>';
  const qs=this.questions(),q=qs[this.index],answered=Object.keys(this.answers).length;
  if(!q)return header+'<div class="notice">No se ha encontrado esta pregunta en el material.</div></div>';
  const key=getOfficialQuestions(this.topicId,this.group).find(k=>k.number===q.n);
  const tableReference=this.topicId==="perceptiva"?perceptualTableFor(this.group,q.n):null;
  const cleanQuestion=tableReference?q.q.replace(/\s+Columna A\s+Columna B[\s\S]*/i,""):q.q;
  const renderQuestion=esc(/^\d+º\)$/.test(cleanQuestion?.trim())?"Selecciona la opción que corresponde a la figura propuesta.":(cleanQuestion||"Examina la figura y selecciona la respuesta que corresponde.")).replaceAll("con traproducente","contraproducente").replaceAll("mode lo","modelo").replaceAll("necesaria mente","necesariamente").replaceAll("co rrectas","correctas");
  return header+'<div class="board-head"><span class="pill">Pregunta '+(this.index+1)+' de '+qs.length+' · '+answered+' respondidas</span><span class="timer" id="official-time">Tiempo de examen</span></div>'+
   '<div class="official-single-question"><h3>Pregunta '+q.n+(key?.invalid?' · Sin puntuación':'')+'</h3>'+
   '<p class="official-prompt">'+renderQuestion+'</p>'+this.getVisual(q)+
   '<fieldset class="official-options" aria-label="Opciones de la pregunta '+q.n+'"><legend>Selecciona tu respuesta</legend>'+
    opts.map(opt=>'<label class="official-choice"><input type="radio" name="official-answer-'+q.n+'" value="'+opt+'" '+(this.answers[q.n]===opt?"checked":"")+'><b>'+opt+'</b><span>'+esc(q.o?.[opt]||"Opción "+opt+" de la figura")+'</span></label>').join("")+'</fieldset></div>'+
   '<div class="board-actions"><button class="btn secondary" data-official-action="prev" '+(this.index===0?"disabled":"")+'>← Anterior</button>'+
   '<button class="btn secondary" data-official-action="next" '+(this.index===qs.length-1?"disabled":"")+'>Siguiente →</button>'+
   '<button class="btn accent" data-official-action="finish">Entregar examen</button></div>'+
   '<p class="source">Ejercicio '+q.n+' · página '+q.page+' del PDF original. No se muestran explicaciones ni soluciones antes de entregar.</p></div>';
 }
 onChange(target){
  if(target.id==="official-set"&&this.phase==="config"&&this.doc.groups[target.value]){
   this.group=target.value;this.rerender();return true;
  }
  if(target.name?.startsWith("official-answer-")&&this.phase==="exam"){
   const q=this.questions()[this.index];
   if(q&&opts.includes(target.value)){this.answers[q.n]=target.value;return true;}
  }
  return false;
 }
 onAction(action){
  switch(action){
   case"start":this.start();break;
   case"end-study":this.endStudy();break;
   case"prev":if(this.phase==="exam"&&this.index>0){this.index--;this.rerender();}break;
   case"next":if(this.phase==="exam"&&this.index+1<this.questions().length){this.index++;this.rerender();}break;
   case"finish":this.finish();break;
   case"reset":if(this.phase==="result"){this.phase="config";this.answers={};this.rerender();}break;
   default:return false;
  }
  return true;
 }
 handleVisibility(){if(["exam","study"].includes(this.phase)&&this.remaining()<=0)this.tick();}
 dispose(){this.stopTimer();}
}
