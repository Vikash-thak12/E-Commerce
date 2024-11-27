/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import ImageUpload from '@/components/ImageUpload'

const AddProduct = () => {
    const category = ["Computer", "Laptop", "Mobiles", "Television", "Tables", "Raw", "Others"]

    const [formData, setFormData] = useState<{ [key: string]: any }>({})
    const handleInputChange = (fieldName: string, fieldValue: any) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const onAddProductBtnClick = () => {
        console.log("formData", formData)
    }

    return (
        <section>
            <h1 className='font-bold text-2xl'>Add Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {/* Left side */}
                <div className='flex flex-col gap-5'>
                    <ImageUpload onImageSelect={(e) => handleInputChange(e.target.name, e.target.files?.[0])} />
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Upload the file</label>
                        <Input
                            onChange={(e) => {
                                const files = e.target.files
                                if (files && files[0]) {
                                    handleInputChange('file', files[0]) // Correctly store the file
                                }
                            }}
                            type='file'
                            name='file'
                            placeholder='Upload your file'
                            className='focus-visible:ring-0 focus-visible:ring-offset-0'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Message to User when they buy</label>
                        <Textarea
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                            name='message'
                            placeholder='Message for your buyer'
                            className='focus-visible:ring-0 focus-visible:ring-offset-0'
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Title of the Product</label>
                        <Input
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                            name='title'
                            placeholder='Ex. Smartphone, Books, Laptops'
                            className='focus-visible:ring-0 focus-visible:ring-offset-0'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Price of the Product</label>
                        <Input
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                            type='number'
                            name='price'
                            placeholder='Rs. 5,000'
                            className='focus-visible:ring-0 focus-visible:ring-offset-0'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='font-bold'>Category</label>
                        <Select onValueChange={(value) => handleInputChange('category', value)}>
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
                        <Textarea
                            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                            name='description'
                            placeholder='Enter Details about your Product'
                            className='focus-visible:ring-0 focus-visible:ring-offset-0'
                        />
                    </div>
                    <Button onClick={onAddProductBtnClick}>Add</Button>
                </div>
            </div>
        </section>
    )
}

export default AddProduct
