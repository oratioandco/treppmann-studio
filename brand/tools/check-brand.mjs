// Fails if the brand files disagree. Run from the treppmann-studio root: node brand/tools/check-brand.mjs
import { readFileSync } from 'node:fs';
const read = (p) => readFileSync(new URL(`../../${p}`, import.meta.url), 'utf8');
const front = (md) => md.split(/^---$/m)[1];
const yamlColors = (md) => Object.fromEntries([...front(md).split(/^colors:$/m)[1].split(/^\w+:$/m)[0].matchAll(/^\s+([\w-]+):\s*"([^"]+)"/gm)].map((m) => [m[1], m[2].toLowerCase()]));
const cssVars = (css) => Object.fromEntries([...css.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map((m) => [m[1], m[2].toLowerCase()]));

const design = yamlColors(read('brand/DESIGN.md'));
const frame = yamlColors(read('brand/frame.md'));
const tokens = cssVars(read('brand/tokens.css'));
const site = cssVars(read('src/styles/global.css').split(':root')[1].split('}')[0]);
const json = JSON.parse(read('brand/brand.json')).colors;
const jsonMap = { ink: json.dark, paper: json.light, white: json.surface, signal: json.accent, muted: json.muted, check: json.check, ...Object.fromEntries([1, 2, 3, 4, 5].map((n) => [`ramp-${n}`, json[`ramp-${n}`]])) };

const errors = [];
for (const [k, v] of Object.entries(design)) {
  if (!v.startsWith('#')) continue;
  for (const [name, set] of [['frame.md', frame], ['tokens.css', tokens], ['brand.json', jsonMap]]) {
    if (set[k] && set[k].toLowerCase() !== v) errors.push(`${k}: DESIGN.md ${v} ≠ ${name} ${set[k]}`);
    if (!set[k] && name !== 'brand.json') errors.push(`${k}: missing in ${name}`);
  }
  if (site[k] && site[k] !== v) errors.push(`${k}: DESIGN.md ${v} ≠ site global.css ${site[k]}`);
}
if (errors.length) { console.error('Brand files disagree:\n' + errors.map((e) => '  - ' + e).join('\n')); process.exit(1); }
console.log(`Brand files agree (${Object.keys(design).length} colour tokens).`);
