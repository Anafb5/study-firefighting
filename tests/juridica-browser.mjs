import {spawn} from "node:child_process";
import assert from "node:assert/strict";
import {chromium} from "playwright";

const server=spawn("python3",["-m","http.server","8767","--bind","127.0.0.1"],{stdio:"ignore"});
let browser;
const base="http://127.0.0.1:8767";
async function ready(){for(let i=0;i<40;i++){try{const r=await fetch(base+"/");if(r.ok)return;}catch(_){}await new Promise(resolve=>setTimeout(resolve,250));}throw Error("Servidor local no disponible");}
try{
 await ready();browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const page=await browser.newPage({viewport:{width:1270,height:900}});
 const errors=[];page.on("pageerror",err=>errors.push(err.message));
 await page.goto(base+"/");
 await page.locator("#legal-topic-grid .legal-entry").first().waitFor();
 assert.equal(await page.locator("#legal-topic-grid .legal-entry").count(),26);
 assert.equal(await page.locator('#legal-topic-grid a[href*="/juridica/"]').count(),26);
 assert.ok(await page.locator('a[href="./psicotecnicos/"]').count()>=1);
 const counts={};
 for(let i=1;i<=26;i++){
  const response=await page.goto(base+"/juridica/"+i+"/");
  assert.equal(response.status(),200,"Página "+i+" no disponible");
  await page.locator("#home-topics .home-topic").first().waitFor();
  const count=await page.locator("#home-topics .home-topic").count();
  assert.ok(count>=2,"No carga bloques del tema "+i);
  assert.ok((await page.locator(".breadcrumbs").innerText()).includes("TEMA "+i));
  await page.locator('[data-view="temario"]').first().click();
  assert.ok(await page.locator("#topic-list .lesson").count()>=6,"Faltan epígrafes de lectura en tema "+i);
  await page.locator('[data-view="articulos"]').first().click();
  assert.ok(await page.locator("#legal-practice-area").innerText().then(x=>x.length>20));
  await page.locator('[data-view="test"]').first().click();
  assert.equal(await page.locator("#exam-start").count(),1);
  counts[i]=count;
 }
 await page.goto(base+"/juridica/26/");
 await page.locator('[data-view="test"]').first().click();
 await page.locator("#exam-start").click();
 assert.ok(await page.locator("#test-session").innerText().then(x=>x.length>40),"No arranca test en el tema 26");
 await page.setViewportSize({width:390,height:844});
 await page.goto(base+"/juridica/24/");
 assert.ok(await page.locator("#home-topics .home-topic").count()>=2);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+2),"Desbordamiento horizontal en móvil");
 assert.deepEqual(errors,[],"Errores JavaScript del navegador: "+errors.join("; "));
 console.log("OK: inicio y los 26 temas jurídicos, test, artículos y móvil, sin errores JS");
}finally{if(browser)await browser.close();server.kill();}
