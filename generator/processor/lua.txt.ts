import { writeType } from "../utils/utils";

import { SectionDataType } from "../types";
import {
  createDeclareNamespace,
  createInterface,
} from "../utils/sourcegenerator";
import {
  commonInterfaceChildProcessor,
  commonNamespaceChildProcessor,
} from "./commonProcessor";

import luaVim from "../../json/doc/lua.txt/lua-vim.json";
import luaVimscript from "../../json/doc/lua.txt/lua-vimscript.json";
import luaUri from "../../json/doc/lua.txt/lua-uri.json";
import luaBuiltin from "../../json/doc/lua.txt/lua-builtin.json";
import luaHighlight from "../../json/doc/lua.txt/lua-highlight.json";

export const luaTxtProcess = async () => {
  let global_d_ts_data = "";
  global_d_ts_data += commonNamespaceChildProcessor(luaVim as SectionDataType);
  global_d_ts_data += commonNamespaceChildProcessor(
    luaVimscript as SectionDataType
  );
  global_d_ts_data += commonNamespaceChildProcessor(luaUri as SectionDataType);
  global_d_ts_data += commonNamespaceChildProcessor(
    luaBuiltin as SectionDataType
  );
  await writeType(
    "global.d.ts",
    createDeclareNamespace("vim", global_d_ts_data)
  );

  let highlight_d_ts_data = commonInterfaceChildProcessor(
    luaHighlight as SectionDataType
  );
  await writeType(
    "highlight.d.ts",
    createInterface("highlight", highlight_d_ts_data)
  );
};
