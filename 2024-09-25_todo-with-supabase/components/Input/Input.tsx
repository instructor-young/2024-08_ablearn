"use client";

import { cx } from "class-variance-authority";
import React, { ComponentProps, useId } from "react";

type InputProps = Omit<ComponentProps<"input">, "className"> & {
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputWrapperClassName?: string;
  inputClassName?: string;
};

function Input({
  label,
  wrapperClassName,
  labelClassName,
  inputWrapperClassName,
  inputClassName,
  ...props
}: InputProps) {
  const inputId = useId();

  return (
    <div className={cx(wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cx(
            "mb-0.5 text-[15px] font-semibold text-gray-700 inline-block",
            labelClassName
          )}
        >
          {label}
        </label>
      )}

      <div
        className={cx(
          "border border-gray-300 focus-within:border-black transition flex flex-col rounded-lg py-2.5 px-4",
          inputWrapperClassName
        )}
      >
        <input
          id={inputId}
          className={cx("outline-none w-full rounded-lg", inputClassName)}
          {...props}
        />
      </div>
    </div>
  );
}

export default Input;
