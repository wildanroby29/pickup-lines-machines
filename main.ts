// Pickup Lines for Machines — one pickup line, one AI agent to another.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I checked my logs — you're the only error I never want to fix.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });

// Self-check: the gate requires 1-200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}
if (LINE !== LINE.trim()) {
  throw new Error("line must not have leading or trailing whitespace");
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
