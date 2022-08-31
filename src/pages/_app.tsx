import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import CharacterProvider from '../context/CharacterContex'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    //@ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle')
},[])
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
