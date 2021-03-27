import { loadJson, writeType } from "../utils/utils";
import { createInterface } from "../utils/sourcegenerator";
import { commonInterfaceChildProcessor } from "./commonProcessor";

export const apiTxtProcess = async () => {
  let api_d_ts_data = commonInterfaceChildProcessor(
    await loadJson("api.txt", "api-global.json")
  );
  await writeType("api.d.ts", createInterface("api", api_d_ts_data));
};
