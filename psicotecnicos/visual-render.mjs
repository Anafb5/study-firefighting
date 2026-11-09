import {BIT_LINES,applyTransform} from "./advanced-visual.mjs";
const html=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export const isAdvancedVisual=kind=>["foldingNet","transformFigure","attributeSequence","lineMatrix"].includes(kind);

export function figureSvg(model,small=false){
 const angle=Number(model.angle)||0,flip=model.flip?"-1":"1",filled=model.fill!==false;
 const fill=filled?"#b4d6e7":"#ffffff",dots=model.dots||0;
 const markers=Array.from({length:dots},(_,i)=>'<circle cx="'+(50+(i-(dots-1)/2)*14)+'" cy="111" r="4.5" fill="#c25f3d"/>').join("");
 return '<svg class="figure-svg '+(small?"compact":"")+'" viewBox="0 0 100 120" role="img" aria-label="Figura geométrica orientada"><g transform="translate(50 50) rotate('+angle+') scale('+flip+' 1) translate(-50 -50)">'+
  '<path d="M50 13 L80 46 L65 46 L65 80 L37 80 L37 46 L22 46 Z" fill="'+fill+'" stroke="#2b566f" stroke-width="3" stroke-linejoin="round"/>'+
  '<circle cx="43" cy="60" r="6" fill="#db6640"/><path d="M57 23 L66 37" stroke="#2b566f" stroke-width="3" stroke-linecap="round"/></g>'+markers+'</svg>';
}
export function maskSvg(mask,small=false){
 const m=Number(mask)||0;
 const drawn=BIT_LINES.map(([x1,y1,x2,y2],i)=>(m&(1<<i))?
  '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="#315d76" stroke-width="5" stroke-linecap="round"/>':"").join("");
 return '<svg class="mask-svg '+(small?"compact":"")+'" viewBox="0 0 100 100" role="img" aria-label="Conjunto de segmentos"><rect x="7" y="7" width="86" height="86" rx="6" fill="#ffffff" stroke="#d7e3e8" stroke-width="2"/>'+drawn+'</svg>';
}
function matrix(v,completed=false,answer=null){
 const cells=v.cells.map((c,i)=>completed&&i===8?answer:c);
 return '<div class="logic-matrix" role="img" aria-label="Matriz de nueve casillas con una figura por casilla">'+cells.map((mask,i)=>
  '<div class="logic-cell '+(i===8?"logic-target":"")+'">'+(mask==="?"?'<span aria-hidden="true">?</span>':maskSvg(mask,true))+'</div>').join("")+'</div>';
}
function foldingNet(v){
 const xs=v.positions.map(p=>p[0]),ys=v.positions.map(p=>p[1]),minX=Math.min(...xs),minY=Math.min(...ys),maxX=Math.max(...xs),maxY=Math.max(...ys);
 const cols=maxX-minX+1,rows=maxY-minY+1;
 return '<div class="cube-net-wrap"><div class="cube-net-advanced" style="grid-template-columns:repeat('+cols+',58px);grid-template-rows:repeat('+rows+',58px)" role="img" aria-label="Desarrollo plano de seis caras de cubo">'+
 v.positions.map((p,i)=>'<span class="net-face '+(i===v.selected?"target":"")+'" style="grid-column:'+(p[0]-minX+1)+';grid-row:'+(p[1]-minY+1)+'">'+html(v.labels[i])+'</span>').join("")+'</div>'+
 (v.selected>=0?'<p class="source">La cara destacada es <strong>'+html(v.labels[v.selected])+'</strong></p>':'<p class="source">Elige la pareja o terna compatible con el cubo plegado.</p>')+'</div>';
}
export function renderAdvancedVisual(v,demonstration=false,answer=null){
 switch(v.kind){
 case"foldingNet":return foldingNet(v);
 case"transformFigure":return '<div class="visual-transform"><div><p class="source">FIGURA INICIAL</p>'+figureSvg(v.initial)+'</div><div class="transform-directions"><strong>Transformaciones</strong><ol>'+v.steps.map(x=>'<li>'+html(x.kind==="espejo"?"Reflejar respecto al eje vertical":"Girar "+x.degrees+"° en sentido horario")+'</li>').join("")+'</ol></div></div>';
 case"attributeSequence":return '<div class="attribute-strip">'+v.sequence.map((m,i)=>'<div class="attribute-tile"><span class="source">'+(i+1)+'</span>'+figureSvg(m,true)+'</div>').join("")+'<div class="attribute-tile missing"><span class="source">6</span><span class="unknown-figure">?</span></div></div>';
 case"lineMatrix":return matrix(v,demonstration,answer);
 default:return "";
 }
}
export function renderOptionVisual(q,value){
 if(!q.optionVisuals)return "";
 const shape=q.optionVisuals[value];
 if(shape===undefined)return "";
 if(q.visual.kind==="lineMatrix")return maskSvg(shape,true);
 if(["transformFigure","attributeSequence"].includes(q.visual.kind))return figureSvg(shape,true);
 return "";
}
const vecKey=v=>v.join(",");
function cubeFaceTransform(n){
 const k=vecKey(n);
 return {"0,0,1":"translateZ(48px)","0,0,-1":"rotateY(180deg) translateZ(48px)",
 "1,0,0":"rotateY(90deg) translateZ(48px)","-1,0,0":"rotateY(-90deg) translateZ(48px)",
 "0,1,0":"rotateX(-90deg) translateZ(48px)","0,-1,0":"rotateX(90deg) translateZ(48px)"}[k]||"translateZ(48px)";
}
export function renderAdvancedDemo(q,makeBtn){
 const v=q.visual;
 if(v.kind==="foldingNet"){
  const cube='<div class="cube-orbit"><div class="spatial-cube" id="spatial-cube" data-y="-32" style="transform:rotateX(-23deg) rotateY(-32deg)">'+
   v.labels.map((label,i)=>'<span class="spatial-face" style="transform:'+cubeFaceTransform(v.normals[i])+'">'+html(label)+'</span>').join("")+'</div></div>';
  const pairs=[];
  for(let i=0;i<v.opposites.length;i++)if(i<v.opposites[i])pairs.push(v.labels[i]+"–"+v.labels[v.opposites[i]]);
  return '<p>'+html(q.explanation)+'</p>'+cube+'<div class="board-actions">'+makeBtn("↶ Girar","turn-cube-left")+makeBtn("Girar ↷","turn-cube-right")+'</div>'+
   '<p class="source">Caras opuestas: '+html(pairs.join(" · "))+'. Gira el sólido para comprobar las relaciones de vecindad.</p>';
 }
 if(v.kind==="transformFigure"){
  const states=[v.initial];for(const step of v.steps)states.push(applyTransform([step],states.at(-1)));
  return '<p>'+html(q.explanation)+'</p><div class="demo-stages">'+states.map((state,i)=>'<div class="demo-stage"><span class="source">'+(i===0?"Inicial":"Paso "+i)+'</span>'+figureSvg(state,true)+'</div>').join("")+'</div>';
 }
 if(v.kind==="attributeSequence"){
  return '<p>'+html(q.explanation)+'</p><div class="demo-stages"><div class="demo-stage"><span class="source">5.º elemento</span>'+figureSvg(v.sequence[4],true)+'</div>'+
   '<div class="demo-stage result"><span class="source">6.º elemento</span>'+figureSvg(q.optionVisuals[q.answer],true)+'</div></div>';
 }
 if(v.kind==="lineMatrix"){
  return '<p>'+html(q.explanation)+'</p>'+matrix(v,true,q.optionVisuals[q.answer])+'<p class="source">Compara la operación en las dos filas o columnas completas; la última casilla se construye del mismo modo.</p>';
 }
 return "";
}
