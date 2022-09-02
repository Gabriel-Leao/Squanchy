import { GetCharacters } from "../interfaces"

const base = 'https://rickandmortyapi.com/api'

const getCharacters = async ({page, search='', status='', gender='', species=''}: GetCharacters) => {
  const data = await fetch(`${base}/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`).then(res => res.json())
  return data.results
}

const PagesLimit = async ({page, search='', status='', gender='', species=''}: GetCharacters) => {
  const data = await fetch(`${base}/character/?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`).then(res => res.json())
  if (data.info != undefined) return data.info.pages
}

const api = {
  getCharacters,
  PagesLimit,
}

export default api