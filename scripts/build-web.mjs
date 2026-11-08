import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "www");
const files = [
  "index.html", "catalog.css", "catalog.js", "progress.js", "mobile.js",
  "styles.css", "data.js", "questions.js", "study-layouts.js",
  "study-layouts.css", "review-data.js", "review.js", "review.css",
  "app.js", "resume.js", "temas/11/index.html", "psicotecnicos/index.html"
];

await rm(output, { recursive: true, force: true });
for (const file of files) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await cp(resolve(root, file), destination);
}
console.log(`Web Android preparada: ${files.length} archivos en ${output}`);
