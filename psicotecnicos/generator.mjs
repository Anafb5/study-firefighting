// Motor puro y comprobable: las preguntas generan su solución con la misma regla.
// Sin acceso a DOM, localStorage ni dependencias de red.
import {TOPIC_BY_ID} from "./topics.mjs";
import {makeAdvancedQuestion,LEVELS} from "./advanced-visual.mjs";
const random=(rng=Math.random)=>rng();
const int=(lo,hi,rng=Math.random)=>lo+Math.floor(random(rng)*(hi-lo+1));
const take=(arr,rng=Math.random)=>arr[int(0,arr.length-1,rng)];
const shuffle=(values,rng=Math.random)=>{const a=[...values];for(let i=a.length-1;i>0;i--){const j=int(0,i,rng);[a[i],a[j]]=[a[j],a[i]];}return a;};
const str=v=>String(v);
const withOptions=(answer,distractors,rng)=>{const a=str(answer),rest=[...new Set(distractors.map(str))].filter(x=>x!==a);if(rest.length<3)throw Error("Distractores insuficientes para "+a);return shuffle([a,...shuffle(rest,rng).slice(0,3)],rng);};
function question(variant,title,prompt,visual,answer,distractors,explanation,rng,extra={}){
 return {variant,title,prompt,visual,answer:str(answer),options:withOptions(answer,distractors,rng),explanation,...extra};
}
const families={
 exclusion(rng){const items=[
  {same:["abeto","pino","ciprés"],other:"roble",label:"coníferas"},
  {same:["enero","marzo","julio"],other:"martes",label:"meses del año"},
  {same:["cobre","hierro","plata"],other:"madera",label:"metales"},
  {same:["triángulo","cuadrado","pentágono"],other:"esfera",label:"figuras planas"}
 ];const x=take(items,rng);return question("exclusion","Exclusión verbal","¿Qué término no pertenece al mismo grupo? Selecciona la excepción.",{kind:"words",words:shuffle([...x.same,x.other],rng)},x.other,x.same,"Los otros tres pertenecen al grupo «"+x.label+"».",rng);},
 analogy(rng){const sets=[
 {a:"Pájaro",b:"volar",c:"pez",d:"nadar",wrong:["correr","trepar","escribir"],rule:"animal : movimiento característico"},
 {a:"Médico",b:"hospital",c:"profesor",d:"escuela",wrong:["cocina","almacén","taller"],rule:"profesión : lugar de trabajo"},
 {a:"Libro",b:"leer",c:"canción",d:"escuchar",wrong:["mirar","construir","barrer"],rule:"objeto : acción de percepción"},
 {a:"Guante",b:"mano",c:"zapato",d:"pie",wrong:["cabeza","codo","nariz"],rule:"prenda : parte del cuerpo"}
 ];const x=take(sets,rng);return question("analogy","Analogías","Completa la relación: "+x.a+" es a "+x.b+" como "+x.c+" es a…",{kind:"analogy",parts:[x.a,x.b,x.c]},x.d,x.wrong,"La relación es «"+x.rule+"». Se conserva el mismo tipo de vínculo.",rng);},
 verbalorder(rng){const names=shuffle(["Ana","Bea","Carla","Diana"],rng),target=take(["mayor","menor"],rng),answer=target==="mayor"?names[0]:names[3];return question("verbalorder","Ordenaciones verbales","Si "+names[0]+" es mayor que "+names[1]+", "+names[1]+" es mayor que "+names[2]+" y "+names[2]+" es mayor que "+names[3]+", ¿quién es "+target+"?",{kind:"ranking",lines:[names[0]+" > "+names[1],names[1]+" > "+names[2],names[2]+" > "+names[3]]},answer,names.filter(x=>x!==answer),"El orden completo es "+names.join(" > ")+". La primera persona es la mayor y la última la menor.",rng);},
 sequence(rng){const k=int(0,2,rng);let numbers,answer,explanation;if(k===0){const a=int(2,16,rng),d=int(2,8,rng);numbers=[0,1,2,3,4].map(i=>a+i*d);answer=a+5*d;explanation="Se suma "+d+" en cada paso.";}else if(k===1){const a=int(1,4,rng),ratio=int(2,3,rng);numbers=[0,1,2,3,4].map(i=>a*ratio**i);answer=a*ratio**5;explanation="Cada término se multiplica por "+ratio+".";}else{const a=int(2,9,rng),b=int(20,34,rng),d=int(2,4,rng);numbers=[a,b,a+d,b+d,a+2*d];answer=b+2*d;explanation="Hay dos series intercaladas: posiciones impares "+[a,a+d,a+2*d].join(", ")+" y pares "+[b,b+d,b+2*d].join(", ")+". Ambas suman "+d+".";}return question("sequence","Series numéricas","¿Qué número sigue la serie?",{kind:"numberLine",numbers},answer,[answer-1,answer+1,answer+2,answer+3,answer+6]," "+explanation,rng);},
 matrix(rng){const a=int(2,9,rng),b=int(1,7,rng),c=int(2,8,rng),d=int(1,7,rng),e=int(3,9,rng),f=int(1,7,rng),ans=e+f;return question("matrix","Matrices numéricas","Completa la casilla vacía. La misma regla se aplica en cada fila.",{kind:"matrix",cells:[a,b,a+b,c,d,c+d,e,f,"?"]},ans,[ans-2,ans-1,ans+1,ans+2,ans+3],"En cada fila, el tercer número es la suma de los dos primeros: "+e+" + "+f+" = "+ans+".",rng);},
 equation(rng){const x=int(2,12,rng),a=int(2,7,rng),b=int(1,16,rng),total=a*x+b;return question("equation","Álgebra elemental","Resuelve la ecuación: "+a+"x + "+b+" = "+total,{kind:"equation",formula:a+"x + "+b+" = "+total},x,[x-2,x-1,x+1,x+2,x+3].filter(v=>v>0),"Restamos "+b+" a ambos lados y dividimos entre "+a+": x = ("+total+" − "+b+") / "+a+" = "+x+".",rng);},
 mental(rng){const a=int(11,29,rng),b=take([5,9,11],rng),ans=a*b;return question("mental","Cálculo mental","Calcula mentalmente "+a+" × "+b+".",{kind:"equation",formula:a+" × "+b},ans,[ans-b,ans+b,ans-5,ans+5,ans+10],"Descompón "+a+" en "+(a-1)+" + 1 y aplica la distributiva; comprueba el resultado: "+a+" × "+b+" = "+ans+".",rng);},
 rotation(rng){const arrows=["↑","→","↓","←"],start=int(0,3,rng),step=take([1,2,3],rng),answer=arrows[(start+step)%4];return question("rotation","Rotación gráfica","¿Qué orientación resulta tras girar la flecha "+(step*90)+"° en sentido horario?",{kind:"arrows",arrows:[arrows[start]],step},answer,arrows.filter(x=>x!==answer),"El giro de "+(step*90)+"° equivale a "+step+" cuarto(s) de vuelta en sentido horario.",rng,{demo:{kind:"rotation",steps:step}});},
 symbolsequence(rng){const glyphs=take([["●","■","▲"],["◆","○","★"],["◀","▲","▶"]],rng),start=int(0,2,rng),seq=[0,1,2,3,4].map(i=>glyphs[(start+i)%3]),answer=glyphs[(start+5)%3];return question("symbolsequence","Secuencia cíclica","¿Qué símbolo continúa el patrón?",{kind:"symbolLine",symbols:seq},answer,["●","■","▲","◆","○","★","◀","▶"].filter(s=>s!==answer),"Los símbolos se repiten en un ciclo de tres. Después de "+seq[4]+" vuelve "+answer+".",rng);},
 graphicmatrix(rng){const a=take(["●","▲","■"],rng),b=take(["◆","★","✚"],rng),c=take(["○","△","□"],rng),d=take(["◈","✦","✧"],rng),ans=c+" "+d;return question("graphicmatrix","Matriz gráfica · superposición","¿Qué conjunto debe ir en la casilla vacía?",{kind:"matrix",cells:[a,b,a+" "+b,b,a,b+" "+a,c,d,"?"]},ans,[c,d,a+" "+c,b+" "+d,a+" "+d],"En la tercera columna se unen las marcas de las dos primeras; en la última fila deben aparecer "+c+" y "+d+".",rng);},
 cubeOpposite(rng){const marks=shuffle(["A","B","C","D","E","F"],rng),op=[5,3,4,1,2,0],selected=int(0,5,rng),ans=marks[op[selected]];return question("cubeOpposite","Caras opuestas de un cubo","¿Qué cara queda opuesta a la cara "+marks[selected]+" cuando se pliega la red?",{kind:"cubeNet",marks,selected},ans,marks.filter(x=>x!==ans&&x!==marks[selected]),"Con este desarrollo de cubo, las posiciones opuestas son superior–inferior (0–5), izquierda–derecha (1–3) y centro–extremo (2–4). "+marks[selected]+" es opuesta a "+ans+".",rng,{demo:{kind:"cube",marks}});},
 cubeAdjacent(rng){const marks=shuffle(["A","B","C","D","E","F"],rng),op=[5,3,4,1,2,0],selected=int(0,5,rng),ans=marks[op[selected]];return question("cubeAdjacent","Caras contiguas de un cubo","¿Qué cara NO podría compartir una arista con "+marks[selected]+" al plegar la red?",{kind:"cubeNet",marks,selected},ans,marks.filter(x=>x!==ans&&x!==marks[selected]),"La única cara que no comparte arista con "+marks[selected]+" es su cara opuesta: "+ans+". Todas las demás son contiguas.",rng,{demo:{kind:"cube",marks}});},
 blocks(rng){const heights=Array.from({length:6},()=>int(1,3,rng)),ans=heights.reduce((a,b)=>a+b,0);return question("blocks","Composición de volúmenes","¿Cuántos cubos unitarios hay en la construcción (incluidos los ocultos)?",{kind:"blocks",heights},ans,[ans-2,ans-1,ans+1,ans+2,ans+3],"Suma las alturas de las seis columnas: "+heights.join(" + ")+" = "+ans+" cubos, aunque algunos estén ocultos.",rng,{demo:{kind:"blocks",heights}});},
 path(rng){const paths=[["E","S","E","N","E","S"],["E","S","W","S","E","N","E"],["S","E","N","E","S","E"],["E","S","E","S","W","S","E"]],directions=take(paths,rng),ans=directions.reduce((n,d,i)=>n+(i>0&&d!==directions[i-1]?1:0),0);return question("path","Giros de un recorrido","Cuenta los cambios de dirección de 90° entre INICIO y FINAL.",{kind:"path",directions},ans,[ans-2,ans-1,ans+1,ans+2,ans+3].filter(x=>x>=0),"Direcciones: "+directions.join(" → ")+". Hay "+ans+" cambios de dirección, así que hay "+ans+" giros de 90°.",rng,{demo:{kind:"path",directions}});},
 connections(rng){const map=shuffle([1,2,3,4],rng),at=int(0,3,rng),ans=map[at];return question("connections","Seguimiento de conexiones","¿A qué salida de la derecha llega la línea que empieza en "+(at+1)+" a la izquierda?",{kind:"connections",map,selected:at},ans,[1,2,3,4].filter(x=>x!==ans),"La línea "+(at+1)+" termina en la salida "+ans+". Los cruces no conectan dos trayectorias.",rng,{demo:{kind:"connections",map,selected:at}});},
 balance(rng){const unit=int(2,4,rng),amount=int(2,4,rng),ans=unit*amount;return question("balance","Equilibrio de balanzas","Si 1 círculo pesa como "+unit+" cuadrados, ¿cuántos cuadrados equilibran "+amount+" círculos?",{kind:"balance",unit,amount},ans,[ans-2,ans-1,ans+1,ans+2,ans+unit],"Multiplica: "+amount+" círculos × "+unit+" cuadrados por círculo = "+ans+" cuadrados.",rng,{demo:{kind:"balance",unit,amount}});},
 count(rng){const target=take(["6","8","9"],rng),digits=Array.from({length:58},()=>str(int(0,9,rng))),ans=digits.filter(x=>x===target).length;return question("count","Atención selectiva","¿Cuántas veces aparece el dígito "+target+"?",{kind:"characters",text:digits.join(""),target},ans,[ans-2,ans-1,ans+1,ans+2,ans+3].filter(x=>x>=0),"El dígito "+target+" aparece "+ans+" veces. Recorre la cadena de izquierda a derecha y cuenta una marca por aparición.",rng,{demo:{kind:"count",target}});},
 difference(rng){const a=Array.from({length:3},()=>Array.from({length:12},()=>str(int(0,9,rng)))),b=a.map(row=>[...row]),changes=int(2,5,rng),positions=shuffle(Array.from({length:36},(_,i)=>i),rng).slice(0,changes);for(const pos of positions){const r=Math.floor(pos/12),c=pos%12;b[r][c]=str((Number(b[r][c])+int(1,9,rng))%10);}return question("difference","Comparación de secuencias","¿Cuántos caracteres son distintos entre ambas columnas?",{kind:"comparison",left:a.map(x=>x.join("")),right:b.map(x=>x.join("")),changed:positions},changes,[changes-2,changes-1,changes+1,changes+2,changes+3].filter(x=>x>=0),"Hay "+changes+" posiciones diferentes. Compara dígito por dígito; no cuentes una fila completa como un único fallo.",rng,{demo:{kind:"difference",positions}});},
 pairCount(rng){const target="96",digits=Array.from({length:60},()=>str(int(0,9,rng))),text=digits.join(""),ans=Array.from({length:text.length-1},(_,i)=>text.slice(i,i+2)).filter(x=>x===target).length;return question("pairCount","Localizar parejas","¿Cuántas veces aparece la pareja consecutiva «96»?",{kind:"characters",text,target},ans,[ans+1,ans+2,ans+3,ans+4,ans+5],"Hay "+ans+" apariciones de «96» contiguas; un 9 y un 6 separados no cuentan.",rng,{demo:{kind:"count",target}});},
 memoryCategory(rng){const animals=["gato","perro","pez","loro","vaca"],objects=["mesa","libro","vaso","reloj","llave"],list=shuffle([...shuffle(animals,rng).slice(0,int(2,4,rng)),...shuffle(objects,rng).slice(0,5)],rng).slice(0,8),ans=list.filter(w=>animals.includes(w)).length;return question("memoryCategory","Memoria de categorías","Tras ocultar la lista, ¿cuántos animales aparecían?",{kind:"memory",words:list,seconds:25},ans,[0,1,2,3,4,5,6,7,8].filter(x=>x!==ans),"Animales recordados: "+list.filter(w=>animals.includes(w)).join(", ")+". Hay "+ans+".",rng);},
 memoryPosition(rng){const words=shuffle(["LUNA","MESA","SOL","TREN","CASA","GATO","RÍO","LIBRO","PERA","LLAVE"],rng).slice(0,8),pos=int(0,7,rng),ans=words[pos];return question("memoryPosition","Memoria de posición","¿Qué palabra ocupaba la posición "+(pos+1)+" de la lista?",{kind:"memory",words,seconds:25},ans,words.filter(w=>w!==ans),"La palabra en la posición "+(pos+1)+" era «"+ans+"». Para este subtipo importa el orden, no solo reconocer la palabra.",rng);},
 memoryRepeat(rng){const words=shuffle(["RANA","RELOJ","SOL","TREN","CASA","LUNA","PINO","LLAVE","PERA"],rng),ans=words[0],list=shuffle([...words.slice(0,7),ans],rng);return question("memoryRepeat","Memoria de repetición","¿Qué palabra aparecía dos veces en la lista?",{kind:"memory",words:list,seconds:25},ans,words.slice(1,6),"«"+ans+"» aparece dos veces; las demás solo una.",rng);},
 equivalence(rng){const x=int(2,9,rng),a=int(4,9,rng),b=int(1,a-1,rng),c=(a-b)*x;return question("equivalence","Equivalencias algebraicas","Si "+a+"x = "+b+"x + "+c+", ¿cuánto vale x?",{kind:"equation",formula:a+"x = "+b+"x + "+c},x,[x-2,x-1,x+1,x+2,x+3].filter(v=>v>0),"Agrupa términos semejantes: ("+a+" − "+b+")x = "+c+"; por tanto x = "+c+" / "+(a-b)+" = "+x+".",rng);},
 abstractSequence(rng){const pair=take([["■","□"],["●","○"],["◆","◇"],["▲","△"]],rng),seq=[pair[0],pair[1],pair[0],pair[1],pair[0]],ans=pair[1];return question("abstractSequence","Alternancia abstracta","¿Qué símbolo sigue la pauta de alternancia?",{kind:"symbolLine",symbols:seq},ans,[pair[0],"★","✚","▼","◈"],"Alternan figura rellena y figura vacía. Tras "+pair[0]+" corresponde "+pair[1]+".",rng);},
 symbolMatrix(rng){const glyph=take(["●","■","▲","◆"],rng),ans=glyph.repeat(3);return question("symbolMatrix","Matriz simbólica","Sigue la regla de crecimiento por filas. ¿Qué ocupa el hueco?",{kind:"matrix",cells:[glyph,glyph.repeat(2),glyph.repeat(3),glyph,glyph.repeat(2),glyph.repeat(3),glyph,glyph.repeat(2),"?"]},ans,[glyph,glyph.repeat(2),glyph.repeat(4),glyph.repeat(5)],"Cada fila contiene una, dos y tres figuras del mismo tipo. Faltan tres símbolos: "+ans+".",rng);}
};
export const VARIANTS=Object.freeze({
 linguistico:["exclusion","analogy","verbalorder"],
 numerico:["sequence","matrix","equation","mental"],
 grafico:["rotation","symbolsequence","graphicmatrix"],
 espacial:["cubeOpposite","cubeAdjacent","cubeCorner","blocks"],
 mecanica:["path","connections","balance"],
 perceptiva:["count","difference","pairCount"],
 memoria:["memoryCategory","memoryPosition","memoryRepeat"],
 abstracto:["equivalence","abstractSequence","symbolMatrix"]
});
export const VARIANT_LABELS={
 exclusion:"Exclusiones",analogy:"Analogías",verbalorder:"Lógica verbal",sequence:"Series",matrix:"Matrices",equation:"Ecuaciones",mental:"Cálculo mental",
 rotation:"Rotaciones",symbolsequence:"Secuencias",graphicmatrix:"Matrices gráficas",cubeOpposite:"Caras opuestas",cubeAdjacent:"Caras contiguas",cubeCorner:"Tres caras por vértice",blocks:"Composición 3D",
 path:"Recorridos",connections:"Conexiones",balance:"Balanzas",count:"Recuentos",difference:"Diferencias",pairCount:"Parejas de cifras",
 memoryCategory:"Categorías",memoryPosition:"Posición",memoryRepeat:"Repeticiones",equivalence:"Equivalencias",abstractSequence:"Alternancias",symbolMatrix:"Matrices simbólicas"
};
const COMPLEX_VISUAL=new Set(["cubeOpposite","cubeAdjacent","cubeCorner","blocks","rotation","symbolsequence","graphicmatrix"]);
export function chooseAdaptiveLevel(history,variant){
 const valid=(Array.isArray(history)?history:[]).filter(a=>a?.mode==="entrenamiento"&&a.variant===variant&&LEVELS.includes(a.difficulty));
 if(!valid.length)return "basico";
 const current=valid.at(-1).difficulty;
 const recent=valid.filter(a=>a.difficulty===current).slice(-6);
 if(recent.length<4)return current;
 const rate=recent.filter(a=>a.ok&&!a.assisted).length/recent.length;
 if(current==="basico")return rate>=0.8?"intermedio":"basico";
 if(current==="intermedio")return rate>=0.75?"avanzado":rate<0.5?"basico":"intermedio";
 return rate<0.5?"intermedio":"avanzado";
}
export function createQuestion(topicId,variantId,rng=Math.random,difficulty="basico"){
 if(!TOPIC_BY_ID[topicId])throw Error("Tema desconocido: "+topicId);
 if(!VARIANTS[topicId].includes(variantId))throw Error("Tipo ajeno al tema: "+variantId);
 const level=LEVELS.includes(difficulty)?difficulty:"basico";
 const q=COMPLEX_VISUAL.has(variantId)?makeAdvancedQuestion(variantId,level,rng):families[variantId](rng);
 if(q.options.length!==4||new Set(q.options).size!==4||!q.options.includes(q.answer))throw Error("Opciones inválidas: "+variantId);
 return {...q,topicId,difficulty:level};
}
export function createSession(topicId,length=10,variant="todos",rng=Math.random,options={}){
 if(!Number.isSafeInteger(length)||length<1||length>50)throw Error("Número de preguntas fuera de rango");
 const pool=variant==="todos"?VARIANTS[topicId]:[variant];
 if(!pool||pool.some(v=>!VARIANTS[topicId].includes(v)))throw Error("Selección inválida");
 const ordered=shuffle(Array.from({length},(_,i)=>pool[i%pool.length]),rng);
 const config=options.difficulty||"basico";
 if(!["basico","intermedio","avanzado","progresiva","adaptativa"].includes(config))throw Error("Dificultad desconocida");
 return ordered.map((type,i)=>{
  const level=config==="progresiva"?LEVELS[Math.min(2,Math.floor(i*3/length))]:
   config==="adaptativa"?chooseAdaptiveLevel(options.history,type):config;
  return createQuestion(topicId,type,rng,level);
 });
}
