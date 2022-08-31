import * as Accordion from '@radix-ui/react-accordion'
import { useContext } from 'react'
import { CharacterContext } from '../../../context/CharacterContex'
import FIltersButton from '../FiltersButton'

const Species = () => {
  const { setSpecies, setPage } = useContext(CharacterContext)

  const handleClick = async (species: string) => {
    setSpecies(species)
    setPage(1)
  }

  const speciesList = ['human', 'alien', 'humanoid', 'poopybutthole', 'mythological', 'unknown', 'animal', 'robot', 'cronenberg', 'disease', 'planet']

  return (
    <Accordion.Item value="item-2">
    <Accordion.Trigger className='text-lg py-2 font-bold w-full'>Espécies</Accordion.Trigger>
    <Accordion.Content className='flex flex-wrap w-[260px]'>
      { speciesList.map((item, key) => (
        <FIltersButton key={key} name="species" item={item} handleClick={handleClick}/>
      ))}
    </Accordion.Content>
  </Accordion.Item>
  )
}

export default Species