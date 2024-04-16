import { useState } from "react";

export const useVisible = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((current) => !current);
  const open = () => setValue(true);
  const close = () => setValue(false);

  return { value, open, close, toggle };
};
