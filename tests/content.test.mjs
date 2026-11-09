import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

async function evaluate(files, expression, globals = {}) {
  const context = vm.createContext(globals);
  for (const file of files) vm.runInContext(await readFile(file, "utf8"), context, { filename: file });
  return vm.runInContext(expression, context);
}

test("conserva todo el contenido académico publicado", async () => {
  assert.equal(await evaluate(["data.js"], "TOPICS.length"), 19);
  assert.equal(await evaluate(["data.js"], "CARDS.length"), 63);
  assert.equal(await evaluate(["questions.js"], "QUESTIONS.length"), 89);
  const review = await evaluate(["data.js", "review-data.js"], "({matches:MATCH_SETS.length,classify:REVIEW_CLASSIFY.length,order:REVIEW_ORDER.length,judge:REVIEW_JUDGE.length})");
  assert.deepEqual(JSON.parse(JSON.stringify(review)), { matches: 8, classify: 5, order: 5, judge: 16 });
});

test("la navegación y todos los recursos de las páginas son locales", async () => {
  const home = await readFile("index.html", "utf8");
  const catalog = await readFile("catalog.js", "utf8");
  const topic = await readFile("temas/11/index.html", "utf8");
  assert.match(catalog, /href:["']\.\/temas\/11\/index\.html["']/);
  assert.match(topic, /<base href=["']\.\.\/\.\.\/["']>/);
  assert.match(topic, /class=["']nav-link study-back-link["'][^>]*href=["']\.\/["']|href=["']\.\/["'][^>]*class=["']nav-link study-back-link["']/);
  assert.doesNotMatch(home + topic, /(?:src|href)=["']https?:\/\//i);
  for (const asset of ["data.js", "questions.js", "review-data.js", "progress.js", "mobile.js"]) {
    assert.match(topic + home, new RegExp(asset.replace(".", "\\.")));
  }
});

test("build:web empaqueta únicamente la aplicación estática", async () => {
  const root = (await readdir("www")).sort();
  assert.deepEqual(root, ["app.js", "catalog.css", "catalog.js", "data.js", "index.html", "mobile.js", "progress.js", "psicotecnicos", "questions.js", "resume.js", "review-data.js", "review.css", "review.js", "study-layouts.css", "study-layouts.js", "styles.css", "temas"]);
  assert.equal((await readFile("www/temas/11/index.html", "utf8")).includes('src="questions.js"'), true);
  assert.match(await readFile("www/psicotecnicos/index.html","utf8"), /app\.mjs/);
  assert.match(await readFile("www/psicotecnicos/temas/espacial/index.html","utf8"), /data-topic="espacial"/);
});

test("la base del Tema 11 resuelve sus estilos en Capacitor y GitHub Pages", async () => {
  const assets = ["styles.css", "study-layouts.css", "review.css"];
  for (const page of [
    "https://localhost/temas/11/",
    "https://anafb5.github.io/study-firefighting/temas/11/"
  ]) {
    const base = new URL("../../", page);
    for (const asset of assets) {
      const resolved = new URL(asset, base);
      assert.equal(resolved.pathname.endsWith(`/study-firefighting/${asset}`) || resolved.pathname === `/${asset}`, true);
    }
  }
});
