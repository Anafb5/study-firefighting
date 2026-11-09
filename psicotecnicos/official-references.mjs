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
