import { luaTxtProcess } from "./processor/lua.txt";
import { readSource, writeOutput } from "./utils/utils";
import { vimdocParser } from "./utils/vimdocparser";
import * as util from "util";
import { exec as exec_cb } from "child_process";
import { dirname } from "../value";
import { apiTxtProcess } from "./processor/api.txt";
import { evalTxtProcess } from "./processor/eval.txt";
import { lspTxtProcess } from "./processor/lsp.txt";
const exec = util.promisify(exec_cb);

const generateJson = async (fileName: string, validSections: string[]) => {
  const data = vimdocParser(await readSource(fileName));
  data.forEach(async (section) => {
    console.log(section.rightTitle);
    if (validSections.includes(section.rightTitle)) {
      try {
        await writeOutput(
          `json/doc/${fileName}/`,
          `${section.rightTitle}.json`,
          JSON.stringify(section, null, " ")
        );
      } catch {
        await writeOutput(
          `json/doc/${fileName}/`,
          `${section.leftTitle}.json`,
          JSON.stringify(section, null, " ")
        );
      }
    }
  });
};

const generateJsons = async () => {
  await generateJson("lua.txt", [
    "lua-regex",
    "lua-builtin",
    "lua-vimscript",
    "lua-vim",
    "lua-uri",
    "lua-highlight",
  ]);
  await generateJson("eval.txt", [
    "internal-variables* *E461",
    "vim-function* *functions",
  ]);
  await generateJson("sign.txt", ["sign-functions-details"]);
  await generateJson("testing.txt", [
    "test-functions-details",
    "assert-functions-details",
  ]);
  await generateJson("api.txt", [
    "api-global-events",
    "api-buffer-updates",
    "api-global",
    "api-buffer",
    "api-window",
    "api-tabpage",
    "api-ui",
  ]);
  await generateJson("lsp.txt", [
    "lsp-core",
    "lsp-buf",
    "lsp-diagnostic",
    "lsp-handlers",
    "lsp-util",
    "lsp-log",
    "lsp-rpc",
    "lsp-protocol",
  ]);
};

const processes = async () => {
  await luaTxtProcess();
  await apiTxtProcess();
  await evalTxtProcess();
  await lspTxtProcess();
};

const formatFiles = async () => {
  const stdOut = await exec(
    dirname + "/node_modules/.bin/prettier --write types/**/*.ts"
  );
  return stdOut;
};

const main = async () => {
  await generateJsons();
  await processes();
  await formatFiles();
};

main();
