// src/services/api.js
import axios from 'axios';

export const fetchPokemonList = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    throw error;
  }
};
