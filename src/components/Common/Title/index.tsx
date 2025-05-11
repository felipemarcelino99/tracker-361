import React, { ElementType, HTMLAttributes } from "react";
import { titleVariants } from "./titleVariants";
import type { VariantProps } from "class-variance-authority";

export interface ITitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  label: string;
  tag?: ElementType;
}

export default function Title({
  label,
  variant,
  tag: Tag = "h1",
  ...props
}: ITitleProps) {
  const classes = titleVariants({ variant });

  return (
    <Tag className={classes} aria-label={label} {...props} data-testid="title">
      {label}
    </Tag>
  );
}
