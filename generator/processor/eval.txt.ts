import { writeType } from "../utils/utils";

import { SectionDataType } from "../types";
import { createInterface } from "../utils/sourcegenerator";
import { commonInterfaceChildProcessor } from "./commonProcessor";

import evalBuiltinFn from "../../json/doc/eval.txt/4. Builtin Functions.json";

export const evalTxtProcess = async () => {
  let fn_d_ts_data = commonInterfaceChildProcessor(
    evalBuiltinFn as SectionDataType
  );
  await writeType("fn.d.ts", createInterface("fn", fn_d_ts_data));
};
