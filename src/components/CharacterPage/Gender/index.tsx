import React from 'react'

interface Gender {
  gender: string
}

const Gender = ({ gender }: Gender) => {
  return (
    <div>
      <p className='capitalize'>
        gênero:{' '}
        {gender
          ? gender == 'Female'
            ? 'feminino'
            : gender == 'Male'
            ? 'masculino'
            : gender == 'unknown'
            ? 'desconhecido'
            : 'sem gênero'
          : ''}
      </p>
    </div>
  )
}

export default Gender
