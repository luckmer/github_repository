export interface ErrorInterface {
  status: boolean;
  response: string;
}

export interface TextInterface {
  [x: string]: string;
}

export interface CheckInterface {
  value: string;
}

export interface Props {
  move: boolean;
}

export interface FooterProps {
  status?: boolean;
}
