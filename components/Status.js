/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'

export default function Status() {
  const [connected, setConnected] = useState(true)

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        
        className="fixed z-10 inset-0 flex px-4 py-6 pointer-events-none sm:p-6 items-end"
      >
        <div className=" flex flex-col space-y-4 sm:items-start">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          
          <span className="inline-flex items-center px-3 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-mad">
        <svg className="-ml-1 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        Connected
      </span>
        
        </div>
      </div>
    </>
  )
}
