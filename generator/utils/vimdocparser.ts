import { default as trimNl } from "trim-newlines";
import { SectionDataType } from "../types";

export const vimdocParser = (text: string) => {
  const sectionSplitMatcher = /^(========================================================.*===)|(----------------------------------------.*---)$/;
  let sectionStrings: string[][] = [];
  let currentSectionStrings: string[] = [];
  text.split(/\r\n|\n/).forEach((value) => {
    if (sectionSplitMatcher.test(value)) {
      sectionStrings.push(currentSectionStrings);
      currentSectionStrings = [];
      return;
    }
    currentSectionStrings.push(value);
  });
  sectionStrings.push(currentSectionStrings);

  const headerMatcher = /(?<lefttitle>.+?)(\s|\t)+\*(?<righttitle>.+?)\*$/;
  const headerMatcherFunc: (str: string) => string[] | null = (str: string) => {
    const res = headerMatcher.exec(str);
    if (res) {
      if (res.groups) {
        if (res.groups["lefttitle"] && res.groups["righttitle"]) {
          return [res.groups["lefttitle"], res.groups["righttitle"]];
        }
      }
    }
    return null;
  };
  const data = sectionStrings.map((lines) => {
    let sectionData: SectionDataType = {
      leftTitle: "",
      rightTitle: "",
      description: "",
      data: [],
    };

    //Section info
    const sectionHeaderMatch = headerMatcherFunc(lines[0]);
    if (sectionHeaderMatch) {
      sectionData.rightTitle = sectionHeaderMatch[1] ?? "";
      sectionData.leftTitle = sectionHeaderMatch[0] ?? "";
    }
    //Section description
    let crrLine = 1;
    while (true) {
      if (!lines[crrLine]) {
        break;
      }
      if (headerMatcherFunc(lines[crrLine])) {
        crrLine--;
        break;
      }
      sectionData.description += lines[crrLine] + "\n";
      crrLine++;
    }
    sectionData.description = sectionData.description.trim();

    while (true) {
      if (lines[crrLine] === undefined) {
        break;
      }
      let propDescription = "";
      const match = headerMatcherFunc(lines[crrLine]);
      if (match) {
        let leftTitle = match[0];
        let rightTitle = match[1];
        if (leftTitle === " " || leftTitle === "\t") {
          //2行に分かれているとき
          crrLine++;
          //2行目に説明文があったとき用
          const lineSplitted = lines[crrLine].split("\t");
          leftTitle = lineSplitted[0];
          if (lineSplitted.length > 0) {
            lineSplitted.shift();
            propDescription += lineSplitted.join("") + "\n";
          }
        }
        const isFunctionMatcher = /.+?\((.*?)\)/;
        const propType =
          isFunctionMatcher.test(leftTitle) ||
          isFunctionMatcher.test(rightTitle)
            ? "func"
            : "value";
        crrLine++;
        while (true) {
          if (lines[crrLine] == undefined) {
            break;
          }
          if (headerMatcherFunc(lines[crrLine])) {
            crrLine--;
            break;
          }
          propDescription += lines[crrLine] + "\n";
          crrLine++;
        }
        propDescription = trimNl(propDescription);
        if (propType === "func") {
          const functionMatcher = /(?<funcName>.+?)\((?<arguments>.*?)\)/;
          const functionMatch = functionMatcher.exec(leftTitle);
          const argsStr = functionMatch?.groups?.arguments;
          const funcName = functionMatch?.groups?.funcName;
          sectionData.data.push({
            type: "func",
            name:
              funcName ??
              (rightTitle.endsWith("()")
                ? rightTitle.slice(0, -2)
                : rightTitle),
            description: propDescription,
            argsStr: argsStr ?? "",
            returnType: "any",
          });
        } else {
          sectionData.data.push({
            type: "value",
            name: rightTitle,
            description: propDescription,
            valuetype: "any",
          });
        }
      }
      crrLine++;
    }
    return sectionData;
  });
  return data;
};
