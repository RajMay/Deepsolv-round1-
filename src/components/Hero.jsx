import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '@/Redux/pokemonSlice';
import { Search } from 'lucide-react';
import LogoCarousel from './LogoCarousel.jsx'
import LatestPokemons from './LatestPokemons.jsx';


const Hero = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchPokemonHandler = () => {
    dispatch(setSearchQuery(query)); 
    navigate('/latest'); 
  };

  return (
    <div className="text-center mt-10">
      
      <span className="text-bold mx-auto px-4 py-2 rounded-full bg-gray-200 text-[#F83002]">
        Pokédex: Discover Your Favorite Pokémon
      </span>

      <div className="flex flex-col gap-5 my-6">
        <h1 className="text-5xl font-bold m-2">
          Search, Catch, & Explore the <br />
          World of <span className="text-[#6A38C2]">Pokémon</span>
        </h1>
        <p>Find your favorite Pokémon in just a few clicks!</p>

        {/* Search Bar */}
        <div className="flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center mx-auto gap-4 mt-4 bg-white">
          <input
            type="text"
            placeholder="Search for Pokémon by name or type"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full p-2 text-black rounded-l-full"
          />
          <button
            onClick={searchPokemonHandler}
            className="rounded-r-full bg-[#6A38C2] p-2 flex items-center justify-center"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
      <LogoCarousel />
     

      <LatestPokemons/>
    </div>
  );
};

export default Hero;
