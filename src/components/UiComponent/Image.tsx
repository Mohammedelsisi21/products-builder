
interface IProps {
    src: string,
    alt: string,
    className: string
}

export const Image = ({src, alt, className}: IProps) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
}
