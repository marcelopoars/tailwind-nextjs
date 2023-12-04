import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="w-full flex gap-2 items-center border border-zinc-300 rounded-lg px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
