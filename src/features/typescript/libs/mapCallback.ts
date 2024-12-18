const map = <T, P>(array: P[], callback: (value: P) => T): T[] => {
  const result: T[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
};

const data = [1, 2, 3, 4, 5];

const result: boolean[] = map(data, (x) => x >= 0);
