/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";


export async function POST (req: Request) {

    // Get form Data 
    const formData = await req.formData()

    
    const image = formData.get("image") as string
    const file = formData.get("file")
    const dataval = formData.get('data') as string
    // if(dataval !== 'string') {
    //     throw new Error("Invalid or missing 'data' field in form data ")
    // }
    const data = JSON.parse(dataval)
    console.log(image, file, data)


    // Save Product Image to the firebase
    // const imageName = Date.now()+".png";
    // const storageRef = ref(storage, "file/" + imageName)
    // await uploadBytes(storageRef, image).then(snapshot => {
    //     console.log("Image uploaded")
    // })
    // Save product file ito firebase 
    // save formdata along with url data

    return NextResponse.json({})
}