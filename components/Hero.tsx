import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-green-500'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 py-5 md:px-32 md:py-10'>
                <div className='flex flex-col items-start justify-center gap-5'>
                    <h1 className='font-bold text-3xl md:text-5xl'>SpeedUp Your Creative WorkFlow</h1>
                    <p className='font-semibold text-gray-600 md:text-xl'>Join a growing family of 43,436 designers, creator and makers from around
                        the world</p>
                    <div className='flex gap-5 w-full'>
                        <Button>Explore</Button>
                        <Button>Sell</Button>
                    </div>
                </div>
                <div>
                    <Image src={"/pc.png"} alt='Landing Image' width={500} height={60} />
                </div>
            </div>
        </div>
    )
}

export default Hero
