import { mkdirSync, writeFileSync } from "node:fs";

const title = "Professional Mourner for Dead Houseplants";

if (title.length < 1 || title.length > 60) {
  throw new Error(`title must be 1-60 characters, got ${title.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title);
