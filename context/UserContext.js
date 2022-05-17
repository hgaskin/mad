import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ethers, Wallet } from 'ethers'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState()
  const [currentAccount, setCurrentAccount] = useState('')
  const [accountBalance, setAccountBalance] = useState(0)
  const [accountBalanceMad, setMadBalance] = useState(0)
  const [balanceNFT, setBalanceNFT] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  /**
   * Checks if there is an active wallet connection
   */
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      router.push('/')
      setAppStatus('error')
    }
  }

  const getNFTs = async () => {
    console.log('hit getNFTs', currentAccount)
    const response = await fetch(
      'https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:' +
        currentAccount
    )
    const data = await response.json()
    console.log('getNFTS response2', data)
    setBalanceNFT(data)
    console.log('nft responses', balanceNFT)

    if (data) {
      balanceNFT.forEach(function (contract) {
        data['items'].forEach(function (item) {
          if (item['contract'] == 'ETHEREUM:' + contract) {
            valid = true
            console.log('valid', valid)
          }
        })
      })
    }
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

  return (
    <UserContext.Provider
      value={{
        appStatus,
        currentAccount,
        accountBalance,
        accountBalanceMad,
        connectWallet,
        checkIfWalletIsConnected,
        getNFTs,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
