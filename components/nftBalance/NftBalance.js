import Head from 'next/head'
import Image from 'next/image'
import mademoiselle from '../../assets/mademoiselle.png'
import volDAO from '../../assets/volDAO.png'

import { useEditionDrop } from '@thirdweb-dev/react'

import { UserContext } from '../../context/UserContext'
import { useContext, useEffect, useState } from 'react'



export default function NftBalance() {
  const {
    appStatus,
    address,
    getNFTs,
    balanceNFT
  } = useContext(UserContext)

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);

  // Address of the wallet to check NFT balance
 const editionDrop = useEditionDrop("0xB79eC203E0C24CFf4220F5dBB49233366718D970")

  useEffect(() => {
    if (!address) {
      return;
    }
    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);
        console.log('NFT BALANCE:', balance )
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🎉 You have an NFT!", balance);
        } else {
          setHasClaimedNFT(false);
          console.log("🤷‍♂️ You don't have an NFT.");
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get nft balance", error);
      }
    };
    checkBalance();
    getNFTs();
  }, [address, editionDrop]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Mademoiselle - NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="mb-12 flex w-full flex-1 flex-col items-center justify-center px-10 md:px-20 text-center">
      
        <h1 className=" my-4 font-serif text-4xl">My Profile.</h1>

        <p className="text-md mt-1 font-serif">Presented by</p>

        <Image src={mademoiselle} layout="intrinsic" width={150} height={30} />

        

{ hasClaimedNFT ? <h1>"🎉 You have an NFT!"</h1> : <h1> "No NFT in your wallet"</h1> }

<div className='text-left'>
<h1 className=" my-4 font-serif text-xl">My Card's</h1>

<div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
{hasClaimedNFT && balanceNFT?.items?.map(nft => (
            <div
            key={nft.id}
            className="relative items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow-sm md:flex md:items-center"
          >
            <div className="flex-shrink">
              <Image
                layout="intrinsic"
                height={225}
                width={350}
                src={nft?.meta?.content[0]?.url}
                alt=""
              />
            </div>
  
            <div className="grid grid-cols-2 md:grid-cols-1">
              <div className="min-w-0 flex-1 overflow-hidden text-left font-serif">
              <p className="text-lg font-medium text-gray-900">{nft?.meta?.name}</p>
                <p className="text-sm font-medium text-gray-900">Blockchain: {nft.blockchain}</p>
                <p className="truncate text-sm text-gray-500">Contract: {nft.contract}</p>
                <p className="truncate text-sm text-gray-500">Contract Id: {nft.id}</p>
                <p className="truncate text-sm text-gray-500">TokenId: {nft.tokenId}</p>
              </div>
            
            </div>
          </div>
        ))}
</div>

</div>
       
      </main>

     

      <footer className=" flex h-24 w-full items-center justify-center border-t bg-mad font-serif text-xs text-white">
        <a className="flex items-center justify-center gap-2">
          Built by{' '}
          <Image src={volDAO} alt="Vercel Logo" width={75} height={50} />
        </a>
      </footer>
    </div>
  )
}
