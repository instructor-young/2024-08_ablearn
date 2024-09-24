import clsx from "clsx";
import { ComponentProps, useId } from "react";

type TextareaProps = {
  wrapperClassName?: string;
  textareaClassName?: string;
  label?: string;
  helpText?: string;
} & Omit<ComponentProps<"textarea">, "className">;

function Textarea({
  wrapperClassName: passedWrapperClassName,
  textareaClassName: passedTextareaClassName,
  label,
  helpText,
  ...props
}: TextareaProps) {
  const textareaId = useId();
  const wrapperClassName = clsx(
    "inline-block border border-gray-300 rounded-md px-4 py-2 focus-within:border-black transition w-full",
    passedWrapperClassName
  );
  const textareaClassName = clsx(
    "outline-none w-full resize-none",
    passedTextareaClassName
  );

  return (
    <div className="flex flex-col items-start self-stretch">
      {/* Label */}
      {label && (
        <label htmlFor={textareaId} className="mb-1">
          {label}
        </label>
      )}

      {/* Textarea */}
      <div className={wrapperClassName}>
        <textarea id={textareaId} className={textareaClassName} {...props} />
      </div>

      {/* Help Text */}
      {helpText && (
        <small className="mt-1 text-gray-400 text-xs">{helpText}</small>
      )}
    </div>
  );
}

export default Textarea;
