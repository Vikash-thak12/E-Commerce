import { Button } from '@/components/ui/button'
import React from 'react'

const Listing = () => {
  return (
    <div>
      <div className='flex items-center justify-between w-full'>
        <h1 className='font-bold text-2xl'>Listing</h1>
        <Button>+ Add new Product</Button>
      </div>
    </div>
  )
}

export default Listing
