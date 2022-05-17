import Head from 'next/head'
import Image from 'next/image'
import mademoiselle from '../assets/mademoiselle.png'
import Header from '../components/headers/Header'
import Membership from '../components/Membership'
import NFTs from '../components/NFTs'

import User from '../components/User'
import volDAO from '../assets/volDAO.png'

import { UserContext } from '../context/UserContext'
import { useContext, useEffect, useState } from 'react'


export default function Home() {
  const {
    appStatus,
  } = useContext(UserContext)

  useEffect(() => {
    console.log(appStatus)
  
  }, [appStatus])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Mademoiselle - NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="mb-12 flex w-full flex-1 flex-col items-center justify-center px-10 md:px-20 text-center">
      
        <h1 className=" my-4 font-serif text-4xl">M.</h1>

        <p className="text-md mt-1 font-serif">Presented by</p>

        <Image src={mademoiselle} layout="intrinsic" width={150} height={30} />

        <Header reservation={false} appStatus={appStatus} />
        <Membership />
        <NFTs />
       
      </main>

     

      <footer className=" flex h-24 w-full items-center justify-center border-t bg-mad font-serif text-xs text-white">
        <a className="flex items-center justify-center gap-2">
          Built by{' '}
          <Image src={volDAO} alt="Vercel Logo" width={75} height={50} />
        </a>
      </footer>
    </div>
  )
}
