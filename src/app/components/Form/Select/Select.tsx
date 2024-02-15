"use client";

import { ReactNode } from "react";

import * as SelectRadix from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface SelectProps extends SelectRadix.SelectProps {
  placeholder: string;
  children: ReactNode;
}

export function Select({ placeholder, children, ...props }: SelectProps) {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger
        className={twMerge(
          'flex h-11 items-center justify-between gap-2',
          "rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600",
          "outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100",
          "dark:data-[placeholder]:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20",
        )}
      >
        <SelectRadix.Value
          className="text-black"
          placeholder={placeholder}
          aria-placeholder={placeholder}
        />
        <SelectRadix.Icon>
          <ChevronDown className="size-5 to-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className={twMerge(
            'z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden',
            'rounded-lg border border-zinc-300 bg-white shadow-sm',
            'dark:bg-zinc-800 dark:border-zinc-700'
          )}
        >
          <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
