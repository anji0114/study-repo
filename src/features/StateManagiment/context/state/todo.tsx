import { FC, PropsWithChildren, createContext, useState } from "react";
import { Todo } from "../types/todo";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const TodoContext = createContext(TODOS);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState(TODOS);
  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
};
