import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from '../../interfaces'

const unknownStatus = 'bg-gray-500 text-[#fff] rounded-lg w-[140px] text-[20px] px-2'
const aliveStatus = 'bg-green-500 text-[#fff] rounded-lg w-[60px] text-[20px] px-2'
const deadStatus = 'bg-red-500 text-[#fff] rounded-lg w-[70px] text-[20px] px-2'
const menGender = 'bg-blue-500 text-[#fff]'
const womanGender = 'bg-red-500 text-[#fff]'
const unknowGender =  'bg-gray-500 text-[#fff]'
// const aliveBorder = 'border-4 border-green-600 rounded-lg'
// const deadBorder = 'border-4 border-red-600 rounded-lg'
// const unknownBorder = 'border-4 border-gray-600 rounded-lg'

const CharacterCard = ({ item }: Card) => {
  return (
    <div className='p-2'>
      <div className='h-full mx-auto flex justify-center items-center max-w-[300px] m-0 cursor-pointer'>
        <Link href={`/character/${item.id}`}>
          <div className="border-4 border-[#00B0C8] rounded-lg" >
            <div className='relative inline-block'>
              <div className='right-2 absolute z-[999]'>
                <span className={ item.status == 'unknown' ? unknownStatus
                  : item.status == 'Alive' ? aliveStatus
                  : deadStatus }
                >
                    {item.status == 'Alive' ? 'vivo' : item.status == 'Dead' ? 'morto': 'desconhecido'}
                </span>
              </div>
              <Image src={item.image} alt="" height={300} width={300}/>
            </div>
            <h1 className='capitalze text-center text-[20px] pb-4'>{item.name}</h1>
            {/* <h2 className='capitalize'>espécie: {item.species}</h2> */}
            <span className='capitalize ml-2 pb-3'>última localização:</span>
            <p className='capitalize ml-2 text-[18px] pb-4'>{item.location.name}</p>
            {/* <h2 className={ item.gender == 'unknown' ? unknowGender
              : item.gender == 'Male' ? menGender
              : womanGender}
            >
              {item.gender == 'Female' ? 'Mulher' : item.gender == 'Male' ? 'Homem': 'desconhecido'}
            </h2> */}
          </div>
        </Link>
      </div>
    </div>
  )
  
}

export default CharacterCard