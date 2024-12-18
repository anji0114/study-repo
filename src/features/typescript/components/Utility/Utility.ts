type A = Awaited<Promise<string>>;

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Omit<Todo, "description">>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  title: "throw out trash",
});

type TObjectKeys = "a" | "b" | "c";

type ObjectType = Record<TObjectKeys, string>;

const ObjectExample: ObjectType = {
  a: "aaas",
  b: "aaa",
  c: "accc",
};
