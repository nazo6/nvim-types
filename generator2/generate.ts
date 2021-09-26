import { promises as fs } from "fs";
import pkgdir from "pkg-dir";
import path from "path";
import { DataType } from "./types";

export async function generate(version: string, filename: string) {
  const fileContent: DataType = JSON.parse(
    await fs.readFile(path.join((await pkgdir())!, `json/${version}/${filename}.mpack`), { encoding: "utf8" })
  );

  let data: DataType = {};
  for (const key in rawData) {
    const datum = rawData[key];
    data[key] = {
      params: datum.parameters,
      params_doc: datum.parameters_doc,
      doc: datum.doc.join("\n"),
      return: datum.return[0],
      seealso: datum.seealso,
    };
  }

  await fs.writeFile(path.join((await pkgdir(), `json/${filename}.json`)), JSON.stringify(data, undefined, " "));

  return data;
}
