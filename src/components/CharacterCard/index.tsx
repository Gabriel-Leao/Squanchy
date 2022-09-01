import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from '../../interfaces'

const unknownStatus = 'bg-gray-500 text-[#fff] rounded-lg w-[140px] text-[20px] px-2'
const aliveStatus = 'bg-green-500 text-[#fff] rounded-lg w-[60px] text-[20px] px-2'
const deadStatus = 'bg-red-500 text-[#fff] rounded-lg w-[70px] text-[20px] px-2'

const CharacterCard = ({ Character }: Card) => {
  return (
    <div className='p-2 flex flex-wrap max-w-[300px] cursor-pointer'>
      <Link href={`/${Character.id}`}>
        <div className="border-4 border-[#00B0C8] rounded-lg" >
          <div className='relative inline-block'>
            <div className='right-1 absolute z-[999]'>
              <span className={ Character.status == 'unknown' ? unknownStatus
                : Character.status == 'Alive' ? aliveStatus
                : deadStatus }
              >
                  {Character.status == 'Alive' ? 'vivo' : Character.status == 'Dead' ? 'morto': 'desconhecido'}
              </span>
            </div>
            <Image src={Character.image} alt="" height={300} width={300}/>
          </div>
          <h1 className='capitalze text-center text-[20px] pb-4'>{Character.name}</h1>
          <span className='capitalize ml-2 pb-3 text-left'>última localização:</span>
          <p className='capitalize ml-2 text-[18px] pb-4'>{Character.location.name}</p>
        </div>
      </Link>
    </div>
  )
  
}

export default CharacterCard