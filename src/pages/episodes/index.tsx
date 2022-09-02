/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import CharacterCard from "../../components/CharacterCard"
import InputGroup from "../../components/InputGroup"
import { Character, Episode, EpisodePage } from "../../interfaces"


export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`https://rickandmortyapi.com/api/episode/1`)
  const episode = await data.json()
  const episodesInfo = await fetch('https://rickandmortyapi.com/api/episode/').then(res => res.json())
  const episodesCont = await episodesInfo.info.count
  return {
    props: { episode, episodesCont }
  }
}

const Episodes = ({ episode, episodesCont }: EpisodePage) => {
  const [episodeSelected, setEpisodeSelected] = useState<Episode>(episode)
  const date = new Date(episodeSelected.air_date).toLocaleString('pt-BR', {year: 'numeric', month: 'long', day: '2-digit'})
  const [charactersOnEpisode, setCharactersOnEpisode] = useState<Character[]>([])

  useEffect(() => {
    const getCharactersOnEpisode = async () => {
      const data = await Promise.all(
        episodeSelected.characters.map(async (characterUrl) => {
          return await fetch(characterUrl).then(res => res.json())
        })
      )
      setCharactersOnEpisode(data)
    }

    getCharactersOnEpisode()
  }, [episodeSelected])

  const handleEpisodeChange = async (id: string) => {
    const data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(res => res.json())
    setEpisodeSelected(data)
  }

  return (
    <div>
      <div className="text-center my-2">
        <h2 className="mb-4">Episódio: <span className="text-[#00B0C8]">{episodeSelected.name}</span></h2>
        <h3 className="text-lg">{date}</h3>
      </div>

      <div className="text-center flex flex-col items-center w-full my-2">
        <div className="w-[270px]">
          <h3 className="text-lg mb-2">Escolha o episódio</h3>
          <InputGroup option="Episódio" title="Episódios" count={episodesCont} func={handleEpisodeChange}/>
        </div>
      </div>

      <div className="flex mx-auto flex-col items-center lg:flex-row lg:items-start max-w-[1240px]">
        <div className="flex flex-wrap justify-center lg:justify-start">
          { charactersOnEpisode.map((character, key) => (
            <CharacterCard key={key} Character={character}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Episodes