import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCards from "./PokemonCards";

const LatestPokemons = () => {
  const searchQuery = useSelector((state) => state.pokemon.searchQuery);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!response.ok) throw new Error("Failed to fetch Pokémon data");

        const data = await response.json();
        const detailedPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            const details = await detailsResponse.json();
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              type: details.types.map((type) => type.type.name),
              abilities: details.abilities.map((ability) => ability.ability.name),
            };
          })
        );

        setPokemons(detailedPokemon);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2] font-bold">Latest</span> Pokémon
      </h1>

      <div className="grid grid-cols-3 gap-4 my-10">
        {filteredPokemons.length <= 0 ? (
          <span>No Pokémon found</span>
        ) : (
          filteredPokemons.map((pokemon) => (
            <PokemonCards key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestPokemons;