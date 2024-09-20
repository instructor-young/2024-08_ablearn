import { cva } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  intent?: "danger" | "warning" | "primary" | "secondary";
  outline?: boolean;
  rounded?: "normal" | "pill";
}

const buttonVariants = cva(
  "transition hover:brightness-90 active:brightness-75",
  {
    variants: {
      size: {
        sm: "text-xs px-1.5 py-0.5 font-medium",
        md: "text-[15px] px-2.5 py-1 font-semibold",
        lg: "",
      },
      intent: {
        danger: "bg-red-500",
        warning: "bg-yellow-500",
        primary: "bg-sky-500",
        secondary: "bg-gray-400",
      },
      outline: {
        true: "",
        false: "text-white",
      },
      rounded: {
        normal: "rounded-md",
        pill: "",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "md",
      intent: "primary",
      outline: false,
      rounded: "normal",
    },
  }
);

function Button({
  size,
  intent,
  outline,
  rounded,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={buttonVariants({ size, intent, outline, rounded })}>
      {children}
    </button>
  );
}

export default Button;
