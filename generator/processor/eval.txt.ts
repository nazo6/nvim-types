import { loadJson, writeType } from "../utils/utils";

import { createInterface } from "../utils/sourcegenerator";
import { commonInterfaceChildProcessor } from "./commonProcessor";

export const evalTxtProcess = async () => {
  let fn_d_ts_data = commonInterfaceChildProcessor(
    await loadJson("eval.txt", "4. Builtin Functions.json")
  );
  await writeType("fn.d.ts", createInterface("fn", fn_d_ts_data));
};
