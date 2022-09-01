import { GetStaticPaths, GetStaticProps } from 'next'
import { Character, CharacterInfo } from '../../interfaces'
import Image from 'next/image'



export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  // @ts-ignore
  const data = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
  const character = await data.json()

  return {
    props: { character }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`).then(res => res.json())

  const data = await response.results

  const paths = data.map((character: Character) => {
    return {
      params: {
        characterId: `${character.id}`
      }
    }
  })

  return {paths, fallback: true}
}

const unknownStatus = 'bg-gray-500 text-[#fff] rounded-lg w-full text-center text-[28px] my-4 tracking-widest  px-2'
const aliveStatus = 'bg-green-500 text-[#fff] rounded-lg w-full text-center text-[28px] my-4 tracking-widest px-2'
const deadStatus = 'bg-red-500 text-[#fff] rounded-lg w-full text-center text-[28px] my-4 tracking-widest px-2'

const CardInfo = ({ character }: CharacterInfo) => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='my-20'>
        <h2 className='text-center py-4'>{character.name}</h2>
        <Image src={character.image} alt="" height={300} width={300} layout='responsive'/>
        <h2 className={ character.status == 'unknown' ? unknownStatus : character.status == 'Alive' ? aliveStatus : deadStatus }>
          {character.status == 'Alive' ? 'vivo' : character.status == 'Dead' ? 'morto': 'desconhecido'}
        </h2>
        <p className='capitalize'>gênero: {character.gender == 'Female' ? 'feminino' : character.gender == 'Male' ? 'masculino' : character.gender == 'unknown' ? 'desconhecido' : 'sem gênero'}</p>
        <p className='capitalize'>espécie: {character.species == 'Humanoid' ? 'humanoide' : character.species == 'unknown' ? 'desconhecida' : character.species == 'Human' ? 'humano' : character.species == 'Disease' ? 'doença' : character.species == 'Robot' ? 'robô' : character.species == 'Planet' ? 'planeta' : character.species == 'Mythological' ? 'mitológico' : character.species == 'Poopybutthole' ? 'bunda cagada' : character.species}</p>
        <p className='capitalize'>origem: {character.origin.name == 'unknown' ? 'desconhecida' : character.origin.name}</p>
        <p className='capitalize'>última localização: {character.location.name == 'unknown' ? 'desconhecida' : character.location.name}</p>
      </div>
    </div>
  )
}

export default CardInfo