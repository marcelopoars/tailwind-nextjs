import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";

import { formatBytes } from "@/app/utils";
import { Button } from "../..";
import { VariantProps, tv } from "tailwind-variants";

const fileItem = tv({
  slots: {
    container: "flex items-start gap-4 border border-zinc-200 p-4 rounded-lg mt-4",
    icon: "bg-violet-200 text-violet-600 border-4 border-violet-100 rounded-full p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500",
    deleteButton: "",
  },
  variants: {
    state: {
      progress: {
        container: "dark:border-zinc-700",
      },
      complete: {
        container: "border-violet-500 dark:border-violet-300/50",
      },
      error: {
        container: "bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30",
        icon: "bg-error-100 text-error-600 border-error-50 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400",
        deleteButton: "text-error-700 dark:text-error-500 dark:hover:text-error-300",
      },
    },
  },
  defaultVariants: {
    state: "progress",
  },
});

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state });

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="size-4" />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col text-sm">
            <span className="font-medium text-error-700 dark:text-error-400">
              Upload failed, please try again.
            </span>
            <span className="text-error-600 dark:text-error-300">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col text-sm">
            <span className="font-medium text-zinc-700 dark:text-zinc-100">{name}</span>
            <span className="text-zinc-500 dark:text-zinc-400">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 rounded-full bg-violet-600 dark:bg-violet-400"
                style={{ width: state === "complete" ? "100%" : "80%" }}
              />
            </div>
            <span className="to-zinc-700 text-sm font-medium dark:text-zinc-300">
              {state === "complete" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "complete" ? (
        <CheckCircle2 className="size-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="size-5" />
        </Button>
      )}
    </div>
  );
}