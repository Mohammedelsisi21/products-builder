import type { ButtonHTMLAttributes } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className: string
}
export const SpanColor = ({ className, ...rest } : IProps) => {
  return (
    <span className={`${className} w-5 h-5 rounded-full cursor-pointer`} { ...rest } />
  )
}
