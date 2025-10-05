import { memo } from "react"

interface IProps {
    src: string,
    alt: string,
    className: string
}

export const Image = memo(({src, alt, className}: IProps) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
})