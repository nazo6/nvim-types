import { promises as fs } from "fs";
import * as path from "path";
import { EditJsonType } from "../../json/types/edit";
import { dirname } from "../../value";
import { SectionDataType } from "../types";

export const readSource = async (fileName: string) => {
  return await fs.readFile(`${dirname}/sources/${fileName}`, {
    encoding: "utf-8",
  });
};
export const writeOutput = async (
  filePath: string,
  fileName: string,
  data: string
) => {
  await fs.writeFile(path.join(dirname, filePath, fileName), data);
};
export const writeType = async (fileName: string, data: string) => {
  await fs.writeFile(path.join(dirname, "types", fileName), data);
};

export const loadJson = async (
  filePath: "api.txt" | "eval.txt" | "lua.txt",
  fileName: string
) => {
  let editJson: EditJsonType;
  let docJson = JSON.parse(
    await fs.readFile(`${dirname}/json/doc/${filePath}/${fileName}`, {
      encoding: "utf-8",
    })
  ) as SectionDataType;
  try {
    editJson = JSON.parse(
      await fs.readFile(`${dirname}/json/edit/${filePath}/${fileName}`, {
        encoding: "utf-8",
      })
    );
  } catch {
    return docJson;
  }
  editJson.data.forEach((value) => {
    if ("action" in value) {
      switch (value.action) {
        case "ignore":
          const index = docJson.data.findIndex(
            (propertyData) => propertyData.name === value.name
          );
          if (index !== -1) {
            docJson.data.splice(index, 1);
          }
          break;
        default:
          break;
      }
    }
  });
  return docJson;
};
