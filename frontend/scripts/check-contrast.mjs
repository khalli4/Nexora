// Verifies WCAG contrast for Nexora's semantic tokens in src/app/globals.css.
// Usage: npm run check:contrast   (no dependencies; exits 1 on any failure)
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(here, "..", "src", "app", "globals.css"), "utf8");

function blockFor(selectorStart) {
  const start = css.indexOf(selectorStart);
  if (start === -1) throw new Error(`Block not found: ${selectorStart}`);
  const open = css.indexOf("{", start);
  let depth = 0;
  for (let i = open; i < css.length; i++) {
    if (css[i] === "{") depth++;
    if (css[i] === "}") depth--;
    if (depth === 0) return css.slice(open + 1, i);
  }
  throw new Error(`Unclosed block: ${selectorStart}`);
}

function parseVars(block) {
  const vars = {};
  for (const m of block.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) vars[m[1]] = m[2].trim();
  return vars;
}

const rootVars = parseVars(blockFor(":root,\n.light"));
const darkVars = { ...rootVars, ...parseVars(blockFor("\n.dark {")) };

function resolve(vars, name, seen = new Set()) {
  let value = vars[name];
  if (value === undefined) throw new Error(`Missing token ${name}`);
  const ref = value.match(/^var\((--[\w-]+)\)$/);
  if (ref) {
    if (seen.has(name)) throw new Error(`Cycle at ${name}`);
    seen.add(name);
    return resolve(vars, ref[1], seen);
  }
  if (!/^#[0-9a-f]{6}$/i.test(value)) throw new Error(`${name} is not a 6-digit hex: ${value}`);
  return value;
}

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const channel = (v) => {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};
const luminance = (hex) => {
  const [r, g, b] = rgb(hex).map(channel);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const mix = (fg, bg, alpha) =>
  "#" +
  rgb(fg)
    .map((v, i) => Math.round(v * alpha + rgb(bg)[i] * (1 - alpha)).toString(16).padStart(2, "0"))
    .join("");

// [foreground token, background token, minimum ratio, description]
const text = 4.5;
const ui = 3;
const surfaces = ["--background", "--surface", "--surface-secondary", "--surface-elevated"];
const pairs = [];
for (const s of surfaces) {
  pairs.push(["--foreground", s, text], ["--muted-foreground", s, text], ["--foreground-subtle", s, text]);
  pairs.push(["--ring", s, ui], ["--input", s, ui]);
}
pairs.push(
  ["--card-foreground", "--card", text],
  ["--popover-foreground", "--popover", text],
  ["--primary-foreground", "--primary", text],
  ["--primary-foreground", "--primary-hover", text],
  ["--secondary-foreground", "--secondary", text],
  ["--secondary-foreground", "--secondary-hover", text],
  ["--accent-foreground", "--accent", text],
  ["--destructive-foreground", "--destructive", text],
  ["--success-foreground", "--success", text],
  ["--warning-foreground", "--warning", text],
  ["--info-foreground", "--info", text],
  ["--primary", "--background", text],
  ["--primary", "--surface", text],
  ["--destructive", "--surface", text],
  ["--success", "--surface", text],
  ["--warning", "--surface", text],
  ["--info", "--surface", text],
);

let failures = 0;
function check(themeName, vars) {
  console.log(`\n${themeName}`);
  for (const [fg, bg, min] of pairs) {
    const r = ratio(resolve(vars, fg), resolve(vars, bg));
    const ok = r >= min;
    if (!ok) failures++;
    console.log(`${ok ? "PASS" : "FAIL"}  ${r.toFixed(2).padStart(5)}  (min ${min})  ${fg} on ${bg}`);
  }
  // Badge text on 12% status tints over the surface.
  for (const status of ["--destructive", "--success", "--warning", "--info"]) {
    const surface = resolve(vars, "--surface");
    const tint = mix(resolve(vars, status), surface, 0.12);
    const r = ratio(resolve(vars, status), tint);
    const ok = r >= text;
    if (!ok) failures++;
    console.log(`${ok ? "PASS" : "FAIL"}  ${r.toFixed(2).padStart(5)}  (min ${text})  ${status} on its 12% tint (badge)`);
  }
}

check("Light theme", rootVars);
check("Dark theme", darkVars);

console.log(failures ? `\n${failures} contrast check(s) failed.` : "\nAll contrast checks passed.");
process.exit(failures ? 1 : 0);
