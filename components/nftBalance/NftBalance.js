import Head from 'next/head'
import Image from 'next/image'
import mademoiselle from '../../assets/mademoiselle.png'
import volDAO from '../../assets/volDAO.png'

import { useEditionDrop, useContract } from '@thirdweb-dev/react'

import { UserContext } from '../../context/UserContext'
import { useContext, useEffect, useState } from 'react'

export default function NftBalance() {
  const { appStatus, address, getNFTs, balanceNFT } = useContext(UserContext)

  const [loadingContract, setLoadingContract] = useState(true)

  const [hasClaimedNFT, setHasClaimedNFT] = useState(false)
  const [balanceOfBlueCard, setBalanceOfBlue] = useState(0)
  const [balanceOfWhiteCard, setBalanceOfWhite] = useState(0)
  const [totalMademoiselleOwned, setTotalMademoiselleOwned] = useState(0)

  // Address of the wallet to check NFT balance
  //  const editionDrop = useEditionDrop("0xB79eC203E0C24CFf4220F5dBB49233366718D970")

  // ERC 1155: '0xB79eC203E0C24CFf4220F5dBB49233366718D970'
  // ERC 721: '0x8BeFe9f9836e04aC6c41aBa743177A617EED877a'

  // Contract useContract()
  const { contract, isLoading, error } = useContract(
    '0xB79eC203E0C24CFf4220F5dBB49233366718D970'
  )

  const checkBalance = async () => {
    try {
      // ============== For ERC 1155 ==============
      const balanceOfBlue = await contract.balanceOf(address, 0)
      const balanceOfWhite = await contract.balanceOf(address, 1)
      const blueCardMeta = await contract.get(0)
      const whiteCardMeta = await contract.get(1)

      // ============== For ERC 721  =============
      // const balanceOfBlue = await contract.nft.balanceOf(address)
      // const balanceOfWhite = await contract.nft.balanceOf(address)
      // const mad2NFTs = await contract.nft.balance()
      // console.log('All NFTs:', mad2NFTs)

      console.log('balanceOfBlue:', balanceOfBlue)
      console.log('balanceOfWhite:', balanceOfWhite)
      console.log('blueCardMeta:', blueCardMeta)
      console.log('whiteCardMeta:', whiteCardMeta)
      console.log('balanceNFT:', balanceNFT)
      console.log('NFT Balance of Blue:', parseInt(balanceOfBlue._hex, 16))
      console.log('NFT Balance of White:', parseInt(balanceOfWhite._hex, 16))
      console.log(
        'Mademoiselle NFTs Owned:',
        parseInt(balanceOfBlue._hex, 16) + parseInt(balanceOfWhite._hex, 16)
      )

      setBalanceOfBlue(parseInt(balanceOfBlue._hex, 16))
      setBalanceOfWhite(parseInt(balanceOfWhite._hex, 16))
      setTotalMademoiselleOwned(
        parseInt(balanceOfBlue._hex, 16) + parseInt(balanceOfWhite._hex, 16)
      )

      if (balanceOfBlue.gt(0) || balanceOfWhite.gt(0)) {
        setHasClaimedNFT(true)
        console.log('🎉 You have an NFT!', balanceOfBlue, balanceOfWhite)
      } else {
        setHasClaimedNFT(false)
        console.log("🤷‍♂️ You don't have an NFT.")
      }
    } catch (error) {
      setHasClaimedNFT(false)
      console.error('Failed to get nft balance', error)
    }
    setLoadingContract(false)
  }

  useEffect(() => {
    if (!address) {
      console.log('No Address Connected.  Please Re-connect your MetaMask')
      return
    } else if (isLoading) {
      console.log('Loading.......')
      setLoadingContract(true)
      return
    }
    checkBalance()
    getNFTs()
  }, [address, contract, isLoading])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Mademoiselle - NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-12 flex w-full flex-1 flex-col items-center justify-center px-10 text-center md:px-20">
        <h1 className=" my-4 font-serif text-4xl">My Profile.</h1>

        <p className="text-md mt-1 font-serif">Presented by</p>

        <Image src={mademoiselle} layout="intrinsic" width={150} height={30} />

        {hasClaimedNFT
          ? console.log('🎉 You have an NFT!')
          : console.log('No NFT in your Wallet :/')}

        {loadingContract ? (
          <svg
            role="status"
            className="mr-2 mt-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          <h1>NFT Balance: {totalMademoiselleOwned}</h1>
        )}

        <div className="text-left">
          {!loadingContract ? (
            <>
              <h1 className=" my-4 font-serif text-xl">My Card's</h1>
              <h1>Balance of Blue: {balanceOfBlueCard}</h1>
              <h1>Balance of White: {balanceOfWhiteCard}</h1>
            </>
          ) : null}

          <div
            className={`grid grid-cols-1 gap-4 xl:grid-cols-2 ${
              isLoading ? 'animate-pulse' : null
            }`}
          >
            {hasClaimedNFT &&
              balanceNFT?.items?.map((nft) => (
                <div
                  key={nft.id}
                  className="relative items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow-sm md:flex md:items-center"
                >
                  <div className="flex-shrink">
                    {nft.meta && (
                      <Image
                        layout="intrinsic"
                        height={225}
                        width={350}
                        src={nft?.meta?.content[0]?.url}
                        alt=""
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-1">
                    <div className="min-w-0 flex-1 overflow-hidden text-left font-serif">
                      <p className="text-lg font-medium text-gray-900">
                        {nft?.meta?.name}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Blockchain: {nft.blockchain}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        Contract: {nft.contract}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        Contract Id: {nft.id}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        TokenId: {nft.tokenId}
                      </p>
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
