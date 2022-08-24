const base = 'https://rickandmortyapi.com/api'

const getCharacters = async () => {
  const data = await fetch(`${base}/character`).then(res => res.json())
  return data.results
}

export default getCharacters