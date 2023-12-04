import { ComponentProps } from 'react'

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input className="flex-1 text-zinc-900 placeholder-zinc-600" {...props} />
  )
}
