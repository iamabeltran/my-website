// Falla el build si en.json y es.json no tienen exactamente las mismas claves
// (incluye índices de arreglos) o si alguna cadena está vacía donde en el otro no.
import { readFileSync } from 'node:fs';

const load = (f) => JSON.parse(readFileSync(new URL(`../src/i18n/${f}`, import.meta.url), 'utf8'));

function flatten(value, path = '', out = new Map()) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => flatten(v, `${path}[${i}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) flatten(v, path ? `${path}.${k}` : k, out);
  } else {
    out.set(path, value);
  }
  return out;
}

const es = flatten(load('es.json'));
const en = flatten(load('en.json'));
const problems = [];

for (const key of es.keys()) if (!en.has(key)) problems.push(`Falta en en.json: ${key}`);
for (const key of en.keys()) if (!es.has(key)) problems.push(`Falta en es.json: ${key}`);
for (const [key, val] of es) {
  if (en.has(key) && (val === '') !== (en.get(key) === '')) {
    problems.push(`Uno de los idiomas está vacío y el otro no: ${key}`);
  }
}
for (const [lang, map] of [['es', es], ['en', en]]) {
  for (const [key, val] of map) {
    if (typeof val === 'string' && /[\[\]]/.test(val) && !key.includes('[')) {
      problems.push(`Corchetes sospechosos (¿placeholder?) en ${lang}: ${key}`);
    }
  }
}

if (problems.length) {
  console.error('\n✖ Verificación i18n falló:\n' + problems.map((p) => '  - ' + p).join('\n') + '\n');
  process.exit(1);
}
console.log(`✔ i18n OK (${es.size} claves en es y en)`);
