import { generateJsonFromMpack } from "./json/mpack";
import { generateJsonFromEvalTxt } from "./json/vimdoc";

main();
async function main2() {
  await generateJsonFromEvalTxt("0.6.0-nightly");
}
async function main() {
  await generateJsonFromMpack("0.6.0-nightly", "api");
  await generateJsonFromMpack("0.6.0-nightly", "diagnostic");
  await generateJsonFromMpack("0.6.0-nightly", "lsp");
  await generateJsonFromMpack("0.6.0-nightly", "lua");
  await generateJsonFromMpack("0.6.0-nightly", "treesitter");
}
