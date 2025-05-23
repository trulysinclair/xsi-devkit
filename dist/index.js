// src/index.ts
import { readdir } from "fs/promises";
var files = await readdir("./");
for (const file of files) {
  console.log(file);
}
