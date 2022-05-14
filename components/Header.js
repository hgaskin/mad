import React from 'react'

const Header = () => {
  return (
    <div className="mt-8 flex min-h-[40vh] w-screen items-center bg-mad">
      <div className="mx-auto max-w-5xl px-12 sm:px-12 lg:px-8">
        <p className="py-14 text-left font-serif text-xl text-white">
          ‍M. is a members-only community featuring VIP experiences curated by
          Mademoiselle and its founder, renowned entertainment entrepreneur
          Peter Girges, including premium seating at Mademoiselle venues,
          preferred access to events, and other exclusive ‍M. lifestyle perks.
        </p>
        <div className="mx-auto max-w-5xl px-12 sm:px-12 lg:px-8">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-mad hover:bg-mad hover:text-white"
          >
            Connect Wallet
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header