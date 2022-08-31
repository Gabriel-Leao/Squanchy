export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
      name: string,
      url: string
  },
  location: {
      name: string,
      url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

export interface Location {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[],
  url: string,
  created: string
}

export interface Episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}

export interface Card {
  item: Character
}


export interface FilterCharacter {
  status?: string,
  species?: string,
  gender?: string
}

export interface FIltersButton {
  item: string,
  name: string,
  handleClick: Function,
}

export interface ContextProvider {
  children: JSX.Element
}

export interface characterContext {
  characters: Character[],
  page: number,
  pagesNumber: number,
  load: Function,
  search: any,
  handleSearch: Function,
  setPage: Function,
  getPages: Function,
  setCharacters: Function,
  status: string,
  gender: string,
  species: string,
  setStatus: Function,
  setGender: Function,
  setSpecies: Function
}

export interface CharacterInfo {
  character: Character
}

export interface GetCharacters {
  page?: number,
  search?: string,
  status?: string,
  gender?: string,
  species?: string,
}