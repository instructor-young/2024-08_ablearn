import { cva } from "class-variance-authority";
import React, { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {};

const buttonVariant = cva("", {
  variants: {
    size: {
      md: "px-4 py-2 rounded-lg font-semibold h-[46px]",
    },
    intent: {
      primary: "bg-black text-white",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    intent: "primary",
  },
});

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariant({ className })} {...props}>
      {children}
    </button>
  );
}

export default Button;
