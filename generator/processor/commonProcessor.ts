import { SectionDataType } from "../types";
import {
  createFunction,
  createInterfaceFunction,
  createInterfaceVariable,
  createVariable,
} from "../utils/sourcegenerator";
import * as reserved from "reserved-words";

const variableNameMatcher = /^([0-9a-zA-Z]|_)+$/;

const normalizeArg = (arg: string, option: boolean) => {
  const replacedArg = arg
    .replace(/\[|\]|{|}/g, "")
    .trim()
    .replace(/-|\s/g, "_");
  if (replacedArg !== "") {
    if (replacedArg.includes("...")) {
      return `arguments${option ? "?" : ""}: any[]`;
    } else {
      return `${
        //予約語か英字で始まらない
        reserved.check(replacedArg, "es6") ||
        /^(?![a-zA-Z]).*$/.test(replacedArg)
          ? "arg_" + replacedArg
          : replacedArg
      }${option ? "?" : ""}: any`;
    }
  }
  return null;
};
const normalizeCommentStr = (str: string) => {
  const nullChar = String.fromCodePoint(8205);

  return str.replace("/*", `/${nullChar}*`).replace("*/", `*${nullChar}/`);
};

const getArgs = (argsStr: string) => {
  let args: string[] = [];
  const tmp = argsStr.split("[");
  const requiredArgs = tmp[0];
  tmp.shift();
  const optionalArgs = tmp.join("");
  if (requiredArgs) {
    requiredArgs.split(",").forEach((value) => {
      const normalizedArg = normalizeArg(value, false);
      normalizedArg ? args.push(normalizedArg) : "";
    });
  }
  if (optionalArgs) {
    optionalArgs.split(",").forEach((value) => {
      const normalizedArg = normalizeArg(value, true);
      normalizedArg ? args.push(normalizedArg) : "";
    });
  }
  return args.join(",");
};

export const commonNamespaceChildProcessor = (data: SectionDataType) => {
  let text = "";
  data.data.forEach((propertyData) => {
    const propName = propertyData.name.split(".")[
      propertyData.name.split(".").length - 1
    ];
    if (variableNameMatcher.test(propName)) {
      if (propertyData.type === "func") {
        text +=
          `/** 
          ${normalizeCommentStr(propertyData.description)}}
      */` + "\n";
        text += createFunction(propName, getArgs(propertyData.argsStr), "any");
      } else {
        text +=
          `/** 
      ${propertyData.description}
      */` + "\n";
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
        text +=
          `/** 
      ${normalizeCommentStr(propertyData.description)}}
      */` + "\n";
        text += createInterfaceFunction(
          propName,
          getArgs(propertyData.argsStr),
          "any"
        );
      } else {
        text +=
          `/** 
      * ${propertyData.description}
      */` + "\n";
        text += createInterfaceVariable(propName, "any");
      }
    } else {
      console.log(`Property name match failed: ${propName}`);
    }
  });
  return text;
};
