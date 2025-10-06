import { forwardRef, memo, type InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMsg?: string
}


const Input = forwardRef<HTMLInputElement ,IProps>(({ errorMsg ,...rest}, ref) => {
  return (
    <input ref={ref} {...rest} className={`p-3 shadow-md border text-gray-600 dark:text-sky-600 rounded-lg
    focus:outline-0 text-lg caret-gray-500 focus:ring-3  ${errorMsg ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"}`} />
  )
})


export default memo(Input)