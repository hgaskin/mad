import '../styles/globals.css'
import { UserProvider } from '../context/UserContext'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
