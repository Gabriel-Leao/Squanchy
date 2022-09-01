import { useContext } from 'react'
import CharacterCard from '../../components/CharacterCard'
import { CharacterContext } from '../../context/CharacterContex'
import { Character } from '../../interfaces'
import Filters from '../../components/Filters'

const Main = () => {
  const { characters } = useContext(CharacterContext)

  return (
    <main className='w-full flex flex-col mx-auto items-center lg:flex-row lg:items-start gap-3 max-w-[1240px]'>
        <Filters />

      <div className='flex flex-wrap mx-auto justify-center lg:justify-start'>
        { characters ?
          characters.map((character: Character, key: number) => (
              <CharacterCard  key={key} Character={ character }/>
          ))
          :
          <div className='lg:mr-72 text-red-500'><h3>Nenhum personagem encontrado!</h3></div>
        }
      </div>
    </main>
  )
}

export default Main