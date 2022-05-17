/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import blueCard from '../assets/blueCard.png'
import whiteCard from '../assets/whiteCard.png'

const cards = [
  {
    name: 'Blue Card',
    email: 'lucas@example.com',
    role: '10 Editions',
    price: '1 ETH',
    imageUrl: blueCard,
    openseaUrl: 'https://testnets.opensea.io/assets/mumbai/0xb79ec203e0c24cff4220f5dbb49233366718d970/0',
  },
  {
    name: 'White Card',
    email: 'henry@example.com',
    role: '40 Editions',
    price: '.4 ETH',
    imageUrl: whiteCard,
    openseaUrl: 'https://testnets.opensea.io/assets/mumbai/0xb79ec203e0c24cff4220f5dbb49233366718d970/1',
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
            <div className="min-w-0 flex-1 overflow-hidden text-left font-serif">
              <p className="text-sm font-medium text-gray-900">{card.name}</p>
              <p className="truncate text-sm text-gray-500">{card.role}</p>
              <p className="truncate text-sm text-gray-500">{card.price}</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-md bg-mad shadow my-4 md:mt-1">
              <a href={card.openseaUrl} target="_blank">
                <p className="p-2 text-xs text-white font-serif">Buy on OpenSea</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
