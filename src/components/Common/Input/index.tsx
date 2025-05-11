import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="min-w-48 py-3 px-2.5 border-1 border-[#89919B] text-[#FFFFFF] placeholder:text-[#8A939D] rounded-lg block w-full text-xs"
    />
  );
}
