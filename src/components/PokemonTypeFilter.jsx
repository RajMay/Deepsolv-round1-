import React, { useState, useEffect } from "react";
import { RadioGroup } from "react-radio-group"; // Import from the package
import { useDispatch } from "react-redux";
import { setSearchType } from "@/redux/pokemonSlice";

const PokemonTypeFilter = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("");

  const pokemonTypes = [
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Fairy",
  ];

  const changeHandler = (value) => {
    setSelectedType(value);
  };

  useEffect(() => {
    dispatch(setSearchType(selectedType));
  }, [selectedType]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter by Type</h1>
      <hr className="mt-3" />
      <RadioGroup selectedValue={selectedType} onChange={changeHandler}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {pokemonTypes.map((type, idx) => (
            <label key={idx} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={type}
                checked={selectedType === type}
                onChange={() => changeHandler(type)}
                className="hidden" // Hide the native radio input
              />
              <span
                className={`p-3 rounded-lg border-2 transition duration-200 ${
                  selectedType === type
                    ? "bg-[#6A38C2] text-white border-[#6A38C2]"
                    : "bg-gray-100 text-black border-gray-300"
                }`}
              >
                {type}
              </span>
            </label>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default PokemonTypeFilter;
