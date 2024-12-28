import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCards = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      className="p-2 m-3 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition duration-200 bg-white border border-[#7209B7]" 
    >
      {/* Pokemon Image */}
      <div className="flex justify-center mb-4">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-30 h-30 object-contain" 
        />
      </div>

      {/* Pokemon Name */}
      <div>
        <h1 className="font-bold text-xl text-[#7209B7]  text-center">{pokemon.name}</h1>
        <p className="text-sm text-black font-bold text-center capitalize">
          Type: {pokemon.type.join(", ")}
        </p>
      </div>

      {/* Abilities */}
      <div className="mt-4">
        <h2 className="font-bold text-[#a54730] text-sm mb-2">Abilities:</h2>
        <ul className="text-sm text-black font-bold">
          {pokemon.abilities.map((ability, index) => (
            <li key={index} className="list-disc list-inside">
              {ability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCards;
