import Head from 'next/head'
import Image from 'next/image'

import { useContext, useEffect, useState } from 'react'

export default function AirTable() {

    const Airtable = require('airtable');
    const base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}).base('appXYfplhme6NRJO8');

    const result = base('Times').find('rechCJD56T3iDtHd2', function(err, record) {
        if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
    });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>AirTable API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="mb-12 flex w-full flex-1 flex-col items-center justify-center px-10 md:px-20 text-center">
      
        <h1 className=" my-4 font-serif text-4xl">AirTable API.</h1>
        {result}
       
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
