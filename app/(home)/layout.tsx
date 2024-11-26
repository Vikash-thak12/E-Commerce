import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "E-Commerce",
    description: "A Digital store where you can buy and sell your products seamlessly",
  };

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='mt-5 px-4 md:px-20 lg:px-32'>
      {children}
    </div>
  )
}

export default RootLayout
