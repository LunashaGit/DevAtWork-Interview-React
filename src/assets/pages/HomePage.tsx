// Import Packages
import { useState, useEffect, useCallback } from "react";
// Import Components
import Footer from "../components/Footer";
import PokemonCall from "../api/PokemonCall";
import CardPokemon from "../components/CardPokemon";
import Search from "../components/Search";
// Import Types
import { Pokemon } from "../types/Pokemon";

export default function HomePage() {
  // State -> 151 Pokemons With Type Pokemon
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  // Loading State
  const [loading, setLoading] = useState<boolean>(true);
  // Search State
  const [search, setSearch] = useState<string>("");
  // SearchList State
  const [searchList, setSearchList] = useState<Pokemon[]>(pokemon);

  // Search Function
  const searchPokemon = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // Set the value of the input to the search state
      setSearch(e.target.value);
    },
    []
  );

  useEffect(() => {
    // Get the first 151 Pokemon -> Call API
    PokemonCall.then((response) => {
      setPokemon(response),
        setSearchList(response),
        // Set Loading to false
        setLoading(false);
    });
  }, []);

  useEffect(() => {
    // Filter the pokemon array by the value of the input
    const filteredPokemon = pokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
    // Set the filtered pokemon array to the pokemon state
    setSearchList(filteredPokemon);
  }, [search]);

  return (
    <div className="flex flex-col gap-12 py-10">
      <h1 className="text-3xl">Pokedex</h1>
      <Search search={search} searchPokemon={searchPokemon} />
      {/* If Loading is true -> Show Loading */}
      {loading && <p className="text-center">Loading...</p>}
      {/* If Loading is false -> Show the Pokemon */}
      {!loading && (
        <ul className="flex flex-wrap gap-4 justify-center">
          {/* Map over the pokemon array and show the CardPokemon component */}
          {searchList.map((pokemon) => {
            return (
              <CardPokemon
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                sprites={pokemon.sprites}
              />
            );
          })}
        </ul>
      )}
      <Footer />
    </div>
  );
}
