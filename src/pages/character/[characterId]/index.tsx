import { GetStaticPaths, GetStaticProps } from 'next'
import { Character } from '../../../interfaces'
import Image from 'next/image'

interface CharacterInfo {
  character: Character
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  // @ts-ignore
  const data = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
  const character = await data.json()

  return {
    props: { character },
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

const CardInfo = ({ character }: CharacterInfo) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Image src={character.image} alt="" height={300} width={300}/>
      <h1>{character.name}</h1>
    </div>
  )
}

export default CardInfo