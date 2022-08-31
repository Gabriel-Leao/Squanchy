 interface FIltersButton {
  item: string,
  name: string
}

const aliveBorder = 'border-4 bg-green-600 rounded-lg text-[#fff] cursor-pointer'
const deadBorder = 'border-4 bg-red-600 rounded-lg text-[#fff] cursor-pointer'
const unknownBorder = 'border-10 bg-gray-600 rounded-lg text-[#fff] cursor-pointer focus:text-red-600'

const FIltersButton = ({ item, name }: FIltersButton) => {
  return (
    <div>
      <div className='mx-2 my-4'>
        <input type="radio" id={`${name}-${item}`} name={name} className='appearance-none peer'/>
        <label htmlFor={`${name}-${item}`} 
          className='py-2 px-4 text-center capitalize border-2 border-[#0d6efd] text-[#0d6efd] rounded-lg hover:text-[#fff] hover:bg-[#0d6efd] peer-checked:text-[#fff] peer-checked:bg-[#0d6efd]'>
            {item}
        </label>
      </div>
    </div>
  )
}

export default FIltersButton