import './ProductCard.scss'
import { Image } from '../UiComponent/Image'
import { Button } from '../UiComponent/Button'
import { SpanColor } from '../UiComponent/SpanColor'
import type { IProduct } from '../../interfaces'
import { editPriceComaa, textSlice } from '../../Utils/function'
import { memo } from 'react'

interface IProps {
    product: IProduct
    setProductToEdit: (product: IProduct) => void
    openEditModal: () => void
    openConfirmModal: () => void
    idex: number
    setProductindex: (value : number) => void
}

const ProductCard = ({ product,setProductToEdit, openEditModal, openConfirmModal ,idex , setProductindex} : IProps) => {

    const {image, title, description, colors, price, category} = product
    const spanColor = colors.map((color) => <SpanColor key={color} color={color} />)

    const onEdit =() => {
        setProductToEdit(product)
        openEditModal()
        setProductindex(idex)
    }
    const onDelet =() => {
        setProductToEdit(product)
        openConfirmModal()
    }

    
return (<>
    <div className='max-w-sm md:max-w-lg mx-auto p-2 border border-gray-300 flex flex-col space-y-2 rounded-md dark:bg-gray-900'>
        <div className='w-full lg:w-[238px] h-52'>
            <Image src={image} alt={title} className='mb-4 h-full w-full rounded-md shadow' />
        </div>
        <h3 className='font-medium text-xl dark:text-sky-600'>{title.split(" ", 3).join(" ")}</h3>
        <p className='text-gray-600 font-light text-md dark:text-white'>{textSlice(description)}</p>
        <div className='flex items-center space-x-2 space-y-1'>
            {spanColor.length > 0 ? spanColor: <p className="text-gray-400">Not avilable colors</p>}
        </div>
        <div className='flex justify-between items-center my-3'>
            <span className='dark:text-sky-600 text-2xl font-medium text-indigo-600 '>${ editPriceComaa(price) }</span>
            <div className='flex items-center space-x-1'>
                <span className='dark:text-sky-600 text-sm'>{category.name}</span>
                <Image src={category.image} alt={category.name} className='w-10 h-10 border border-gray-300 rounded-full object-center' />
            </div>
        </div>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center'>
            <Button className='bg-indigo-500 text-white hover:bg-indigo-600' width='w-full' onClick={onEdit}>Edit</Button>
            <Button className='bg-rose-500 text-white hover:bg-rose-700' width="w-full" onClick={onDelet}>delete</Button>
        </div>
    </div>
</>)
}

export default memo(ProductCard)