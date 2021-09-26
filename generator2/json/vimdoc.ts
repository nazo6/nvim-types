import { promises as fs } from "fs";
import pkgdir from "pkg-dir";
import path from "path";
import trimNewLines from "trim-newlines";
import type { DataType } from "../types";

export async function generateJsonFromEvalTxt(version: string): DataType {
  const txt = await fs.readFile(path.join((await pkgdir())!, `data/${version}/eval.txt`), {
    encoding: "utf-8",
  });
  const sections = getSections(txt);
  const functions = sections.find((section) => section.header[1] === "vim-function* *functions")!.texts;
  const funcList = [...functions!.join("\n").matchAll(/(?<name>.+?\(.*?\))\n?\t+(?<type>[^(\t|\*)]+?)\t+(?<doc>.+(?:\n\t+.+)?)/gm)];
  return funcList.map((func) => {
    const name = func.groups!.name;
    const type = func.groups!.type;
    let doc = ""
    const funcDocRegExp = new RegExp(name + ".+?\\*", "");
    const docStart = functions.findIndex((t) => funcDocRegExp.test(t));
    while(true) {
      if ()
      doc += 
    }
  });
}

function getSections(text: string) {
  const sectionSplitMatcher = /(?:===.*===|---.*---)(?:\r\n|\n)/;
  return text.split(sectionSplitMatcher).map((t) => {
    const section = trimNewLines(t).split(/\n|\r\n/);
    const getHeader = (str: string) => {
      const res = /(?<lefttitle>.+?)(\s|\t)+\*(?<righttitle>.+?)\*$/.exec(str);
      let titleTuple: [left: string | undefined, right: string | undefined] = [undefined, undefined];
      if (res) {
        if (res.groups) {
          titleTuple = [res.groups["lefttitle"], res.groups["righttitle"]];
        }
      }
      return titleTuple;
    };
    const header = getHeader(section[0]);
    section.shift();
    return {
      header,
      texts: section,
    };
  });
}

function getFunctions(texts: string[]) {
  let processFlag = false;
  for (const text of texts) {
    if (text.includes("USAGE") && text.includes("RESULT") && text.includes("DESCRIPTION")) {
      processFlag = true;
    }
  }
}
