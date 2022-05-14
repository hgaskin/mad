/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import blueCard from '../assets/blueCard.png'
import whiteCard from '../assets/whiteCard.png'

const cards = [
  {
    name: 'Blue Card',
    email: 'leslie.alexander@example.com',
    role: '10 Editions',
    price: '1 ETH',
    imageUrl: blueCard,
    openseaUrl: 'www.opensea.io',
  },
  {
    name: 'White Card',
    email: 'leslie.alexander@example.com',
    role: '40 Editions',
    price: '.4 ETH',
    imageUrl: whiteCard,
    openseaUrl: 'www.opensea.io',
  },
]

export default function NFTs() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.email}
          className="relative items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow-sm md:flex md:items-center"
        >
          <div className="flex-shrink">
            <Image
              layout="intrinsic"
              height={225}
              width={350}
              src={card.imageUrl}
              alt=""
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1">
            <div className="min-w-0 flex-1 overflow-hidden text-left ">
              <span className="absolute inset-0" />
              <p className="text-sm font-medium text-gray-900">{card.name}</p>
              <p className="truncate text-sm text-gray-500">{card.role}</p>
              <p className="truncate text-sm text-gray-500">{card.price}</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-md bg-mad shadow md:mt-1">
              <a href={card.openseaUrl} className="inline-flex rounded-md">
                <p className="p-2 text-xs text-white">Buy on OpenSea</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
