import React, { FC, ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: FC<TButtonProps> = ({ children, className, onClick, disabled = false }) => {
  return (
    <button
      className={className}
      onClick={() => {
        typeof onClick !== "undefined" ? onClick() : undefined;
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
