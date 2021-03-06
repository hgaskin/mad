import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import mademoiselle from '../assets/mademoiselle.png'
import HeaderReservations from '../components/headers/HeaderVIP'


import volDAO from '../assets/volDAO.png'
import { UserContext } from '../context/UserContext'
import { reservationsTable } from './api/utils/Airtable'

export default function Reservations({response, reservations}) {
  
  console.log(response)
  console.log('Reservations', reservations)
  // console.log('Names', reservations.map(reservation => reservation.Name))

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
    
    <main className="mb-12 flex w-full flex-1 flex-col items-center justify-center px-10 md:px-20 text-center">

     
    
      <h1 className=" my-4 font-serif text-4xl">VIP.</h1>

      <p className="text-md mt-1 font-serif">Presented by</p>

      <Image src={mademoiselle} layout="intrinsic" width={150} height={30} />

      <HeaderReservations appStatus={appStatus} />

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

export async function getServerSideProps(context) {
  try {
    const response = await reservationsTable.select({}).firstPage()
    const reservations = response.map(field => field.fields)
    return {
      props: {
        response: JSON.stringify(response),
        reservations
      }
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: "Error"
      }
    }
  }
}