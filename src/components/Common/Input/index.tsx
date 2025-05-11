import React, { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      data-testid="input"
      className="min-w-48 py-3 px-2.5 border-1 border-[#89919B] text-[#FFFFFF] placeholder:text-[#8A939D] rounded-lg block w-full text-xs"
    />
  );
});

Input.displayName = "Input";
export default Input;
