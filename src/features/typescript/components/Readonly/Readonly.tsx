import { FC } from "react";

type ReadonlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

interface Props {
  readonly title: string;
}

type ReadonlyComponentProps = ReadonlyProps<Props>;

export const Readonly: FC<ReadonlyComponentProps> = (props) => {
  // not props.title = "new title";
  return <div>{props.title}</div>;
};
