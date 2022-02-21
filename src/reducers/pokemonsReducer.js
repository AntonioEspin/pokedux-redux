import {SEARCH_POKEMON, SET_FAVORITE, SET_POKEMON} from "../actions/types"

const initialState = {
  list: [],
}

const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMON:
      return {
        ...state,
        list: action.payload
      }
    case SET_FAVORITE:
      const newPokemonList = [...state.list]
      const currentPokemon = newPokemonList.findIndex(elem => elem.id === action.payload.pokemonId)
      if (currentPokemon >= 0) {
        newPokemonList[currentPokemon].favorite = !newPokemonList[currentPokemon].favorite
      }
      return {
        ...state,
        list: newPokemonList
      }
    case SEARCH_POKEMON:
      const newList = [...state.list]
      const filterPokemon = newList.filter(elem => elem.name.includes(action.payload))
      console.log(filterPokemon.length)
      return {
        ...state,
        list: filterPokemon
      }
    default:
      return {...state}
  }
}

export default pokemonsReducer