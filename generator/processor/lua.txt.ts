import { loadJson, writeType } from "../utils/utils";

import {
  createDeclareNamespace,
  createInterface,
} from "../utils/sourcegenerator";
import {
  commonInterfaceChildProcessor,
  commonNamespaceChildProcessor,
} from "./commonProcessor";

export const luaTxtProcess = async () => {
  let global_d_ts_data = "";
  global_d_ts_data += commonNamespaceChildProcessor(
    await loadJson("lua.txt", "lua-vim.json")
  );
  global_d_ts_data += commonNamespaceChildProcessor(
    await loadJson("lua.txt", "lua-vimscript.json")
  );
  global_d_ts_data += commonNamespaceChildProcessor(
    await loadJson("lua.txt", "lua-uri.json")
  );
  global_d_ts_data += commonNamespaceChildProcessor(
    await loadJson("lua.txt", "lua-builtin.json")
  );
  await writeType(
    "global.d.ts",
    createDeclareNamespace("vim", global_d_ts_data)
  );

  let highlight_d_ts_data = commonInterfaceChildProcessor(
    await loadJson("lua.txt", "lua-highlight.json")
  );
  await writeType(
    "highlight.d.ts",
    createInterface("highlight", highlight_d_ts_data)
  );
};
