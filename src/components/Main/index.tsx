import { useContext } from 'react'
import CharacterCard from '../../components/CharacterCard'
import { CharacterContext } from '../../context/CharacterContex'
import { Character } from '../../interfaces'
import Filters from '../../components/Filters'

const Main = () => {
  const { characters } = useContext(CharacterContext)

  return (
    <main className='w-full flex flex-col items-center md:flex-row md:items-start justify-center gap-3'>
        <Filters />

      <div className='flex flex-col md:flex-row justify-self-center md:flex-wrap w-[1240px]'>
        { characters ?
          characters.map((item: Character, key: number) => (
            <CharacterCard key={key} item={item}/>
          ))
          :
          <div className=' text-center ml-10 text-red-600'>
            <h2>Nenhum personagem encontrado! 😔</h2>
          </div>
        }
      </div>
    </main>
  )
}

export default Main