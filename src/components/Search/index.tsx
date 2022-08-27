/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { CharacterContext } from '../../context/CharacterContex'

const Search = () => {
  const { search, handleSearch, load } = useContext(CharacterContext)

  useEffect(() => {
    if (search == '') load()
  }, [search])

  return (
    <form className='text-center pt-44'>
      <h1>Personagens</h1>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <input type="text" id="" placeholder='search' 
            className='rounded-lg p-3 my-2 flex text-[#fff] placeholder:text-[#fff] focus:outline-none w-96 h-15 bg-green-500'
            value={search}
            onChange={ e => handleSearch(e.target.value)}
            />
      </div>
    </form>
  )
}

export default Search