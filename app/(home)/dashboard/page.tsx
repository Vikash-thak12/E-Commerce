import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Listing from './_components/Listing'


const DashboardPage = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>Dashboard</h1>
            <Tabs defaultValue="listing" className="w-full mt-5">
                <TabsList>
                    <TabsTrigger value="listing">Listing</TabsTrigger>
                    <TabsTrigger value="purchase">Purchase</TabsTrigger>
                </TabsList>
                <TabsContent value="listing">
                    <Listing />
                </TabsContent>
                <TabsContent value="purchase">Change your password here.</TabsContent>
            </Tabs>

        </div>
    )
}

export default DashboardPage
