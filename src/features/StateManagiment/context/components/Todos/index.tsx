"use client";

import { useContext } from "react";
import { TodoContext } from "../../state/todo";

export const Todos = () => {
  const todos = useContext(TodoContext);
  return <div>{JSON.stringify(todos)}</div>;
};
