import getPokemons from "../api/getPokemons";
import { CLEAR_ERROR, SEARCH_POKEMON, SET_ERROR, SET_FAVORITE, SET_POKEMON, TOGGLE_LOADER } from "./types";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

export const searchPokemon = (payload) => ({
  type: SEARCH_POKEMON,
  payload
})

export const setError = (payload) => ({
  type: SET_ERROR,
  payload
})

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload
})

export const toggleLoader = () => ({
  type: TOGGLE_LOADER
})


export const getPokemonWithDetails = () => dispatch => {
  getPokemons()
    .then(response => response.json())
    .then(data => {
      dispatch(toggleLoader())
      const pokemonsInfo = data.results
      return Promise.all(pokemonsInfo.map(pokemon => {
        const getInfo = fetch(pokemon.url)
        return getInfo.then(response => response.json())
      }))
    })
    .then(data => 
        dispatch(setPokemon(data),
        dispatch(toggleLoader())
      ))
    .catch(error => {
      dispatch(setError({message: 'ocurrió un error', error}))
      dispatch(toggleLoader())
    })
}