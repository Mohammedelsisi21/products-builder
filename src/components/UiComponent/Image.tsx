
interface IProps {
    src: string,
    alt: string,
    className: string
}

export const Image = ({src, alt, className}: IProps) => {
  // if (!src) return null; 

  return (
    <img src={src} alt={alt} className={className} />
  )
}
