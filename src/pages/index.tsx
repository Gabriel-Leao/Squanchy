/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import Main from '../components/Main'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import { CharacterContext } from '../context/CharacterContex'

const Home: NextPage = () => {
  const { search, load, page, getPages, status, gender, species } = useContext(CharacterContext)

  useEffect(() => {
    if (search == '') load({page, search, status, gender, species})
    else load({page, search, status, gender, species})
    getPages({page, search, status, gender, species})
  }, [search, page, status, gender, species])

  return (
      <div>
        <Head>
          <title>Squanchy!</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Search />
        <Main />
        <Pagination />
      </div>
  )
}

export default Home