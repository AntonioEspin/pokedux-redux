import {combineReducers} from 'redux'
import pokemonsReducer from './pokemonsReducer'
import uiReducer from './ui'

const rootReducer = combineReducers({
  pokemon: pokemonsReducer,
  ui: uiReducer
})

export default rootReducer