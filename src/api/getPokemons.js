const API = process.env.POKEAPI || 'https://pokeapi.co/api/v2/'

const getPokemons = (limit = 151) => {
  const getPokeApi = fetch(`${API}pokemon?limit=${limit}`)
  return getPokeApi
}

export default getPokemons