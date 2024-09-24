import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, PropsWithChildren } from "react";

const buttonVariant = cva(
  "rounded-md hover:brightness-90 active:brightness-75 inline-block",
  {
    variants: {
      size: {
        md: "px-2.5 py-1.5 text-base font-semibold",
      },
      intent: {
        primary: "bg-black",
      },
      outline: {
        true: "bg-white border",
        false: "text-white",
      },
    },
    compoundVariants: [
      {
        outline: true,
        intent: "primary",
        className: "border-black text-black",
      },
    ],
    defaultVariants: {
      size: "md",
      intent: "primary",
      outline: false,
    },
  }
);

type ButtonProps = ButtonVariant & ComponentProps<"button">;
type ButtonVariant = VariantProps<typeof buttonVariant>;

function Button({
  size,
  intent,
  outline,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariant({ className, size, intent, outline })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
