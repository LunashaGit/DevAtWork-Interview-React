// Import Packages
import { useState, useEffect } from "react";
// Import Components
import Footer from "../components/Footer";
import PokemonCall from "../api/PokemonCall";
import CardPokemon from "../components/CardPokemon";
// Import Types
import { Pokemon } from "../types/Pokemon";

export default function HomePage() {
  // State -> 151 Pokemons With Type Pokemon
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  // Loading State
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Get the first 151 Pokemon -> Call API
    PokemonCall.then((response) => {
      setPokemon(response),
        // Set Loading to false
        setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 py-10">
      <h1 className="text-3xl">Pokedex</h1>
      {/* If Loading is true -> Show Loading */}
      {loading && <p className="text-center">Loading...</p>}
      {/* If Loading is false -> Show the Pokemon */}
      {!loading && (
        <ul className="flex flex-wrap gap-4 justify-center">
          {/* Map over the pokemon array and show the CardPokemon component */}
          {pokemon.map((pokemon) => {
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
