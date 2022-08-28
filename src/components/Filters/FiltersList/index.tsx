import React from 'react'

interface FiltersList {
  item: string
}

const aliveBorder = 'border-4 bg-green-600 rounded-lg text-[#fff] cursor-pointer'
const deadBorder = 'border-4 bg-red-600 rounded-lg text-[#fff] cursor-pointer'
const unknownBorder = 'border-10 bg-gray-600 rounded-lg text-[#fff] cursor-pointer focus:text-red-600'

const FiltersList = ({ item }: FiltersList) => {
  return (
    <div className={ item == 'desconhecido' ? unknownBorder
    : item == 'vivo' ? aliveBorder
    : deadBorder }>
      <button className='py-2 px-4 text-center'>{item}</button>
    </div>
  )
}

export default FiltersList