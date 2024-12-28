import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    allPokemon: [], 
    filteredPokemon: [], 
    searchQuery: '', 
    searchType: '',
  },
  reducers: {
    setAllPokemon(state, action) {
      state.allPokemon = action.payload;
      state.filteredPokemon = action.payload; 
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload.toLowerCase();
      state.filteredPokemon = state.allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(action.payload.toLowerCase()) &&
        (state.searchType === '' || pokemon.type.includes(state.searchType)) 
      );
    },
    setSearchType(state, action) {
      state.searchType = action.payload.toLowerCase();
      state.filteredPokemon = state.allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(state.searchQuery) &&
        (action.payload === '' || pokemon.type.includes(action.payload)) 
      );
    },
  },
});

export const { setAllPokemon, setSearchQuery, setSearchType } = pokemonSlice.actions;
export default pokemonSlice.reducer;
