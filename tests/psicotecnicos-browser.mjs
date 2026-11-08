import assert from "node:assert/strict";
import {spawn} from "node:child_process";
import {chromium} from "playwright";
const server=spawn("python3",["-m","http.server","8765","--bind","127.0.0.1"],{stdio:"ignore"});
let browser;
const base="http://127.0.0.1:8765";
async function ready(){for(let i=0;i<40;i++){try{const r=await fetch(base+"/psicotecnicos/");if(r.ok)return;}catch(_){await new Promise(r=>setTimeout(r,250));}}throw Error("El servidor estático no se inició");}
try{
 await ready();
 browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 const errors=[];page.on("pageerror",e=>errors.push(e.message));
 await page.goto(base+"/psicotecnicos/");
 await page.locator(".topic-card").first().waitFor();
 assert.equal(await page.locator(".topic-card").count(),8);
 for(const slug of ["linguistico","numerico","grafico","espacial","mecanica","perceptiva","memoria","abstracto"]){
  const response=await page.goto(base+"/psicotecnicos/temas/"+slug+"/");
  assert.equal(response.status(),200);
  assert.equal(await page.locator(".lesson").count()>=3,true,"Apartados de "+slug);
  assert.equal(await page.locator('[role="tab"]').count(),3,"Pestañas de "+slug);
 }
 await page.goto(base+"/psicotecnicos/temas/espacial/");
 await page.locator('[data-tab="entrenamiento"]').click();
 await page.locator("#variant").selectOption("cubeOpposite");
 await page.locator("#length").selectOption("5");
 await page.locator('[data-action="start-session"]').click();
 assert.equal(await page.locator('[data-action="open-demo"]').count(),0,"No se ofrece demo antes de contestar");
 await page.locator('[data-answer="0"]').click();
 assert.equal(await page.locator('[data-action="open-demo"]').count(),1);
 await page.locator('[data-action="open-demo"]').click();
 assert.equal(await page.locator("#demonstration").count(),1);
 assert.equal(await page.locator('[data-action="open-demo"]').count(),0,"No deja el botón de abrir repetidamente");
 await page.locator('[data-action="fold"]').click();
 assert.equal(await page.locator("#fold-cube.folded").count(),1);
 await page.locator('[data-action="close-demo"]').click();
 assert.equal(await page.locator("#demonstration").count(),0);
 await page.locator('[data-tab="examen"]').click();
 await page.locator("#variant").selectOption("cubeAdjacent");
 await page.locator("#length").selectOption("5");
 await page.locator('[data-action="start-session"]').click();
 for(let i=0;i<5;i++){
  assert.equal(await page.locator("#demonstration").count(),0,"Sin demostración durante el examen");
  assert.equal(await page.locator('[data-action="open-demo"]').count(),0);
  await page.locator('[data-answer="0"]').click();
 }
 assert.equal(await page.getByText("Resultado del examen").count(),1);
 assert.equal(await page.locator("#demonstration").count(),0);
 await page.goto(base+"/psicotecnicos/temas/memoria/");
 await page.locator('[data-tab="entrenamiento"]').click();
 await page.locator("#variant").selectOption("memoryCategory");
 await page.locator("#length").selectOption("5");
 await page.locator('[data-action="start-session"]').click();
 assert.equal(await page.locator(".chips .chip").count()>0,true);
 assert.equal(await page.locator('[data-answer]').count(),0,"Respuestas ocultas durante la fase de memorización");
 await page.locator('[data-action="hide-memory"]').click();
 assert.equal(await page.locator(".memory-blank").count(),1);
 assert.equal(await page.locator('[data-answer]').count(),4);
 await page.locator('[data-answer="0"]').click();
 assert.equal(await page.locator(".feedback").count(),1);
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+"/psicotecnicos/temas/espacial/");
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),true,"Diseño móvil sin desbordamiento horizontal");
 assert.deepEqual(errors,[],"Ningún error de JS en navegador");
 console.log("OK: 8 temas, navegador desktop/móvil, entrenamiento, plegado, examen sin demostrador, memoria.");
}finally{if(browser)await browser.close();server.kill();}
