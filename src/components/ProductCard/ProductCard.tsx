import './ProductCard.scss'
import { Image } from '../UiComponent/Image'
import { Button } from '../UiComponent/Button'
import { SpanColor } from '../UiComponent/SpanColor'

import Shoes from './../../assets/shoes-6.jpg'
interface IProps {
    
}

const ProductCard = ({} : IProps) => {
    return (<>
    <div className='p-2 border border-gray-300 flex flex-col space-y-2 rounded-md'>
        <Image src={Shoes} alt='image name' className='mb-4 rounded-md shadow' />
        <h3 className='text-2xl'>Classic White Sneakers</h3>
        <p className='text-gray-500 font-light'>Stylish and comfortable white sneakers designed for everyday wear. Made with durable material and cushioned soles, perfect for casual outings, sports, or daily activities</p>
        <div className='flex items-center space-x-2'>
            <SpanColor className='w-5 h-5 rounded-full bg-indigo-500' />
            <SpanColor className='w-5 h-5 rounded-full bg-yellow-500' />
            <SpanColor className='w-5 h-5 rounded-full bg-red-500' />
        </div>
        <div className='flex justify-between items-center my-3'>
            <span>$59.99</span>
            <Image src={Shoes} alt="image cateogry" className='w-10 h-10 border border-gray-300 rounded-full object-center' />
        </div>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center'>
            <Button className='bg-indigo-600' width='w-full'>Edit</Button>
            <Button className='bg-red-600' width="w-full">remov</Button>
        </div>
    </div>
</>)
}

export default ProductCard