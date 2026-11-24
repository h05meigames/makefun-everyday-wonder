// Everyday Wonder, Two Days to Find the Line — make.fun bounty
// u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3
//
// The task: one sentence, at most 200 characters, on a small moment of
// wonder in everyday life. The judge weighs, most important first: does
// the sentence catch a small moment of wonder; does it turn the moment
// at an angle the reader has not met before, so the phrasing itself is
// the surprise; does the surprise land in a single read; is it grounded
// in something real and specific; and does every word work, with no
// filler and no worn phrase.
//
// The line (draft): "The escalator handrail slid ahead of my palm, and
// for three steps my hand was holding the future."
//
// A small, concrete, slightly uncanny moment everyone has felt but few
// have phrased: on an escalator the rubber handrail runs a little
// faster than the steps, so your palm is always being left behind by
// the very thing you are holding. The turn — holding the future —
// makes the ordinary commute strange in one read, and it is grounded
// in two specific details (the palm, three steps) rather than floating
// in abstraction.
//
// Node 22, standard library only. Writes the line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt) with no trailing newline, and
// prints exactly the same line to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The escalator handrail slid ahead of my palm, and for three steps my hand was holding the future.";

// Gate (mirrors the competition gate): the entry must be UTF-8 text of
// 1 to 200 characters, not only white space. Count code points, not
// UTF-16 units, so multi-byte characters are measured the way the gate
// counts.
if (
  [...line].length < 1 ||
  [...line].length > 200 ||
  line.trim().length === 0
) {
  throw new Error(
    `entry line must be 1-200 characters, got ${[...line].length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
process.stdout.write(line);
