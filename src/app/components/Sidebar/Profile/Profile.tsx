import { LogOut } from "lucide-react";
import { Button } from "../..";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/marcelopoars.png"
        alt="Foto de Marcelo Pereira"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate text-sm">
        <span className="font-semibold text-zinc-700 dark:text-zinc-100">
          Marcelo Pereira
        </span>
        <p
          title="marcelo.fatecpoa@gmail.com"
          className="truncate text-zinc-500 dark:text-zinc-400"
        >
          marcelo.fatecpoa@gmail.com
        </p>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="size-5" />
      </Button>
    </div>
  );
}
