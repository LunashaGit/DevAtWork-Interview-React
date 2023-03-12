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
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
        setIsLoading(false);
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
      {isLoading && <p className="text-center">Loading...</p>}
      {/* If Loading is false -> Show the Pokemon */}
      {!isLoading && (
        <>
          <a href="/myteam">
            <div className="flex flex-col justify-end shadow-xl rounded-xl p-4 h-[130px] text-left bg-violet-300 text-white">
              <h1>My Team</h1>
              <h6>
                {localStorage.getItem("team")
                  ? JSON.parse(localStorage.getItem("team") || "[]").length
                  : 0}{" "}
                {/* Calculate how much have pokemon in the localStorage  */}
                {JSON.parse(localStorage.getItem("team") || "[]").length ===
                  1 ||
                JSON.parse(localStorage.getItem("team") || "[]").length === 0
                  ? "Pokemon"
                  : "Pokemons"}
                {/* If the length is 1 or 0 -> Pokemon else -> Pokemons */}
              </h6>
            </div>
          </a>
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
        </>
      )}
      <Footer />
    </div>
  );
}
