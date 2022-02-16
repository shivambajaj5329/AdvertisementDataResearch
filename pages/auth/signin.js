import React from 'react'
import {getProviders, signIn as signIntoProvider} from "next-auth/react"
import Header from '../../components/Header';
import emory_image from "../../images/e.png"
import Image from 'next/image'


//Browser

export default function signIn({providers }) {
  return (
    <>
    <Header />

    <div className='flex flex-col items-center justify-items-center py-4 min-h-screen  px-14 text-center'>
    <Image src = {emory_image} width={700} height={100} />

        <p className='font-xs italic'>This Application is made to understand the advertisement trends of people across all walks of life</p>
    <div className='mt-40'>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => signIntoProvider(provider.id , {callbackUrl: "/"})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>


    </div>

    </>
  )
}
//SSR 
export async function getServerSideProps(){
    const providers = await getProviders();

    return{
        props : {
            providers
        }
    }
}
