import type { ButtonHTMLAttributes, ReactNode } from "react"


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className?: string,
  width: "w-full" | "w-fit"
}
export const Button = ({children, className, width, ...rest} : IProps) => {
  return (
    <button className={`${className} rounded-md p-2 capitalize transition-all duration-300 font-bold ${width}`} { ...rest }>{children}</button>
  )
}