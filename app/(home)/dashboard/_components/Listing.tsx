import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Listing = () => {
    return (
        <div>
            <div className='flex items-center justify-between w-full'>
                <h1 className='font-bold text-2xl'>Listing</h1>
                <Link href={"/add-product"}>
                    <Button>+ Add new Product</Button>
                </Link>
            </div>
        </div>
    )
}

export default Listing
