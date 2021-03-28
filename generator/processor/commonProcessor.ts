import { SectionDataType } from "../types";
import {
  createFunction,
  createInterfaceFunction,
  createInterfaceVariable,
  createJsdoc,
  createVariable,
} from "../utils/sourcegenerator";
import * as reserved from "reserved-words";

const variableNameMatcher = /^([0-9a-zA-Z]|_)+$/;

const normalizeArg = (arg: string): { name: string; type: string } | null => {
  const replacedArg = arg
    .replace(/\[|\]|{|}/g, "")
    .trim()
    .replace(/-|\s/g, "_");
  if (replacedArg !== "") {
    if (replacedArg.includes("...")) {
      return { name: `arguments`, type: "any[]" };
    } else {
      return {
        //予約語か英字で始まらない
        name:
          reserved.check(replacedArg, "es6") ||
          /^(?![a-zA-Z]).*$/.test(replacedArg)
            ? "arg_" + replacedArg
            : replacedArg,
        type: "any",
      };
    }
  }
  return null;
};
const normalizeCommentStr = (str: string) => {
  const nullChar = String.fromCodePoint(8205);

  return str.replace("/*", `/${nullChar}*`).replace("*/", `*${nullChar}/`);
};

const getArgs = (argsStr: string) => {
  let args: { name: string; type: string; optional: boolean }[] = [];
  const tmp = argsStr.split("[");
  const requiredArgs = tmp[0];
  tmp.shift();
  const optionalArgs = tmp.join("");
  if (requiredArgs) {
    requiredArgs.split(",").forEach((value) => {
      const normalizedArg = normalizeArg(value);
      normalizedArg ? args.push({ ...normalizedArg, optional: false }) : "";
    });
  }
  if (optionalArgs) {
    optionalArgs.split(",").forEach((value) => {
      const normalizedArg = normalizeArg(value);
      normalizedArg ? args.push({ ...normalizedArg, optional: true }) : "";
    });
  }
  let duplicateIndexes: number[] = [];
  let newArgs = [...args];
  //console.log(newArgs);
  args.forEach((item, i) => {
    newArgs.forEach((item2, i2) => {
      if (item.name === item2.name) {
        duplicateIndexes.push(i2);
      }
    });
    if (duplicateIndexes.length > 1) {
      duplicateIndexes.forEach((value, index) => {
        const newName = `${item.name}${index + 1}`;
        newArgs[value] = { ...item, name: newName };
      });
    }
    duplicateIndexes.splice(0);
  });
  return newArgs
    .map((value) => `${value.name}${value.optional ? "?" : ""}: ${value.type}`)
    .join(",");
};

export const commonNamespaceChildProcessor = (data: SectionDataType) => {
  let text = "";
  data.data.forEach((propertyData) => {
    const propName = propertyData.name.split(".")[
      propertyData.name.split(".").length - 1
    ];
    if (variableNameMatcher.test(propName)) {
      if (propertyData.type === "func") {
        text += createJsdoc(normalizeCommentStr(propertyData.description));
        text += createFunction(propName, getArgs(propertyData.argsStr), "any");
      } else {
        text += createJsdoc(propertyData.description);
        text += createVariable(propName, "any");
      }
    } else {
      console.log(`Property name match failed: ${propName}`);
    }
  });
  return text;
};

export const commonInterfaceChildProcessor = (data: SectionDataType) => {
  let text = "";
  data.data.forEach((propertyData) => {
    const propName = propertyData.name.split(".")[
      propertyData.name.split(".").length - 1
    ];
    if (variableNameMatcher.test(propName)) {
      if (propertyData.type === "func") {
        text += createJsdoc(normalizeCommentStr(propertyData.description));
        text += createInterfaceFunction(
          propName,
          getArgs(propertyData.argsStr),
          "any"
        );
      } else {
        text += createJsdoc(propertyData.description);
        text += createInterfaceVariable(propName, "any");
      }
    } else {
      console.log(`Property name match failed: ${propName}`);
    }
  });
  return text;
};
