import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../utils/api";


const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      try {
        const data = await fetchPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
          abilities: data.abilities.map((ab) => ab.ability.name),
          types: data.types.map((t) => t.type.name),
        });
      } catch (err) {
        setError("Failed to load Pokémon details.");
      } finally {
        setLoading(false);
      }
    };

    loadPokemonDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold text-[#7209B7]">{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} className="mx-auto my-4 w-40 h-40" />
      <p className="text-lg font-bold">
        Type: <span className="capitalize">{pokemon.types.join(", ")}</span>
      </p>
      <h2 className="text-xl font-bold mt-4">Abilities:</h2>
      <ul className="list-disc list-inside text-left mx-auto max-w-md">
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="text-black">
            {ability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
