import { writeType } from "../utils/utils";

import { SectionDataType } from "../types";
import { createInterface } from "../utils/sourcegenerator";
import { commonInterfaceChildProcessor } from "./commonProcessor";

import apiGlobal from "../../json/doc/api.txt/api-global.json";

export const apiTxtProcess = async () => {
  let api_d_ts_data = commonInterfaceChildProcessor(
    apiGlobal as SectionDataType
  );
  await writeType("api.d.ts", createInterface("api", api_d_ts_data));
};
