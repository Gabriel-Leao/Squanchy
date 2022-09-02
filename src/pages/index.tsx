/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
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
        <Search />
        <Main />
        <Pagination />
      </div>
  )
}

export default Home