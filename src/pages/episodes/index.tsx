/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect, useState } from "react"
import CharacterCard from "../../components/CharacterCard"
import { Character, Episode, EpisodePage } from "../../interfaces"


export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetch(`https://rickandmortyapi.com/api/episode/1`)
  const episode = await data.json()
  return {
    props: { episode }
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch(`https://rickandmortyapi.com/api/episode/`).then(res => res.json())

//   const data = await response.results

//   const paths = data.map((episode: Episode) => {
//     return {
//       params: {
//         episodeId: `${episode.id}`
//       }
//     }
//   })

//   return {paths, fallback: false}
// }

const Episodes = ({ episode }: EpisodePage) => {
  const date = new Date(episode.air_date).toLocaleString('pt-BR', {year: 'numeric', month: 'long', day: '2-digit'})
  const [charactersOnEpisode, setCharactersOnEpisode] = useState<Character[]>([])

  useEffect(() => {
    const getCharactersOnEpisode = async () => {
      const data = await Promise.all(
        episode.characters.map(async (characterUrl) => {
          return await fetch(characterUrl).then(res => res.json())
        })
      )
      setCharactersOnEpisode(data)
      console.log(data)
    }

    getCharactersOnEpisode()
  }, [])

  return (
    <div className="flex mx-auto flex-col max-w-[1240px] items-center">
      <div className="text-center my-2">
        <h2 className="mb-4">Episódio: <span className="text-[#00B0C8]">{episode.name}</span></h2>
        <h3 className="text-lg">{date}</h3>
      </div>

      <div className="flex flex-wrap mx-auto justify-center lg:justify-start">
        { charactersOnEpisode.map((character, key) => (
          <CharacterCard key={key} Character={character}/>
        ))}
      </div>
    </div>
  )
}

export default Episodes