import React from 'react'

interface LastLocation {
  location: string
}

const LastLocation = ({ location }: LastLocation) => {
  return (
    <div>
      <p className='capitalize'>
        última localização:{' '}
        {location ? (location == 'unknown' ? 'desconhecida' : location) : ''}
      </p>
    </div>
  )
}

export default LastLocation
