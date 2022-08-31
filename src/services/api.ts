import { FilterCharacter, GetCharacters } from "../interfaces"

const base = 'https://rickandmortyapi.com/api'

const getCharacters = async ({page, search='', status='', gender='', species=''}: GetCharacters) => {
  const data = await fetch(`${base}/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`).then(res => res.json())
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

const filterCharacter = async ({status='', species='', gender=''}: FilterCharacter) => {
  const data = await fetch(`${base}/character/?status=${status}&species=${species}&gender=${gender}`).then(res => res.json())
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

const PagesLimit = async ({page, search='', status='', gender='', species=''}: GetCharacters) => {
  const data = await fetch(`${base}/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`).then(res => res.json())
  if (data.info != undefined) return data.info.pages
}

const get = {
  getCharacters,
  getAllEpisodes,
  getAllLocation,
  getCharacterByName,
  getEpisodeByName,
  getLocationByName,
  filterCharacter,
  filterLocations,
  filterSpisode,
  PagesLimit,
}

export default get