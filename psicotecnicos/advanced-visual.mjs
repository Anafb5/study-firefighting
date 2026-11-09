// Ejercicios originales para aprender relaciones espaciales y gráficas.
// Dificultad y soluciones derivadas de reglas deterministas: no se copian láminas.
export const LEVELS=["basico","intermedio","avanzado"];
export const LEVEL_LABELS={basico:"Básico",intermedio:"Intermedio",avanzado:"Avanzado"};
const ri=(min,max,rng)=>min+Math.floor(rng()*(max-min+1));
const pick=(items,rng)=>items[ri(0,items.length-1,rng)];
const shuffle=(items,rng)=>{const out=[...items];for(let i=out.length-1;i>0;i--){const j=ri(0,i,rng);[out[i],out[j]]=[out[j],out[i]];}return out;};
const symbols=["A","B","C","D","E","F"];
const neg=v=>v.map(n=>-n);
const key=v=>v.join(",");
const opposite=(a,b)=>key(a)===key(neg(b));
const NETS=[
 [[1,0],[0,1],[1,1],[2,1],[3,1],[1,2]],
 [[0,0],[1,0],[2,0],[1,1],[1,2],[1,3]],
 [[1,0],[0,1],[1,1],[2,1],[1,2],[1,3]],
 [[0,0],[1,0],[1,1],[2,1],[2,2],[3,2]],
 [[0,1],[1,1],[2,1],[3,1],[1,0],[2,2]],
 [[0,0],[1,0],[1,1],[1,2],[1,3],[2,3]],
 [[0,0],[1,0],[1,1],[1,2],[2,2],[2,3]],
 [[1,0],[1,1],[0,1],[2,1],[2,2],[3,2]]
];
export function foldNet(cells){
 if(cells.length!==6||new Set(cells.map(key)).size!==6)throw Error("Desarrollo de cubo no válido");
 const map=new Map(cells.map((v,i)=>[key(v),i]));
 const orient=Array(6).fill(null);
 orient[0]={u:[1,0,0],v:[0,1,0],n:[0,0,1]};
 const pending=[0];
 while(pending.length){
  const index=pending.shift(),[x,y]=cells[index],{u,v,n}=orient[index];
  const next=[
   {p:[x+1,y],o:{u:neg(n),v,n:u}},
   {p:[x-1,y],o:{u:n,v,n:neg(u)}},
   {p:[x,y+1],o:{u,v:neg(n),n:v}},
   {p:[x,y-1],o:{u,v:n,n:neg(v)}}
  ];
  for(const {p,o} of next){const other=map.get(key(p));if(other===undefined)continue;
   if(!orient[other]){orient[other]=o;pending.push(other);}
   else if(key(orient[other].n)!==key(o.n))throw Error("Desarrollo se pliega sobre sí mismo");
  }
 }
 if(orient.some(x=>!x)||new Set(orient.map(o=>key(o.n))).size!==6)throw Error("Seis caras no forman un cubo");
 return orient.map(o=>o.n);
}
export function oppositesOf(normals){return normals.map(a=>normals.findIndex(b=>opposite(a,b)));}
function opts(answer,wrong,rng){
 const unique=[...new Set(wrong.map(String))].filter(x=>x!==String(answer));
 if(unique.length<3)throw Error("Faltan distractores");
 return shuffle([String(answer),...shuffle(unique,rng).slice(0,3)],rng);
}
function textQuestion(variant,title,prompt,visual,answer,wrong,explanation,rng,difficulty){
 return {variant,title,prompt,visual,answer:String(answer),options:opts(answer,wrong,rng),explanation,difficulty,
  demo:{kind:visual.kind}};
}
function graphicQuestion(variant,title,prompt,visual,correctModel,distractors,explanation,rng,difficulty){
 const data=[correctModel,...shuffle(distractors,rng).slice(0,3)];
 if(new Set(data.map(v=>JSON.stringify(v))).size!==4)throw Error("Figuras duplicadas");
 const shuffled=shuffle(data,rng),options=["A","B","C","D"];
 const index=shuffled.findIndex(v=>JSON.stringify(v)===JSON.stringify(correctModel));
 const optionVisuals=Object.fromEntries(options.map((letter,i)=>[letter,shuffled[i]]));
 return {variant,title,prompt,visual:{...visual,options:optionVisuals},answer:options[index],options,
  optionVisuals,explanation,difficulty,demo:{kind:visual.kind}};
}
function cubeSetup(level,rng){
 const candidates=level==="basico"?NETS.slice(0,2):NETS;
 const positions=pick(candidates,rng).map(p=>[...p]);
 const normals=foldNet(positions);
 const labels=shuffle(symbols,rng);
 return {positions,normals,labels,opposites:oppositesOf(normals)};
}
function cubeOpposite(level,rng){
 const d=cubeSetup(level,rng),selected=ri(0,5,rng),answer=d.labels[d.opposites[selected]];
 return textQuestion("cubeOpposite","Desarrollo y caras opuestas",
  "Imagina este desarrollo plegado. ¿Qué cara queda exactamente opuesta a "+d.labels[selected]+"?",
  {kind:"foldingNet",...d,selected},answer,d.labels.filter(x=>x!==answer&&x!==d.labels[selected]),
  "Pliega las caras manteniendo su orientación. La cara "+d.labels[selected]+" tiene normal contraria a "+answer+
  "; por eso nunca comparten una arista. Las otras cuatro caras son adyacentes.",rng,level);
}
function cubeAdjacent(level,rng){
 const d=cubeSetup(level,rng),pairs=d.labels.map((_,i)=>[i,d.opposites[i]].sort((a,b)=>a-b))
  .filter((pair,i,all)=>all.findIndex(p=>key(p)===key(pair))===i);
 const adjacent=[];
 for(let a=0;a<6;a++)for(let b=a+1;b<6;b++)if(d.opposites[a]!==b)adjacent.push([a,b]);
 const correct=pick(adjacent,rng);
 const pairText=p=>p.map(i=>d.labels[i]).join(" · ");
 return textQuestion("cubeAdjacent","Distinguir caras contiguas",
  "¿Qué pareja de letras podría compartir una arista al plegar la red?",
  {kind:"foldingNet",...d,selected:-1},pairText(correct),pairs.map(pairText),
  "Tres opciones contienen parejas opuestas, que nunca se tocan por una arista. "+
  pairText(correct)+" sí corresponde a dos caras contiguas.",rng,level);
}
function cubeCorner(level,rng){
 const d=cubeSetup(level,rng),valid=[],invalid=[];
 for(let a=0;a<6;a++)for(let b=a+1;b<6;b++)for(let c=b+1;c<6;c++){
  const triple=[a,b,c],works=d.opposites[a]!==b&&d.opposites[a]!==c&&d.opposites[b]!==c;
  (works?valid:invalid).push(triple);
 }
 const correct=pick(valid,rng);
 const toText=triple=>triple.map(i=>d.labels[i]).sort().join(" · ");
 return textQuestion("cubeCorner","Tres caras en una esquina",
  "Solo una terna podría encontrarse en un mismo vértice del cubo. ¿Cuál es?",
  {kind:"foldingNet",...d,selected:-1},toText(correct),invalid.map(toText),
  "En cada esquina se reúnen exactamente tres caras: una de cada pareja de opuestas. "+
  toText(correct)+" no incluye ninguna pareja opuesta; las demás sí.",rng,level);
}
function blocks(level,rng){
 const cols=level==="avanzado"?4:3,rows=level==="basico"?2:3,max=level==="basico"?3:level==="intermedio"?4:5;
 const heights=Array.from({length:cols*rows},()=>ri(1,max,rng));
 const total=heights.reduce((s,n)=>s+n,0),byRow=Array.from({length:rows},(_,i)=>heights.slice(i*cols,(i+1)*cols).reduce((a,b)=>a+b,0));
 return textQuestion("blocks","Volúmenes y cubos ocultos",
  "Cuenta todos los cubos unitarios, incluidos los que quedan detrás o debajo de otros.",
  {kind:"blocks",heights,cols,rows},total,
  [total-3,total-2,total-1,total+1,total+2,total+3].filter(x=>x>0),
  "Cada columna contiene tantos cubos como niveles alcanza. Por filas: "+
  byRow.join(" + ")+" = "+total+". No cuentes solo los cubos cuya cara superior ves.",rng,level);
}
const angles=[0,90,180,270];
const normAngle=n=>(n%360+360)%360;
function applyStep(state,step){
 if(step.kind==="giro")return {angle:normAngle(state.angle+step.degrees),flip:state.flip};
 // Espejo vertical: respecto al eje vertical que atraviesa la figura, no giro de 180º.
 if(step.kind==="espejo")return {angle:normAngle(-state.angle),flip:!state.flip};
 throw Error("Transformación desconocida");
}
export function applyTransform(steps,initial={angle:0,flip:false}){
 return steps.reduce((state,step)=>applyStep(state,step),initial);
}
function rotation(level,rng){
 const first=pick(angles,rng),initial={angle:first,flip:false},steps=[];
 if(level==="basico")steps.push({kind:"giro",degrees:pick([90,180,270],rng)});
 if(level==="intermedio")steps.push({kind:"giro",degrees:pick([90,270],rng)},{kind:"giro",degrees:pick([90,180,270],rng)});
 if(level==="avanzado"){
  steps.push({kind:"giro",degrees:pick([90,180,270],rng)},{kind:"espejo"});
  if(rng()<0.5)steps.push({kind:"giro",degrees:pick([90,270],rng)});
 }
 const answer=applyTransform(steps,initial);
 const others=[];
 for(const angle of angles)for(const flip of [false,true])if(angle!==answer.angle||flip!==answer.flip)others.push({angle,flip});
 const stepsText=steps.map(x=>x.kind==="giro"?"girar "+x.degrees+"° en sentido horario":"reflejar respecto al eje vertical").join(", después ");
 return graphicQuestion("rotation","Rotaciones y simetría axial",
  "Partiendo de la figura, aplica estas instrucciones en orden: "+stepsText+". ¿Cuál es el resultado?",
  {kind:"transformFigure",initial,steps,stepsText},answer,others,
  "No confundas girar con reflejar. La flecha y la marca lateral permiten distinguir los espejos. "+
  "Pasos: "+stepsText+". El resultado tiene orientación "+answer.angle+"°"+
  (answer.flip?" y está reflejado.":" y no está reflejado."),rng,level);
}
function sequence(level,rng){
 const start=ri(0,3,rng)*90,delta=pick([90,270],rng),firstFill=rng()<0.5;
 const countStart=ri(1,3,rng);
 function model(i){return {angle:normAngle(start+delta*i),fill:level==="basico"?firstFill:(i%2===0?firstFill:!firstFill),
  dots:level==="avanzado"?(countStart+i)%3+1:1};}
 const sequence=Array.from({length:5},(_,i)=>model(i)),correct=model(5);
 const others=[
  {...correct,angle:normAngle(correct.angle+90)},
  {...correct,fill:!correct.fill},
  {...correct,dots:correct.dots===3?1:correct.dots+1},
  {...correct,angle:normAngle(correct.angle+180)},
  {...correct,angle:normAngle(correct.angle+270),fill:!correct.fill}
 ].filter(x=>JSON.stringify(x)!==JSON.stringify(correct));
 if(level==="basico"){ // El relleno y los puntos no varían en este nivel.
  others.splice(0,others.length,...[90,180,270].map(d=>({...correct,angle:normAngle(correct.angle+d)})));
 }else if(level==="intermedio"){
  others.splice(0,others.length,
   {...correct,angle:normAngle(correct.angle+90)},
   {...correct,fill:!correct.fill},
   {...correct,angle:normAngle(correct.angle+180),fill:!correct.fill});
 }
 const label="El símbolo gira "+delta+"° en cada paso";
 const explanation=label+(level!=="basico"?", el relleno alterna": "")+
  (level==="avanzado"?" y los puntos siguen un ciclo de tres cantidades":"")+
  ". Observa cada atributo por separado y combínalos en el sexto elemento.";
 return graphicQuestion("symbolsequence","Series visuales de varias reglas",
  "Descubre qué figura sigue la serie. Observa orientación"+(level!=="basico"?", relleno":"")+
   (level==="avanzado"?" y número de puntos":"")+".",
  {kind:"attributeSequence",sequence},correct,others,explanation,rng,level);
}
export const BIT_LINES=[
 [17,20,83,20],[17,80,83,80],[17,20,17,80],[83,20,83,80],
 [17,20,83,80],[17,80,83,20]
];
const OPERATIONS={
 union:(a,b)=>a|b,
 xor:(a,b)=>a^b,
 interseccion:(a,b)=>a&b,
 diferencia:(a,b)=>a&~b&63
};
export function maskOperate(mode,a,b){if(!OPERATIONS[mode])throw Error("Operación desconocida");return OPERATIONS[mode](a,b);}
function graphicmatrix(level,rng){
 const modes=level==="basico"?["union"]:level==="intermedio"?["xor"]:["interseccion","diferencia"];
 const operation=pick(modes,rng);
 let triples,good=false;
 for(let tries=0;tries<500&&!good;tries++){
  triples=Array.from({length:3},()=>[ri(1,63,rng),ri(1,63,rng)]);
  const targets=triples.map(([a,b])=>maskOperate(operation,a,b));
  if(targets.some(x=>x===0))continue;
  good=Object.keys(OPERATIONS).filter(mode=>mode!==operation)
     .every(mode=>triples.slice(0,2).some(([a,b],i)=>maskOperate(mode,a,b)!==targets[i]));
  if(targets.some(x=>x===63)&&level==="basico")good=false;
 }
 if(!good)throw Error("No se pudo crear una matriz con regla distinguible");
 const masks=triples.map(([a,b])=>[a,b,maskOperate(operation,a,b)]);
 const answer=masks[2][2],wrong=[...new Set([
  ...Object.keys(OPERATIONS).filter(x=>x!==operation).map(x=>maskOperate(x,triples[2][0],triples[2][1])),
  answer^1,answer^2,answer^4,answer^8,answer^16,answer^32
 ])].filter(x=>x!==answer&&x>=0&&x<=63);
 const transpose=level!=="basico"&&rng()<0.5;
 const cells=transpose?Array.from({length:9},(_,i)=>masks[i%3][Math.floor(i/3)]):masks.flat();
 cells[8]="?";
 const visual={kind:"lineMatrix",cells,mode:operation,transpose};
 const wording={
  union:"Se unen todos los segmentos de las dos primeras casillas: los trazos repetidos se dibujan una vez.",
  xor:"Se conservan solo los segmentos que aparecen en exactamente una de las dos primeras casillas.",
  interseccion:"Se conservan únicamente los segmentos presentes a la vez en las dos primeras casillas.",
  diferencia:"Se dibujan los trazos de la primera casilla que NO aparecen en la segunda."
 };
 return graphicQuestion("graphicmatrix","Matrices gráficas: operaciones sobre trazos",
  "Completa la matriz. La misma operación se aplica "+(transpose?"de arriba abajo en cada columna.":"de izquierda a derecha en cada fila."),
  visual,answer,wrong.map(x=>x),wording[operation]+
  " Compara los dos ejemplos completos y aplica exactamente esa regla al último par.",rng,level);
}
export function makeAdvancedQuestion(variant,difficulty="basico",rng=Math.random){
 const level=LEVELS.includes(difficulty)?difficulty:"basico";
 const generators={cubeOpposite,cubeAdjacent,cubeCorner,blocks,rotation,symbolsequence:sequence,graphicmatrix};
 if(!generators[variant])throw Error("Subtipo visual desconocido: "+variant);
 return generators[variant](level,rng);
}
