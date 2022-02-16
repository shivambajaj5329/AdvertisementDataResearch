import React from 'react'
import Image from 'next/image'
import emory_logo from "../images/f.png"
import HeaderItem from './HeaderItem'
import {LogoutIcon} from "@heroicons/react/outline"
import { useSession } from 'next-auth/react'
import {signIn, signOut} from "next-auth/react"



export default function Header() {  
    const {data: session} = useSession();
    console.log(session)

  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>

        {/* Progress bar */} 
        <Image src = {emory_logo} width={200} height={75} />


        
        <div className='flex flex-col justify-evenly '>

            { session ? (<><LogoutIcon onClick={signOut} className='w-12 cursor-pointer' /></>) : (<><button onClick={signIn}>Log Me In</button></>)}


        </div>

         

        {/* Log Out */}

    </header>
  )
}
