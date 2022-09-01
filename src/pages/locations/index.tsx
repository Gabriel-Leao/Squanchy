/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import CharacterCard from "../../components/CharacterCard"
import InputGroup from "../../components/InputGroup"
import { Character, Location, LocationPage } from "../../interfaces"

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`https://rickandmortyapi.com/api/location/1`)
  const location = await data.json()
  const locationInfo = await fetch('https://rickandmortyapi.com/api/location/').then(res => res.json())
  const locationCont = await locationInfo.info.count
  return {
    props: { location, locationCont }
  }
}

const Location = ({ location, locationCont }: LocationPage) => {
  const [locationSelected, setLocationSelected] = useState<Location>(location)
  const [residents, setresidents] = useState<Character[]>([])

  useEffect(() => {
    const getResidents = async () => {
      const data = await Promise.all(
        locationSelected.residents.map(async (residentUrl) => {
          return await fetch(residentUrl).then(res => res.json())
        })
      )
      setresidents(data)
    }

    getResidents()
  }, [locationSelected])

  const handleLocationChange = async (id: string) => {
    const data = await fetch(`https://rickandmortyapi.com/api/location/${id}`).then(res => res.json())
    console.log(data)
    setLocationSelected(data)
  }

  return (
    <div className="flex mx-auto flex-col max-w-[1240px] items-center">
      <div className="text-center my-2">
        <h2 className="py-2 capitalize">localização: <span className="text-[#00B0C8]">{locationSelected.name}</span></h2>
        <h3 className="py-2 capitalize text-lg">dimensão: {locationSelected.dimension == 'unknown' ? 'desconhecida' : locationSelected.dimension}</h3>
        <p className="py-2 capitalize">tipo: {locationSelected.type == 'unknown' ? 'desconhecida' : locationSelected.type == 'Planet' ? 'planeta' : locationSelected.type}</p>
      </div>

      <div className="text-center flex flex-col items-center w-full my-2">
        <div className="w-[270px]">
          <h3 className="text-lg mb-2">Escolha a localização</h3>
          <InputGroup option="Local" title="Locais" count={locationCont} func={handleLocationChange}/>
        </div>
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