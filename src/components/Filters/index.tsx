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
      <div className='my-2'><a href='#' onClick={handleClearFilters} className="text-blue-600 cursor-pointer hover:underline hover:text-blue-600">Limpar filtros</a></div>
      <div className="accordion" id="accordionExample">
        <Status />
        <Species />
        <Genders />
      </div>
    </aside>
  )
}

export default Filter