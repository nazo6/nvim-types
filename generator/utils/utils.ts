import { promises as fs } from "fs";
import * as path from "path";
import { dirname } from "../../value";

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
