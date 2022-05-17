import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import Script from 'next/script'



function ReservationForm () {
    const {
        appStatus,
        connectWallet,
        currentAccount
      } = useContext(UserContext)

  return (
   
   <div className='flex-col flex'>
      
{/* Name */}
      {/* <div>
        <label htmlFor="email" className="mt-2 block text-sm font-medium text-white">
                Name
        </label>
        <div className="mt-1">
            <input
            type="text"
            name="name"
            id="name"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Kid Cudi"
            />
        </div>
        </div>
        
{/* Phone */}
        {/* <div>
            <label htmlFor="phone-number" className="mt-2 block text-sm font-medium text-white">
                Phone Number
            </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
                Country
            </label>
            <select
                id="country"
                name="country"
                autoComplete="country"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
                <option>CA</option>
                <option>US</option>
                
            </select>
            </div>
            <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
            placeholder="+1 (416) 123-4567"
            />
        </div>
        </div> */}

{/* Email */}
        {/* <div>
            <label htmlFor="email" className="mt-2 block text-sm font-medium text-white">
                Email
            </label>
        <div className="mt-1">
            <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
            />
        </div>
        </div> */}

{/* Account */}
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
            placeholder={currentAccount}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
        </div>
        </div> */}

<div className='mt-2 flex justify-center'>
<iframe src="https://www.opentable.com/widget/reservation/canvas?rid=412810&amp;type=standard&amp;theme=tall&amp;overlay=false&amp;domain=com&amp;lang=en-US&amp;r3uid=UhsLh1DZI&amp;newtab=false&amp;disablega=false&amp;ot_source=Restaurant%20website&amp;color=1" width="288" height="490" frameborder="0" scrolling="no" name="opentable-make-reservation-widget" title="Online Reservations | OpenTable, La Casa Di Lucia - Philadelphia"></iframe>
</div> 

       <div>
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
            placeholder={currentAccount}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
        </div>
        </div>

       

   </div>
  )
}

export default ReservationForm
