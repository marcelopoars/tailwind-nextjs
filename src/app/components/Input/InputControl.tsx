import { ComponentProps } from "react";

type InputControlProps = ComponentProps<"input">;

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 text-zinc-900 placeholder-zinc-600 outline-none dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  );
}
