import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import Script from 'next/script'
import ReservationFormApi from '../ReservationFormJotform'



function ReservationForm () {
    const {
        address
      } = useContext(UserContext)


  return (
   
   <div className='flex-col flex'>
      
      {/* <div>
        <label htmlFor="account-number" className="mt-2 block text-sm font-medium text-white">
            Account
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input
            disabled
            type="text"
            name="account-number"
            id="account-number"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
            placeholder={address}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
        </div>
        </div> */}

        <div className='mt-2 flex justify-center'>
        <ReservationFormApi />
        </div> 
    
   </div>
  )
}

export default ReservationForm
