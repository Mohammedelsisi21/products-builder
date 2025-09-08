import './ProductCard.scss'
import { Image } from '../UiComponent/Image'
import { Button } from '../UiComponent/Button'
import { SpanColor } from '../UiComponent/SpanColor'

import type { IProduct } from '../../interfaces'
import { textSlice } from '../../Utils/function'

interface IProps {
    product: IProduct
}

const ProductCard = ({ product } : IProps) => {

    const {image, title, description, colors, price, category} = product
    const spanColor = colors.map((color, index) => <SpanColor key={index} style={{background: color}} className={``} />)

return (<>
    <div className='max-w-sm md:max-w-lg mx-auto p-2 border border-gray-300 flex flex-col space-y-2 rounded-md'>
        <div className='w-full h-52'>
            <Image src={image} alt={title} className='mb-4 h-full rounded-md shadow' />
        </div>
        <h3 className='text-2xl font-semibold'>{title.split(" ", 2).join(" ")}</h3>
        <p className='text-gray-500 font-light text-md'>{textSlice(description)}</p>
        <div className='flex items-center space-x-2'>
            {spanColor}
        </div>
        <div className='flex justify-between items-center my-3'>
            <span>{ price }</span>
            <Image src={category.image} alt={category.name} className='w-10 h-10 border border-gray-300 rounded-full object-center' />
        </div>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center'>
            <Button className='bg-indigo-600 hover:bg-indigo-700' width='w-full'>Edit</Button>
            <Button className='bg-red-600 hover:bg-red-700' width="w-full">delete</Button>
        </div>
    </div>
</>)
}

export default ProductCard