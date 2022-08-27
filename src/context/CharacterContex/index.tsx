import { createContext, useState } from "react";
import { Character } from "../../interfaces";
import get from "../../services/api";

interface ContextProvider {
  children: JSX.Element
}

interface CharacterContext {
  characters: Character[],
  load: Function,
  search: any,
  handleSearch: Function,
  setSearch: Function
}

const defaultValue = {
  characters: [],
  load: () => {},
  search: null,
  handleSearch: () => {},
  setSearch: () => {}
}

export const CharacterContext = createContext<CharacterContext>(defaultValue)

const CharacterProvider = ({ children } : ContextProvider) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState('')

  const load = async () => {
    const data = await get.getAllCharacters(1)
    setCharacters(data)
  }

  const handleSearch = async (value: string) => {
    setSearch(value)
    const data = await get.getCharacterByName(search)
    setCharacters(data)
  }

  return (
    <CharacterContext.Provider value={{load, characters, search, handleSearch, setSearch}}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterProvider