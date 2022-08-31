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
    <div className="accordion-item w-[300px]">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Espécies
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body flex flex-wrap gap-3">
          { speciesList.map((item, key) => (
            <FIltersButton key={key} name="species" item={item} handleClick={handleClick}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Species