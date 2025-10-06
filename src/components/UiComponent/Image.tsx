import { memo } from "react"

interface IProps {
    src: string,
    alt: string,
    className: string
}

export const Image = memo(({src, alt, className}: IProps) => {
  return (
    <img srcSet={src} alt={alt} className={className} sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px" loading="lazy"/>
  )
})