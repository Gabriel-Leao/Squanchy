import { useContext } from 'react'
import CharacterCard from '../../components/CharacterCard'
import { CharacterContext } from '../../context/CharacterContex'
import { Character } from '../../interfaces'
import Filters from '../../components/Filters'

const Main = () => {
  const { characters } = useContext(CharacterContext)

  return (
    <main className='mx-auto w-full flex flex-col items-center md:flex-row md:items-start justify-center'>
      <div className='justify-self-start md:mx-32'>
        <Filters />
      </div>

      <div className='flex flex-col md:flex-row justify-self-center md:flex-wrap w-[1240px]'>
        { characters ?
          characters.map((item: Character, key: number) => (
            <CharacterCard key={key} item={item}/>
          ))
          :
          <div className='w-full text-center mr-56 text-red-600'>
            <h2>Nenhum personagem encontrado! 😔</h2>
          </div>
        }
      </div>
    </main>
  )
}

export default Main