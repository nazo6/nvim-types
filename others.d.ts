interface NoColonType {
  [key: string]: (args?: any) => any;
}
declare function require(this: void, modname: string): NoColonType;
