import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const menu = [
    {
        name: "Home"
    },
    {
        name: "Store"
    },
    {
        name: "Explore"
    },
]

const Header = () => {
    return (
        <section className='bg-gray-300 flex items-center justify-between px-3 md:px-10 py-5'>
            <h2 className='font-bold text-xl md:text-3xl cursor-pointer hover:scale-105 transition-all'>E-Store</h2>
            <ul className='flex items-center justify-center gap-5 cursor-pointer max-sm:hidden'>
                {menu.map((item, index) => (
                    <li key={index} className='font-bold text-xl hover:bg-gray-400 p-2 rounded-2xl'>
                        {item.name}
                    </li>
                ))}
            </ul>
            <div className='flex items-center gap-2 md:gap-5'>
                <ShoppingBag className='size-8' />
                <Link href={"/dashboard"}>
                <Button>
                    Click Here
                </Button>
                </Link>
                <UserButton
                    appearance={{
                        elements: {
                            userButtonAvatarBox: {
                                width: '40px', 
                                height: '40px', 
                            },
                        },
                    }}
                />
            </div>
        </section>
    )
}

export default Header
