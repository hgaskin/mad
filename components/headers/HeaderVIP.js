import React from 'react'

import { UserContext } from '../../context/UserContext'
import { useContext, useEffect, useState } from 'react'
import SlideOver from '../SlideOver'

function HeaderReservations () {
      const [openSlider, setOpenSlider] = useState(false)

      function openSliderHandler () {
        setOpenSlider(true)
      }

  return (
    <div className="mt-8 flex min-h-[40vh] w-screen items-center bg-mad">
      <div className="mx-auto max-w-5xl px-12 sm:px-12 lg:px-8">
        <p className="py-14 text-left font-serif text-xl text-white">
          Welcome to VIP. Here you can reserve a seat at a Mademoiselle venue, or book a Mademoiselle event. You can also check your reservations and cancel them.
        </p>

                <div className="mx-auto max-w-5xl px-12 sm:px-12 lg:px-8">
                <a
                  href="#"
                  onClick={openSliderHandler}
                  className={`mb-8 inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-mad hover:bg-green-900 hover:text-white sm:px-12`}
                >
                  Make Reservation
                </a>
              </div>
            
        <SlideOver openSlider={openSlider} setOpenSlider={setOpenSlider}/>
   
      </div>
    </div>
  )
}

export default HeaderReservations
