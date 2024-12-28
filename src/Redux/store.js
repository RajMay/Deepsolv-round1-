import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
 // Import the reducer directly

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer, // Use the imported reducer
  },
});

export default store;
