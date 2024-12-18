import { FC } from "react";

type Entry = Person | Company;

interface Person {
  type: "person";
  age: number;
}

interface Company {
  type: "company";
  build: number;
}

const isPerson = (entry: Entry): entry is Person => {
  return entry.type === "person";
};

export const TYpeGuards: FC<{ entry: Entry }> = ({ entry }) => {
  if (isPerson(entry)) {
    return <p>{entry.age}</p>;
  }

  return <p>{entry.build}</p>;
};
