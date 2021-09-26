import { promises as fs } from "fs";
import pkgdir from "pkg-dir";
import path from "path";
import msgpack from "@msgpack/msgpack";

import type { DataType } from "../types";

type NvimMpackType = {
  [func: string]: {
    annotations: any[];
    signature: string;
    parameters: [type: string, param: string][];
    parameters_doc: { [param: string]: string };
    doc: string[];
    return: string[];
    seealso: string[];
  };
};

export async function generateJsonFromMpack(version: string, filename: string) {
  const fileContent = await fs.readFile(path.join((await pkgdir())!, `data/${version}/${filename}.mpack`));
  const rawData = msgpack.decode(fileContent) as any as NvimMpackType;

  let data: DataType = {};
  for (const key in rawData) {
    const datum = rawData[key];
    const params = datum.parameters.reduce((acc, crr, idx) => {
      acc[crr[1]] = {
        type: crr[0],
        doc: datum.parameters_doc[crr[1]],
      };
    }, {} as any);
    data[key] = {
      params,
      doc: datum.doc.join("\n"),
      return: datum.return[0],
      seealso: datum.seealso,
    };
  }

  await fs.writeFile(path.join((await pkgdir(), `json/${version}.json`)), JSON.stringify(data, undefined, " "));

  return data;
}
