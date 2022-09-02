import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import CharacterProvider from '../context/CharacterContex'
import { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    //@ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle')
},[])

  return (
    <CharacterProvider>
      <>
        <Head>
          <title>Squanchy!</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Squanchy é um site com todas as informações sobre a série, criado utilizando a API do Rick and Morty" />
          <meta name="keywords" content="Squanchy, Rick and Morty, Rick Morty, Rick, Morty" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="Gabriel Leão" />
          <link rel="icon" href="/images/logo.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </>
    </CharacterProvider>
  )
}

export default MyApp
