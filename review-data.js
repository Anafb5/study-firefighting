/* Ejercicios extra, basados en el temario facilitado. */
const REVIEW_CLASSIFY=[
{name:"Categorías de EPI de intervención",groups:["Categoría I","Categoría II","Categoría III"],items:[["Gafas",0],["Botas",1],["Verdugo",1],["Casco",2],["Chaquetón",2],["Cubrepantalón",2],["Guantes",2],["Equipo de respiración",2]],why:"Clasificación de la dotación general del tema, p. 14."},
{name:"Tipos de botas",groups:["Tipo I · Forestal","Tipo II · Intervención","Tipo III · Química"],items:[["Incendio forestal",0],["Incendio en edificio",1],["Fuego en vehículo",1],["Emisión química peligrosa",2],["Rescate general",0],["Sustancia potencialmente mortal",2]],why:"Tipos de bota del PDF, pp. 19–20."},
{name:"¿De qué riesgo NRBQ se trata?",groups:["Nuclear","Radiológico","Químico","Biológico"],items:[["Accidente en central nuclear",0],["Transporte de residuo radiactivo",1],["Inhalación de amoníaco",2],["Virus patógenos",3],["Fuente radioactiva sanitaria fuera de central",1],["Contacto con fluido infeccioso",3],["Corrosión por ácido",2]],why:"Diferencias expuestas en pp. 28–31."},
{name:"Aire y equipos respiratorios",groups:["Filtrante ambiental","Semiautónomo","ERA autónomo"],items:[["Máscara con filtro P3",0],["Aire por manguera externa",1],["Fuente portada por usuario",2],["Filtro A de vapores",0],["Compresor externo por manguera",1],["ERA de circuito cerrado",2]],why:"Protección respiratoria, pp. 22–27."},
{name:"Artículo legal que corresponde",groups:["Art. 3","Art. 6","Art. 7","Art. 8","Art. 10"],items:[["Suministrar gratuitamente EPI",0],["Comparar EPI del mercado",1],["Limpieza según fabricante",2],["Informar antes de usar",3],["Avisar de daño al superior",4],["Guardar el equipo tras su uso",4],["Revisar características por cambios técnicos",1],["Organizar entrenamiento necesario",3]],why:"RD 773/1997, pp. 35–38."}
];
const REVIEW_ORDER=[
{name:"Procedimiento de elección del EPI",steps:["Evaluar riesgos no eliminables","Definir características protectoras","Comparar equipos del mercado","Verificar condiciones del artículo 5","Revisar selección cuando cambien circunstancias"],why:"Artículo 6: evaluación, definición, comparación, verificación y posterior revisión."},
{name:"Radiaciones de menor a mayor energía",steps:["Radio","Microondas","Infrarrojos","Visible","Ultravioleta","Rayos X","Gamma"],why:"Secuencia del espectro descrita en el PDF, p. 29."},
{name:"Abrasión de guantes EN 388",steps:["Nivel 1 · 100 ciclos","Nivel 2 · 500 ciclos","Nivel 3 · 2.000 ciclos","Nivel 4 · 8.000 ciclos"],why:"Ciclos de abrasión de la tabla del manual, p. 20."},
{name:"Contacto térmico de guantes EN 407",steps:["Nivel 1 · 100 °C","Nivel 2 · 250 °C","Nivel 3 · 350 °C","Nivel 4 · 500 °C"],why:"Temperaturas de contacto durante 15 segundos, p. 21."},
{name:"Factores FPN de FFP del documento",steps:["FFP1 · 4,5","FFP2 · 12","FFP3 · 50"],why:"Valores indicados por esta edición del manual, p. 23; contrastar con bases de la convocatoria."}
];
const REVIEW_JUDGE=[
["El casco tipo B incluye la zona 1b.",true,"El B incluye dicha zona; el A la excluye (p. 17)."],
["El traje NRBQ nivel II también es estanco frente a gases.",false,"Nivel II protege frente a sólidos y líquidos, pero no gases (p. 32)."],
["El NRBQ nivel III tiene guantes integrados.",true,"Se citan guantes integrados, de algodón y de látex (p. 33)."],
["FPA equivale a F + perforación + antiestática.",true,"Marcado de botas del manual (p. 19)."],
["UNE-EN 469:2020 es la norma de guantes de bombero.",false,"Es del traje; los guantes se rigen por EN 659 (pp. 18 y 22)."],
["Un equipo semiautónomo siempre porta su propia botella.",false,"Suministro externo mediante manguera (p. 25)."],
["Los EPI obligatorios deben proporcionarse gratis.",true,"Artículo 3.c del RD 773/1997 (p. 35)."],
["El trabajador debe reparar personalmente cualquier EPI defectuoso.",false,"Debe notificar de inmediato el defecto al superior directo (art. 10.c, p. 38)."],
["El casco para −30 °C presenta tres estrellas.",true,"−20/−30/−40 °C corresponden a 2/3/4 estrellas (p. 16)."],
["El traje NRBQ blinda de toda radiación ionizante penetrante.",false,"Protege frente a contaminación, no es blindaje directo (p. 32)."],
["La absorción cutánea es una vía de entrada química.",true,"Una de las tres vías junto a inhalación e ingestión (p. 31)."],
["Pueden compartirse EPI sin tomar medidas higiénicas.",false,"El art. 7.3 exige que no haya problemas higiénicos ni sanitarios (p. 37)."],
["La categoría II es residual respecto a I y III.",true,"Incluye los riesgos no enumerados en las otras categorías (p. 8)."],
["El FPN de FFP2 que cita el PDF es 50.",false,"Para FFP2 indica 12; para FFP3, 50 (p. 23)."],
["La información de uso del EPI debe darse previamente.",true,"Lo exige el art. 8 (p. 37)."],
["La tabla de intervención general clasifica las gafas como III.",false,"Las señala como categoría I (p. 14)."]
];
const REVIEW_MATCH_EXTRA=[
{title:"Marcado de los cascos",pairs:[["14","Calor radiante de 14 kW/m²"],["7 kW/m²","Sin marcado térmico específico"],["E1","Aislamiento simple de cabeza"],["E2","Evitar corriente al interior"],["E3","Aislamiento de superficie"],["**","−20 °C"],["***","−30 °C"],["****","−40 °C"],["Tipo B","Incluye zona 1b"]]},
{title:"Guantes: normas y niveles",pairs:[["EN 388","Riesgo mecánico"],["EN 407","Riesgo térmico"],["EN 659","Guantes de bombero"],["EN ISO 21420","Tallas"],["Abrasión EN 659","Nivel 3"],["Corte EN 659","Nivel 2"],["Inflamabilidad EN 659","Nivel 4"],["Contacto EN 659","Nivel 2"]]},
{title:"Vías y efectos de químicos",pairs:[["Inhalación","Vía respiratoria"],["Absorción","Vía cutánea"],["Ingestión","Vía digestiva"],["Corrosivos","Daño de tejidos"],["Irritantes","Irritación local"],["Neumoconióticos","Alteración pulmonar crónica"],["Asfixiantes simples","Desplazan el oxígeno"],["Tóxicos sistémicos","Afectan órganos diana"]]}
];
for(const item of REVIEW_MATCH_EXTRA)if(!MATCH_SETS.some(s=>s.title===item.title))MATCH_SETS.push(item);