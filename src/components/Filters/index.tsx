import * as Accordion from '@radix-ui/react-accordion'
import { useContext } from 'react'
import { CharacterContext } from '../../context/CharacterContex'
import Genders from './genders'
import Species from './species'
import Status from './status'

const Filter = () => {
  const { setGender, setSpecies, setStatus } = useContext(CharacterContext)

  const handleClearFilters = () => {
    setStatus('')
    setSpecies('')
    setGender('')
    window.location.reload()
  }
  return (
    <aside className='text-center'>
      <h2>Filtros</h2>
      <div className='my-2'><a onClick={handleClearFilters} className="underline text-blue-600 cursor-pointer">limpar filtros</a></div>
      <Accordion.Root type="single" defaultValue='item-1' collapsible>
        <Status />
        <Species />
        <Genders />
      </Accordion.Root>
    </aside>
  )
}

export default Filter