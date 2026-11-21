// Entry for the make.fun news-image-20261120 bounty.
// The image is made in advance and shipped in this repository;
// this program only places a copy of it where the grader reads it.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
// The grader sets MAKEFUN_OUTPUT_DIR; /output is the fallback it uses.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);
