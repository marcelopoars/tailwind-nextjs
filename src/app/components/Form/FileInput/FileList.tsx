"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useFileInput } from "./Root";
import { FileItem } from "./FileItem";

export function FileList() {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="space-y-3">
      {files.map(({ name, size }) => (
        <FileItem key={name} name={name} size={size} state="complete" />
      ))}
    </div>
  );
}
