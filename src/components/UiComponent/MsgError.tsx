import { memo } from "react"

interface IProps {
    msg: string
}

export const MsgError = memo(({msg} : IProps) => {
  return msg ? <span className='block text-sm mt-1 text-red-500 font-semibold'>{msg}</span> : null
})
