export type DataType = {
  [func: string]: {
    params: { [param: string]: { type: string; doc: string } };
    doc: string;
    return: string;
    seealso: string[];
  };
};
