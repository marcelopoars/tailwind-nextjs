"use client";

import { UploadCloud } from "lucide-react";
import { ComponentProps } from "react";

import { useFileInput } from "./Root";

type TriggerProps = ComponentProps<"label">;

export function Trigger(props: TriggerProps) {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className="dar group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm transition hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
      {...props}
    >
      <div className=" flex items-center justify-center rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="size-5 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-300" />
      </div>
      <div>
        <span className="text-sm">
          <span className="font-bold text-violet-700 dark:text-violet-300">Click to upload</span> or
          drag and drop
        </span>
        <span className="block text-xs">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </span>
      </div>
    </label>
  );
}
