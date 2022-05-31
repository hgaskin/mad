import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { useEditionDrop } from '@thirdweb-dev/react'

// import { ethers, Wallet } from 'ethers'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState()
  const [currentAccount, setCurrentAccount] = useState('')
  const [accountBalance, setAccountBalance] = useState(0)
  const [accountBalanceMad, setMadBalance] = useState(0)
  const [balanceNFT, setBalanceNFT] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const editionDrop = useEditionDrop(
    '0xB79eC203E0C24CFf4220F5dBB49233366718D970'
  )

  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  // Third Web Provider HOOKS
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  /**
   * Checks if there is an active wallet connection
   */
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0 || address) {
        setAppStatus('connected')
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      router.push('/')
      setAppStatus('error')
    }
  }

  // Gets the balance of the current account and sets balanceNFT variable

  const getNFTs = async () => {
    console.log('hit getNFTs', currentAccount)
    const response = await fetch(
      'https://api-staging.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:' +
        address
    )
    const data = await response.json()
    console.log('getNFTS response2', data)
    setBalanceNFT(data)
  }

  /**
   * Initiates MetaMask wallet connection
   */
  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }

  const checkBalance = async () => {
    try {
      const balance = await editionDrop.balanceOf(address, 0)
      if (balance) {
        console.log('🎉 You have an NFT!', balance)
      } else {
        console.log("🤷‍♂️ You don't have an NFT.", balance)
      }
    } catch (error) {
      console.error('Failed to get nft balance', error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        appStatus,
        currentAccount,
        accountBalance,
        accountBalanceMad,
        checkBalance,
        connectWallet,
        checkIfWalletIsConnected,
        getNFTs,
        connectWithMetamask,
        balanceNFT,
        address,
        disconnect,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
