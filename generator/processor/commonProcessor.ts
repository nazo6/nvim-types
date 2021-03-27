import { SectionDataType } from "../types";
import {
  createFunction,
  createInterfaceFunction,
  createInterfaceVariable,
  createVariable,
} from "../utils/sourcegenerator";

const variableNameMatcher = /^([0-9a-zA-Z]|_)+$/;

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
        ${propertyData.description}
      */` + "\n";
        text += createFunction(propName, "any", "any");
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
      * ${propertyData.description}
      */` + "\n";
        text += createInterfaceFunction(propName, "any", "any");
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
