import { Input } from '@/components/ui/input'
import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'


const AddProduct = () => {

    const category = ["Computer", "Laptop", "Mobiles", "Television", "Tables", "Raw", "Others"]


    return (
        <section>
            <h1 className='font-bold text-2xl'>Add Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {/* Left side */}
                <div>

                </div>

                {/* Right Side */}
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Title of the Product</label>
                        <Input name='title' placeholder='Ex. Smartphone, Books, Laptops' className='focus-visible:ring-0 focus-visible:ring-offset-0' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Price of the Product</label>
                        <Input type='number' name='price' placeholder='Rs. 5,000' className='focus-visible:ring-0 focus-visible:ring-offset-0' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Category</label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {category.map((category, index) => (
                                    <SelectItem key={index} value={category}>{category}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Description</label>
                        <Textarea name='description' placeholder='Enter Details about your Product' className='focus-visible:ring-0 focus-visible:ring-offset-0' />
                    </div>
                    <Button>Add</Button>
                </div>
            </div>
        </section>
    )
}

export default AddProduct
