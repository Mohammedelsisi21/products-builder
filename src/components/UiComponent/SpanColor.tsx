import type { HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<HTMLSpanElement>{
    color: string
}
export const SpanColor = ({ color, ...rest } : IProps) => {
  return (
    <span className={`w-5 h-5 rounded-full shadow border border-gray-300 cursor-pointer focus:border focus:border-gray-300 focus:p-1`} { ...rest } style={{background: color}}/>
  )
}
