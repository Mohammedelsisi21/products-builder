import type { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMsg: string
}


export const Input = ({ errorMsg ,...rest } : IProps) => {
  return (
    <input {...rest} className={`p-3 shadow-md border text-gray-600 rounded-lg
    focus:outline-0 text-lg caret-gray-500 focus:ring-3  ${errorMsg ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"}`} />
  )
}
