"use client";

import { User } from "lucide-react";

import { useFileInput } from "./Root";
import Image from "next/image";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex items-center justify-center w-16 h-16 bg-violet-50 rounded-full dark:bg-violet-500/10">
        <User className="w-8 h-8 text-violet-500 dark:text-violet-300" />
      </div>
    );
  }

  return <img src={previewURL} alt="" className="w-16 h-16 rounded-full object-cover" />;
}
