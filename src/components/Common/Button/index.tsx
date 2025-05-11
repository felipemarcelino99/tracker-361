import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./buttonVariants";
import type { VariantProps } from "class-variance-authority";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
}

export default function Button({ label, variant, ...props }: IButtonProps) {
  const classes = buttonVariants({ variant });

  return (
    <button {...props} className={classes}>
      {label}
    </button>
  );
}
