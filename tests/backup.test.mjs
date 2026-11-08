import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

function storage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    get length() { return values.size; },
    key(index) { return [...values.keys()][index] ?? null; },
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, value); },
    removeItem(key) { values.delete(key); }
  };
}

async function backupApi(localStorage = storage()) {
  const window = {};
  const context = vm.createContext({ window, localStorage, sessionStorage: storage(), document: { addEventListener() {} }, setTimeout, Blob, URL, confirm: () => true, location: { reload() {} } });
  vm.runInContext(await readFile("progress.js", "utf8"), context);
  return window.FireStudyBackup;
}

test("exporta el contrato JSON v1 compatible con la web", async () => {
  const api = await backupApi(storage({
    "study-firefighting-t11-v1": JSON.stringify({ read: ["1-1"], mastered: [2], wrong: ["q3"], history: [] }),
    "unrelated": "ignored"
  }));
  const data = api.buildBackup();
  assert.equal(data.format, "fire-study-backup");
  assert.equal(data.version, 1);
  assert.deepEqual(JSON.parse(JSON.stringify(data.topics["study-firefighting-t11-v1"])), { read: ["1-1"], mastered: [2], wrong: ["q3"], history: [] });
  assert.equal(data.topics.unrelated, undefined);
});

test("rechaza backups incompatibles y sanea sus campos", async () => {
  const api = await backupApi();
  assert.throws(() => api.validateBackup({ format: "otro", version: 1, topics: {} }), /compatible/);
  const safe = api.validateBackup({ format: "fire-study-backup", version: 1, topics: { "study-firefighting-t11-v1": { read: ["1-1", "mal"], mastered: [0, -1], wrong: ["q1", "x"], history: [] } } });
  assert.deepEqual(JSON.parse(JSON.stringify(safe[0][1])), { read: ["1-1"], mastered: [0], wrong: ["q1"], history: [] });
});
