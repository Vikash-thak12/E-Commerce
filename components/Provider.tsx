/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { ReactNode, useEffect } from 'react'

const Provider = ({ children }: {children: ReactNode}) => {
    const { user } = useUser()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        user && checkNewUser();
    },[user])

    const checkNewUser = async () => {
        const result = await axios.post('/api/user', {
            user: user
        })

        // console.log("Result", result.data)
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
