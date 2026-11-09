import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "www");
const files = [
  "index.html", "catalog.css", "catalog.js", "progress.js", "mobile.js",
  "styles.css", "data.js", "questions.js", "study-layouts.js",
  "study-layouts.css", "review-data.js", "review.js", "review.css",
  "app.js", "resume.js", "temas/11/index.html", "psicotecnicos/index.html",
  "psicotecnicos/app.mjs",
  "psicotecnicos/official-exams.mjs", "psicotecnicos/official-references.mjs", "psicotecnicos/official-ui.mjs", "psicotecnicos/official-bank.json",
  "psicotecnicos/generator.mjs", "psicotecnicos/advanced-visual.mjs", "psicotecnicos/visual-render.mjs",
  "psicotecnicos/topics.mjs",
  "psicotecnicos/styles.css",
  "psicotecnicos/temas/linguistico/index.html",
  "psicotecnicos/temas/numerico/index.html",
  "psicotecnicos/temas/grafico/index.html",
  "psicotecnicos/temas/espacial/index.html",
  "psicotecnicos/temas/mecanica/index.html",
  "psicotecnicos/temas/perceptiva/index.html",
  "psicotecnicos/temas/memoria/index.html",
  "psicotecnicos/temas/abstracto/index.html",
  "reader-layouts.js", "reader.css",
  ...["legal-app.js","legal-base.css","legal-resume.js","legal-review.js","legal-review.css","legal-builder.js","legal-visuals.js","legal-study.js","legal.css","portal.js","portal.css","catalogo-pdfs.json"].map(name=>"juridica/"+name),
  ...Array.from({length:26},(_,i)=>["juridica/"+(i+1)+"/data.js","juridica/"+(i+1)+"/index.html"]).flat()
];

await rm(output, { recursive: true, force: true });
for (const file of files) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await cp(resolve(root, file), destination);
}
console.log(`Web Android preparada: ${files.length} archivos en ${output}`);
