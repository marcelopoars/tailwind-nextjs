import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/marcelopoars.png"
        alt="Foto de Marcelo Pereira"
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-col text-sm truncate">
        <span className="font-semibold text-zinc-700">Marcelo Pereira</span>
        <p
          title="marcelo.fatecpoa@gmail.com"
          className="text-zinc-500 truncate"
        >
          marcelo.fatecpoa@gmail.com
        </p>
      </div>
      <button
        type="button"
        className="ml-auto mb-auto p-2 rounded-md hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
