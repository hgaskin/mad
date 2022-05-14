/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Membership() {
  return (
    <div className="relative overflow-hidden bg-white py-16">
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
        <div className="mx-auto mt-4 max-w-5xl text-left text-lg text-gray-500 sm:px-6 lg:px-8">
          <p className="my-5 mt-8 font-serif ">Why NFTs?</p>
          <ul role="list">
            <li>Easily buy and sell membership</li>
            <li>Secure ownership</li>
            <li>Interoperability with emerging technologies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
