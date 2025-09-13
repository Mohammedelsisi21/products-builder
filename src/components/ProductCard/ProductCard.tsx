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
    const spanColor = colors.map((color) => <SpanColor key={color} color={color} />)

return (<>
    <div className='max-w-sm md:max-w-lg mx-auto p-2 border border-gray-300 flex flex-col space-y-2 rounded-md dark:bg-gray-900'>
        <div className='w-full h-52'>
            <Image src={image} alt={title} className='mb-4 h-full w-full rounded-md shadow' />
        </div>
        <h3 className='font-medium text-2xl dark:text-sky-600'>{title.split(" ", 2).join(" ")}</h3>
        <p className='text-gray-600 font-light text-md dark:text-white'>{textSlice(description)}</p>
        <div className='flex items-center space-x-2 space-y-1'>
            {spanColor}
        </div>
        <div className='flex justify-between items-center my-3'>
            <span className='dark:text-sky-600 text-2xl font-bold'>${ price }</span>
            <div className='flex items-center space-x-1'>
                <span className='dark:text-sky-600 text-sm'>{category.name}</span>
                <Image src={category.image} alt={category.name} className='w-10 h-10 border border-gray-300 rounded-full object-center' />
            </div>
        </div>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center'>
            <Button className='bg-indigo-600 hover:bg-indigo-700' width='w-full'>Edit</Button>
            <Button className='bg-red-600 hover:bg-red-700' width="w-full">delete</Button>
        </div>
    </div>
</>)
}

export default ProductCard