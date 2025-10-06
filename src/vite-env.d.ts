/// <reference types="vite/client" />

declare module '*&imagetools' {
  const src: string
  export default src
}

declare module '*.webp?w=*' {
  const srcset: string
  export default srcset
}
