import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import CharacterProvider from '../context/CharacterContex'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CharacterProvider>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </CharacterProvider>
  )
}

export default MyApp
