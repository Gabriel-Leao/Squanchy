import React from 'react'

interface Origin {
  origin: string
}

const Origin = ({ origin }: Origin) => {
  return (
    <div>
      <p className='capitalize'>
        origem: {origin ? (origin == 'unknown' ? 'desconhecida' : origin) : ''}
      </p>
    </div>
  )
}

export default Origin
