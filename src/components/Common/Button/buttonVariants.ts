import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "text-white bg-[#0095E4]",
    },
    size: {
      default: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
