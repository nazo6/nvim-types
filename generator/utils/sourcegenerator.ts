export const createDeclareNamespace = (name: string, content: string) => {
  return `/** @noSelf **/
  declare namespace ${name} {
    ${content}
  }`;
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
  }`;
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
