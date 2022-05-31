import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import mademoiselle from '../assets/mademoiselle.png'


import volDAO from '../assets/volDAO.png'
import { UserContext } from '../context/UserContext'
import ReservationFormApiCss from '../components/ReservationFormApiCss'
import ReservationFormApi from '../components/ReservationFormJotform'


export default function ReservationsTailwind() {
  
    const {
        appStatus,
        currentAccount,
        
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
    
    <main className="mb-12 flex w-full flex-1 flex-col items-center justify-center px-10 md:px-20 ">

      <h1 className=" my-4 font-serif text-4xl">Reservation Form.</h1>

      <p className="text-md mt-1 font-serif">Presented by</p>

      <Image src={mademoiselle} layout="intrinsic" width={150} height={30} />

    <ReservationFormApi />
       
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

