import { SEARCH_INPUT_CHANGED } from '../constants/ActionTypes';
import PokemonList from '../PokemonList';

const initialState = {
  pokemon: PokemonList,
  searchTerm: '',
  caughtPokemon: []
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
  case SEARCH_INPUT_CHANGED:
    return {
      ...state,
      searchTerm : action.searchTerm
      // pokemon : filterPokemonList(PokemonList)
    };
  default:
    return state;
  }
}
