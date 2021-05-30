import { loadJson, writeType } from "../utils/utils";
import {
  createInterface,
  createInterfaceChild,
} from "../utils/sourcegenerator";
import { commonInterfaceChildProcessor } from "./commonProcessor";

export const lspTxtProcess = async (): Promise<void> => {
  let lsp_d_ts_data = "";
  lsp_d_ts_data += commonInterfaceChildProcessor(
    await loadJson("lsp.txt", "lsp-core.json")
  );
  lsp_d_ts_data += createInterfaceChild(
    "buf",
    commonInterfaceChildProcessor(await loadJson("lsp.txt", "lsp-buf.json"))
  );
  lsp_d_ts_data += createInterfaceChild(
    "diagnostic",
    commonInterfaceChildProcessor(
      await loadJson("lsp.txt", "lsp-diagnostic.json")
    )
  );
  lsp_d_ts_data += createInterfaceChild(
    "handlers",
    commonInterfaceChildProcessor(
      await loadJson("lsp.txt", "lsp-handlers.json")
    )
  );
  lsp_d_ts_data += createInterfaceChild(
    "log",
    commonInterfaceChildProcessor(await loadJson("lsp.txt", "lsp-log.json"))
  );
  lsp_d_ts_data += createInterfaceChild(
    "protocol",
    commonInterfaceChildProcessor(
      await loadJson("lsp.txt", "lsp-protocol.json")
    )
  );
  lsp_d_ts_data += createInterfaceChild(
    "rpc",
    commonInterfaceChildProcessor(await loadJson("lsp.txt", "lsp-rpc.json"))
  );
  lsp_d_ts_data += createInterfaceChild(
    "util",
    commonInterfaceChildProcessor(await loadJson("lsp.txt", "lsp-util.json"))
  );
  await writeType("lsp.d.ts", createInterface("lsp", lsp_d_ts_data));
};
