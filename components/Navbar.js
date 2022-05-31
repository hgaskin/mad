/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import mademoiselle from '../assets/mademoiselle.png'
import volDAO from '../assets/volDAO.png'
import Image from 'next/image'

import { UserContext } from '../context/UserContext'
import { useContext, useEffect, useState } from 'react'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'VIP', href: '/vip', current: false },
  { name: 'Reservation Form', href: '/reservations', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { address, disconnect, connectWithMetamask } = useContext(UserContext)

  return (
    <Disclosure as="nav" className="bg-mad">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className="block h-8 w-auto text-white lg:hidden">
                    LOGO?
                  </div>
                  <div className="hidden h-8 w-auto text-white lg:block">
                    LOGO?
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <svg
                  className={`ml-4 h-2 w-2 ${
                    address ? 'text-green-400' : 'text-red-400'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx={4} cy={4} r={3} />
                </svg>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>

                      <a
                        type="button"
                        className="w-30 truncate rounded-full bg-gray-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:w-40 xl:w-60"
                      >
                        <span className="sr-only">View notifications</span>
                        {address ? address : <p>Not Connected</p>}
                      </a>
                      {/* <div className='text-green-500'>
                        {appStatus === 'noMetaMask' ? 'No MetaMask Plugin Detected' : ''}
                        </div> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/profile"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/vip"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            VIP
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) =>
                          address ? (
                            <button
                              onClick={disconnect}
                              className={classNames(
                                active ? 'bg-red-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Disconnect
                            </button>
                          ) : (
                            <button
                              onClick={connectWithMetamask}
                              className={classNames(
                                active ? 'bg-green-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Connect
                            </button>
                          )
                        }
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
