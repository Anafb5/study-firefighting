// Tablas de referencia transcritas conservando filas y columnas del PDF original.
// Fuente: PRUEBAS_APTITUD_PERCEPTIVA.pdf, pp. 4, 5, 11 y 12.
// Se reutiliza la misma tabla en las preguntas correlativas que dicen "tabla anterior".
export const PERCEPTUAL_REFERENCES={
 A:{questions:[8,9],sourcePage:4,
 rows:[
 ["86686868","88688686","88668866","86866688","86868686"],
 ["86868886","66868688","86866886","68686886","86868688"],
 ["88866886","88866886","86868886","68886868","86868688"],
 ["68686866","88866886","88868886","88866888","86868688"],
 ["68686886","888868686","68686868","66868666","68688666"]
 ]},
 B:{questions:[3,4],sourcePage:5,
 rows:[
 ["JHFOSMJK","DYWMDLSK","ODJAMDDJ","HFJSMFKS"],
 ["IJDFKXHS","JDNSUVNA","KCFNCHSJ","BDMSHXMH"],
 ["EJFDKZKL","HFKSKALD","JUDKSOIXJ","HDSKCXIO"],
 ["JDHJSUID","HDJSKOOI","DJDKHFIK","HDJKSUDI"]
 ]},
 C:{questions:[8,9],sourcePage:11,
 rows:[
 ["ETFILEFITL","TLFIELFIEL","TLIFLEIFLT","LFILEIFTLE","LFILEFTILE"],
 ["EILFTELFTE","FILFLEEFIL","IFLETLFLE","LFLEIFLEIT","LFILEFTEIL"],
 ["EILTFIELFT","EILTEILFEF","ILFLFIETLF","ILEFLTIFLE","LFILEIALFIT"],
 ["ITLFLEITLE","TILFILEITL","ILFLEITLFE","LFIELTFIEL","LFIELFITFE"],
 ["ITLFLEFITL","ITLLEIFTIE","LFILETFLEE","EIFLITFTIE","TILFIELFTF"]
 ]},
 D:{questions:[3,4],sourcePage:12,
 rows:[
 ["GSNMCQ","PHKLCM","PÑCMNC","PDLÑCN"],
 ["PÑBCMN","QGDSNC","HDHKJG","PRÑLCM"],
 ["DCUPQÑ","PÑDGJK","ÑMCNCD","DGKJCH"],
 ["FHCKMC","QXBMCN","GKTMNB","BCMDLP"]
 ]}
};
export function perceptualTableFor(group,question){
 const table=PERCEPTUAL_REFERENCES[group];
 return table?.questions.includes(question)?table:null;
}
export function countSymbol(table,column,symbol){
 return table.rows.reduce((total,row)=>total+[...row[column]].filter(c=>c===symbol).length,0);
}
export function countPair(table,columns,pair){
 return table.rows.reduce((total,row)=>total+columns.reduce((subtotal,index)=>{
  const s=row[index];let count=0;for(let i=0;i<=s.length-pair.length;i++)if(s.slice(i,i+pair.length)===pair)count++;
  return subtotal+count;
 },0),0);
}

export const PERCEPTUAL_OPERATIONS={
 B:{questions:[8,9,10],sourcePage:7,operations:[
  ["&","Sumar 7","+",7],["%","Sumar 5","+",5],["$","Restar 2","-",2],["Ð","Restar 8","-",8],
  ["®","Multiplicar por 2","*",2],["¶","Multiplicar por 3","*",3],["*","Dividir entre 2","/",2],["¥","Dividir entre 4","/",4]
 ]},
 D:{questions:[8,9,10],sourcePage:14,operations:[
  ["&","Sumar 4","+",4],["%","Sumar 1","+",1],["$","Restar 3","-",3],["Ð","Restar 2","-",2],
  ["®","Multiplicar por 3","*",3],["¶","Multiplicar por 1","*",1],["*","Dividir entre 1","/",1],["¥","Dividir entre 2","/",2]
 ]}
};
export function perceptualOperationsFor(group,number){
 const data=PERCEPTUAL_OPERATIONS[group];
 return data?.questions.includes(number)?data:null;
}
export function applyPerceptualOperations(group,start,symbols){
 const dictionary=Object.fromEntries((PERCEPTUAL_OPERATIONS[group]?.operations||[]).map(([symbol,,op,amount])=>[symbol,[op,amount]]));
 return [...symbols].reduce((value,symbol)=>{
  const [operation,n]=dictionary[symbol]||[];
  if(operation==="+")return value+n;
  if(operation==="-")return value-n;
  if(operation==="*")return value*n;
  if(operation==="/")return value/n;
  throw new Error("Operador de la prueba desconocido: "+symbol);
 },start);
}
