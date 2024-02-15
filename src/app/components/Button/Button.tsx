import { ComponentProps } from "react";

import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: [
    "font-semibold px-4 py-2 rounded-lg shadow-sm outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80 transition",
  ],
  variants: {
    variant: {
      primary: "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600",
      outline: "text-zinc-500 border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800",
      ghost: "text-zinc-500 hover:bg-zinc-50 rounded-md px-2 shadow-none dark:text-zinc-400 dark:hover:bg-white/5",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />;
}
