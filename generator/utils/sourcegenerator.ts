export const createDeclareNamespace = (name: string, content: string) => {
  return `/** @noSelf **/
  declare namespace ${name} {
    ${content}
  }\n\n`;
};
export const createConstant = (name: string, type: string) => {
  return `const ${name}: ${type};` + "\n";
};
export const createVariable = (name: string, type: string) => {
  return `let ${name}: ${type};` + "\n";
};
export const createFunction = (
  name: string,
  argsStr: string,
  returnType: string
) => {
  return `function ${name}(${argsStr}): ${returnType}` + "\n";
};

export const createInterface = (name: string, content: string) => {
  return `/** @noSelf **/
  interface ${name} {
    ${content}
  }\n\n`;
};
export const createInterfaceChild = (name: string, content: string) => {
  return `/** @noSelf **/
  ${name}: {
    ${content}
  }\n\n`;
};
export const createInterfaceVariable = (name: string, type: string) => {
  return `${name}: ${type},` + "\n";
};
export const createInterfaceFunction = (
  name: string,
  argsStr: string,
  returnType: string
) => {
  return `${name}: (${argsStr}) => ${returnType},` + "\n";
};

export const createJsdoc = (source: string) => {
  let text = "/**\n";
  const splittedSource = source.replace(/\t/g, "  ").split("\n");
  const defaultIndent = countStartWhiteSpace(splittedSource[0]);
  let isParameters = false;
  let isReturn = 0;
  splittedSource.forEach((value) => {
    const line = value.substr(defaultIndent);
    if (countStartWhiteSpace(line) === 0) {
      isParameters = false;
      isReturn = 0;
    }
    if (isParameters) {
      const trimmedValue = value.trim();
      const paramMatcher = /{(?<paramName>.+?)}\s*(?<description>.*?$)/;
      const paramName = paramMatcher.exec(trimmedValue)?.groups?.paramName;
      const description = paramMatcher.exec(trimmedValue)?.groups?.description;
      text += paramName
        ? `* @param ${paramName} - ${description ?? ""}\n`
        : `*   ${trimmedValue}\n`;
    } else if (isReturn) {
      text += `${isReturn === 1 ? " " : "*  "}${value.trim()}\n`;
      isReturn++;
    } else {
      if (line === "Parameters: ~") {
        isParameters = true;
      } else if (line === "Return: ~") {
        text += "* @returns ";
        isReturn = 1;
      } else {
        text += "* " + line + "\n";
      }
    }
  });
  text += "*/\n";
  return text;
};
const countStartWhiteSpace = (str: string) => {
  let count = 0;
  const chars = str.split("");
  while (true) {
    if (chars[count] == undefined) break;
    if (chars[count] === " ") count++;
    else break;
  }
  return count;
};
