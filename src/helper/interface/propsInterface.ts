export interface propsInterface {
  text: {
    [key: string]: string;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      key: string;
      data: never[];
    }>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Node {
  node: {
    name: string;
  };
}
