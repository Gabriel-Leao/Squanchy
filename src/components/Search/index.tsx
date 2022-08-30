import { useContext } from 'react'
import { CharacterContext } from '../../context/CharacterContex'

const Search = () => {
  const { search, handleSearch } = useContext(CharacterContext)

  return (
    <form className='flex flex-col items-center text-center pt-44'>
      <h1 className='font-getSchwifty text-[#00B0C8]'>Personagens</h1>
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