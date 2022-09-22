interface SpeciesInfo {
  specie: string
}

const Species = ({ specie }: SpeciesInfo) => {
  return (
    <div>
      <p className='capitalize'>
        espécie:{' '}
        {specie
          ? specie == 'Humanoid'
            ? 'humanoide'
            : specie == 'unknown'
            ? 'desconhecida'
            : specie == 'Human'
            ? 'humano'
            : specie == 'Disease'
            ? 'doença'
            : specie == 'Robot'
            ? 'robô'
            : specie == 'Planet'
            ? 'planeta'
            : specie == 'Mythological'
            ? 'mitológico'
            : specie == 'Poopybutthole'
            ? 'bunda cagada'
            : specie
          : ''}
      </p>
    </div>
  )
}

export default Species
