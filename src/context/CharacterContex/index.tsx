import { createContext, useState } from "react";
import { Character } from "../../interfaces";
import get from "../../services/api";

interface ContextProvider {
  children: JSX.Element
}

interface CharacterContext {
  characters: Character[],
  page: number,
  pagesNumber: number,
  load: Function,
  search: any,
  handleSearch: Function,
  setPage: Function,
  getPages: Function
}

const defaultValue = {
  characters: [],
  page: 1,
  pagesNumber: 0,
  load: () => {},
  search: null,
  handleSearch: () => {},
  setPage: () => {},
  getPages: () => {}
}

export const CharacterContext = createContext<CharacterContext>(defaultValue)

const CharacterProvider = ({ children } : ContextProvider) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState(0)

  const load = async (page: number) => {
    const data = await get.getAllCharacters(page)
    setCharacters(data)
  }

  const handleSearch = async (value: string) => {
    setSearch(value)
    const data = await get.getCharacterByName(search)
    setCharacters(data)
  }

  const getPages = async () => {
    const data = await get.PagesLimit()
    setPagesNumber(data)
  }

  return (
    <CharacterContext.Provider value={{load, characters, search, handleSearch, setPage, page, pagesNumber, getPages}}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterProvider