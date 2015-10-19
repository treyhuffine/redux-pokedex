import * as types from '../constants/ActionTypes';

export function searchTermChanged(searchTerm) {
  return {
    type: types.SEARCH_INPUT_CHANGED,
    searchTerm
  };
}

export function filterPokemonList() {
  return (dispatch) => {
    console.log('filtering');
  };
}

