import { useContext } from 'react'
import { CharacterContext } from '../../../context/CharacterContex'
import FIltersButton from '../FiltersButton'

const Genders = () => {
  const { setGender, setPage } = useContext(CharacterContext)

  const handleClick = async (gender: string) => {
    setGender(gender)
    setPage(1)
  }

  const gendersList = [ 'male', 'female', 'unknown', 'genderless' ]

  return (
    <div className="accordion-item w-[300px]">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Gênero
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body flex flex-wrap gap-3">
          { gendersList.map((item, key) => (
            <FIltersButton key={key} name="gender" item={item} handleClick={handleClick}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Genders