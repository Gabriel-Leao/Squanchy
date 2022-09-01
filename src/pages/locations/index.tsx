/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import CharacterCard from "../../components/CharacterCard"
import { Character, LocationPage } from "../../interfaces"

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetch(`https://rickandmortyapi.com/api/location/3`)
  const location = await data.json()
  return {
    props: { location }
  }
}

const Location = ({ location }: LocationPage) => {
  const [residents, setresidents] = useState<Character[]>([])

  useEffect(() => {
    const getResidents = async () => {
      const data = await Promise.all(
        location.residents.map(async (residentUrl) => {
          return await fetch(residentUrl).then(res => res.json())
        })
      )
      setresidents(data)
      console.log(data)
    }

    getResidents()
  }, [])
  return (
    <div className="flex mx-auto flex-col max-w-[1240px] items-center">
      <div className="text-center my-2">
        <h2 className="py-2 capitalize">localização: <span className="text-[#00B0C8]">{location.name}</span></h2>
        <h2 className="py-2 capitalize">dimensão: <span className="text-[#00B0C8]">{location.dimension == 'unknown' ? 'desconhecida' : location.dimension}</span></h2>
        <h3 className="py-2 capitalize">tipo: <span className="text-[#00B0C8]">{location.type}</span></h3>
      </div>

      <div className="flex flex-wrap mx-auto justify-center lg:justify-start">
        { residents.map((resident, key) => (
          <CharacterCard key={key} Character={resident}/>
        ))}
      </div>
    </div>
  )
}

export default Location