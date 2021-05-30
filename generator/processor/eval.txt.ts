import { loadJson, writeType } from "../utils/utils";

import { createInterface } from "../utils/sourcegenerator";
import { commonInterfaceChildProcessor } from "./commonProcessor";

export const evalTxtProcess = async () => {
  let fn_d_ts_data = "";
  fn_d_ts_data += commonInterfaceChildProcessor(
    await loadJson("eval.txt", "vim-function* *functions.json")
  );
  fn_d_ts_data += commonInterfaceChildProcessor(
    await loadJson("testing.txt", "assert-functions-details.json")
  );
  fn_d_ts_data += commonInterfaceChildProcessor(
    await loadJson("testing.txt", "test-functions-details.json")
  );
  fn_d_ts_data += commonInterfaceChildProcessor(
    await loadJson("sign.txt", "sign-functions-details.json")
  );
  await writeType("fn.d.ts", createInterface("fn", fn_d_ts_data));
};
