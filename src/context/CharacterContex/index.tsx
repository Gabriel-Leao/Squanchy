import { createContext, useState } from "react";
import { Character, characterContext, ContextProvider, GetCharacters } from "../../interfaces";
import get from "../../services/api";



const defaultValue = {
  characters: [],
  page: 1,
  pagesNumber: 0,
  load: () => {},
  search: null,
  handleSearch: () => {},
  setPage: () => {},
  getPages: () => {},
  setCharacters: () => {},
  status: '',
  gender: '',
  species: '',
  setStatus: () => {},
  setGender: () => {},
  setSpecies: () => {}
}

export const CharacterContext = createContext<characterContext>(defaultValue)

const CharacterProvider = ({ children } : ContextProvider) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState(0)

  const load = async ({page, search, status, gender, species}: GetCharacters) => {
    const data = await get.getCharacters({page, search, status, gender, species})
    setCharacters(data)
  }

  const handleSearch = async (Search: string) => {
    setSearch(Search)
    setPage(1)
  }

  const getPages = async ({page, search, status, gender, species}: GetCharacters) => {
    const data = await get.PagesLimit({page, search, status, gender, species})
    setPagesNumber(data)
  }

  return (
    <CharacterContext.Provider value={{load, characters, setCharacters, search, handleSearch, setPage, page, pagesNumber, getPages, status, gender, species, setStatus, setGender, setSpecies}}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterProvider