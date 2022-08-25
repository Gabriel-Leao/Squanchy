import { FilterCharacter } from "../interfaces"

const base = 'https://rickandmortyapi.com/api'

const getAllCharacters = async () => {
  const data = await fetch(`${base}/character`).then(res => res.json())
  return data.results
}

const getAllEpisodes = async () => {
  const data = await fetch(`${base}/episode`).then(res => res.json())
  return data.results
}

const getAllLocation = async () => {
  const data = await fetch(`${base}/location`).then(res => res.json())
  return data.results
}

const getCharacterByName = async (name: string) => {
  const data = await fetch(`${base}/character/?name=${name}`).then(res => res.json())
  return data.results
}

const getEpisodeByName = async (name: string) => {
  const data = await fetch(`${base}/episode/?name=${name}`).then(res => res.json())
  return data.results
}
const getLocationByName = async (name: string) => {
  const data = await fetch(`${base}/location/?name=${name}`).then(res => res.json())
  return data.results
}

const filterCharacter = async ({status, species, gender}: FilterCharacter) => {
  const data = await fetch(`${base}/character/?status${status}&species${species}&gender=${gender}`).then(res => res.json())
  return data.results
}

const filterLocations = async (id: number) => {
  const data = await fetch(`${base}/location/${id}`).then(res => res.json())
  return data.results
}

const filterSpisode = async (id: number) => {
  const data = await fetch(`${base}/episode/${id}`).then(res => res.json())
  return data.results
}

const get = {
  getAllCharacters,
  getAllEpisodes,
  getAllLocation,
  getCharacterByName,
  getEpisodeByName,
  getLocationByName,
  filterCharacter,
  filterLocations,
  filterSpisode
}

export default get