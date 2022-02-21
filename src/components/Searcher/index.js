import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Search } from 'semantic-ui-react';
import { searchPokemon, getPokemonWithDetails } from '../../actions';
import './styles.css';

export default function SearchBar() {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    setValue(e.target.value)
    console.log(value)
    if(value !== '') {
      dispatch(searchPokemon(value.toLowerCase().trim()))
    } else {
      dispatch(getPokemonWithDetails())
    }  
  }

  return (
    <div className='Searcher wrapper'>
      <Grid>
        <Grid.Column
          widescreen={10}
          largeScreen={10}
          mobile={16}
          className='Searcher'
        >
          <Search
            aligned='right'
            input={{ fluid: true }}
            showNoResults={false}
            placeholder='Encuentra a tu Pokemón favorito'
            value={value}
            onSearchChange={handleSearch}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
