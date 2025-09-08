import type { InputHTMLAttributes } from "react"

// interface IProps extends InputHTMLAttributes<HTMLInputElement> {

// }

type IProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...rest } : IProps) => {
  return (
    <input {...rest} className="p-3 shadow-md border text-gray-600 border-gray-300 rounded-lg
    focus:outline-0 text-lg caret-gray-500 focus:ring-3 focus:ring-indigo-500" />
  )
}
