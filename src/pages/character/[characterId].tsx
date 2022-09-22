import { GetStaticPaths, GetStaticProps } from 'next'
import { Character, CharacterInfo } from '../../interfaces'
import Image from 'next/image'
import Species from '../../components/CharacterPage/Species'
import Gender from '../../components/CharacterPage/Gender'
import Origin from '../../components/CharacterPage/Origin'
import LastLocation from '../../components/CharacterPage/LastLocation'
import Status from '../../components/CharacterPage/Status'
import travoltaGif from '/public/images/travolta.gif'
import Link from 'next/link'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/`
  ).then((res) => res.json())

  const data = await response.results

  const paths = data.map((character: Character) => {
    return {
      params: {
        characterId: `${character.id}`,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  const data = await fetch(
    // @ts-ignore
    `https://rickandmortyapi.com/api/character/${params.characterId}`
  )
  const character = await data.json()

  return {
    props: { character },
  }
}
const CardInfo = ({ character }: CharacterInfo) => {
  return (
    <div className='flex justify-center h-screen'>
      {character.error ? (
        <div className='flex justify-center items-center h-screen text-[#008139] text-center w-full'>
          <div>
            <h1>404</h1>
            <p>
              Rick opened a portal and this character was sucked into an unknown
              dimension
            </p>
            <Link href='/'>
              <a className='text-[#00B0C8] hover:underline hover:text-[#00B0C8]'>
                Get back
              </a>
            </Link>

            <Image
              src={travoltaGif}
              alt='John Travolta looking around in pulp fiction'
              layout='responsive'
              className='py-2'
              priority={true}
            />
          </div>
        </div>
      ) : (
        <div>
          <h2 className='text-center py-4'> {character.name} </h2>

          <Image
            src={character.image}
            alt=''
            height={300}
            width={300}
            layout='responsive'
          />

          <Status status={character.status} />

          <Gender gender={character.gender} />

          <Species specie={character.species} />

          <Origin origin={character.origin.name} />

          <LastLocation location={character.location.name} />
        </div>
      )}
    </div>
  )
}

export default CardInfo
