type EditDataType =
  | {
      name: string;
      action: "ignore";
    }
  | {
      name: string;
      argsStr: {
        name: string;
        type: string;
      }[];
      returnType: string;
    };

export type EditJsonType = {
  data: EditDataType[];
};
