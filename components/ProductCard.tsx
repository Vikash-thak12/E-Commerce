import { ProductType } from '@/constants/type'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'


const ProductCard = ({ product: { name, price, image, user } }: { product: ProductType }) => {
    return (
        <div className='border p-5 rounded-xl cursor-pointer hover:scale-105 transition-all hover:shadow-md hover:shadow-slate-500 bg-gray-400'>
            <div className='flex items-center justify-center'>
                <Image src={image} alt={name} width={300} height={400} />
            </div>
            <div>
                <h1 className='font-bold text-3xl'>{name}</h1>
                <h1 className='text-xl font-semibold'>Rs. {price}</h1>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center gap-2'>
                    <Image src={user?.image} alt={user?.name} width={40} height={32} className='rounded-full' />
                    <span>{user?.name}</span>
                </div>
                <Button>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCard
