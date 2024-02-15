"use client";

import { ComponentProps } from "react";

import * as ScrollArea from "@radix-ui/react-scroll-area";

type MainProps = ComponentProps<"main">;

export function Main({ children }: MainProps) {
  return (
    <>
      <main className="hidden lg:block">
        <ScrollArea.Root type="always">
          <ScrollArea.Viewport className="lg:h-svh lg:overflow-y-scroll">
            <div className="px-4 pb-12 pt-24 lg:px-8 lg:pt-8">{children}</div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="vertical"
            className="h-full w-1 translate-y-1.5 bg-zinc-700  "
          >
            <ScrollArea.Thumb className="rounded-lg bg-violet-300" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </main>

      <main className="px-4 pb-12 pt-6 lg:hidden">{children}</main>
    </>
  );
}
