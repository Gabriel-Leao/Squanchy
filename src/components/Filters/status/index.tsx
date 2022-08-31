import { useContext } from 'react'
import { CharacterContext } from '../../../context/CharacterContex'
import FIltersButton from '../FiltersButton'

const Status = () => {
  const { setStatus, setPage } = useContext(CharacterContext)

  const handleClick = async (status: string) => {
    setStatus(status)
    setPage(1)
  }

  const statusList = [ "alive", "dead", "unknown" ]

  return (
    <div className="accordion-item w-[300px]">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Status
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body flex flex-wrap gap-3">
          { statusList.map((item, key) => (
            <FIltersButton key={key} name="status" item={item} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status