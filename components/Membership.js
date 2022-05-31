export default function Membership() {
  return (
    <div className="relative mb-10 mt-16 overflow-hidden bg-white">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-lg sm:px-6 lg:px-8">
          <h1>
            <span className="mt-2 block text-center font-serif text-xl font-bold leading-8 tracking-tight text-gray-900 ">
              NFT Membership
            </span>
          </h1>
          <p className="mt-8 text-left font-serif text-xl leading-8 text-black ">
            Membership is provided to the owners of NFTs, digital assets issued
            via blockchain technology. We will be leveraging Polygon's
            Ethereum-based technology to access the leading NFT tools and
            ecosystems while maintaining efficient transaction costs for our
            members.
          </p>
        </div>
        <div className="mx-auto mt-4 ml-8 max-w-5xl text-left text-lg sm:ml-8 lg:ml-12">
          <p className="my-5 mt-8 font-serif text-black">Why NFTs?</p>
          <ul className="list-disc font-serif " role="list">
            <li>Easily buy and sell membership</li>
            <li>Secure ownership</li>
            <li>Interoperability with emerging technologies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
