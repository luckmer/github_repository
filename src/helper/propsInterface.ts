export interface propsInterface {
  text: string;
  setData: React.Dispatch<
    React.SetStateAction<{ title: string; data: { [key: string]: string }[] }>
  >;
}

export interface Node {
  node: {
    name: string;
  };
}
