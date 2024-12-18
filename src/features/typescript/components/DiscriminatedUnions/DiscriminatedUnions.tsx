type TShape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "squire"; size: number };

const GetArea = (value: TShape) => {
  switch (value.kind) {
    case "circle": {
      return Math.PI * value.radius ** 2;
    }
    case "rectangle": {
      return value.width * value.height;
    }
    case "squire": {
      return value.size ** 2;
    }
    default: {
      return 0;
    }
  }
};

export const DiscriminatedUnions = () => {
  return <div></div>;
};
