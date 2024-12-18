export const returnType = <T>(value: T): string => {
  return typeof value;
};

console.log(returnType("aaa"));

const double = <T>(func: (arg: T) => T): ((arg: T) => T) => {
  return (arg: T) => func(func(arg));
};

const plus2 = double((x: number) => x + 1);
console.log(plus2(2));
