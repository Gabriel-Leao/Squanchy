import { InputGroup } from "../../interfaces"


const InputGroup = ( { count, option, title, func }: InputGroup) => {
  const options = [...Array(count).keys()]
  return (
    <div className="input-group mb-3">
      <select className="form-select" id={option} onChange={e => func(e.target.value)}>
        <option selected>{title}...</option>
        { options.map((count, key) => (
          <option key={key} value={count+1}>{option}: {count+1}</option>
        ))}
      </select>
    </div>
  )
}

export default InputGroup