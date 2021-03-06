import React from "react";
import { useDispatch } from "react-redux";
import {Divider, Grid, Icon, Image, Label} from 'semantic-ui-react'
import { setFavorite } from "../../actions";
import {MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR} from '../../utils/constants'

const PokemonCard = ({pokemon}) => {
  const dispatch = useDispatch()


  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId: pokemon.id}))
  }

  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR

  if (!pokemon) return null
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <button className="PokemonCard-favorite" onClick={handleFavorite}>
          <Icon name="favorite" color={color}/>
        </button>
        <Image centered src={pokemon.sprites.front_default} alt ='Pokemon Front'/>
        <h2 className="PokemonCard-title">{pokemon.name}</h2>
        <Divider/>
        {pokemon.types.map(type => (
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`}>{type.type.name}</Label>
        ))}
      </div>
    </Grid.Column>
  )
}

export default PokemonCard