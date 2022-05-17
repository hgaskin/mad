import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import mademoiselle from '../assets/mademoiselle.png'
import HeaderReservations from '../components/headers/HeaderVIP'
import Membership from '../components/Membership'
import NFTs from '../components/NFTs'
import Status from '../components/Status'
import User from '../components/User'
import volDAO from '../assets/volDAO.png'
import { UserContext } from '../context/UserContext'
import Calendar from '../components/Calendar'
import SlideOver from '../components/SlideOver'

const Reservations = () => {
    const {
        appStatus,
        currentAccount,
        accountBalance,
        accountBalanceMad,
        connectWallet,
        checkIfWalletIsConnected,
        checkIfMad,
        getMetamaskBalance,
        getNFTs,
      } = useContext(UserContext)
    
      useEffect(() => {
        console.log(appStatus)
        
      }, [appStatus])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Mademoiselle - Reservations</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    
    <main className="mb-12 flex w-full flex-1 flex-col items-center justify-center px-10 md:px-20 text-center">
    
      <h1 className=" my-4 font-serif text-4xl">VIP.</h1>

      <p className="text-md mt-1 font-serif">Presented by</p>

      <Image src={mademoiselle} layout="intrinsic" width={150} height={30} />

      <HeaderReservations appStatus={appStatus} />


      <div className="relative overflow-hidden bg-white pt-16">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-lg sm:px-6 lg:px-8">
          <h1>
            <span className="mt-2 block text-center font-serif text-xl font-bold leading-8 tracking-tight text-gray-900 ">
              My Reservations
            </span>
          </h1>
        </div>
      </div>
    </div>
    
      <Calendar currentAccount={currentAccount} />
  
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

export default Reservations