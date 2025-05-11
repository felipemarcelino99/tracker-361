import { cva } from "class-variance-authority";

export const titleVariants = cva("title", {
  variants: {
    variant: {
      default: "text-white font-medium text-left",
      semibold: "text-white font-semibold text-left",
    },
    size: {
      default: "text-lg",
      md: "text-base",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
