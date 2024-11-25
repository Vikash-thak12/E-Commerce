'use client'
import React, { useEffect, useState } from 'react'
import { dummyData } from '@/constants/dumyData'
import ProductCard from './ProductCard'
import { ProductType } from '@/constants/type'
import { Button } from './ui/button'

const ProductList = () => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        setProducts(dummyData)
    }, [])
    return (
        <div className='px-4 md:px-32 my-5'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-xl'>Feature</h1>
                <Button>View All</Button>
            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
