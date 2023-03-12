// Import Packages
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Import Components
import Footer from "../components/Footer";
import Back from "../components/Back";
// Import API
import PokemonCallSingle from "../api/PokemonCallSingle";
// Import Types
import { Pokemon } from "../types/Pokemon";
// Import Functions
import ColorTypes from "../hooks/ColorTypes";

export default function PokemonPage() {
  // State -> Details of the Pokemon
  const [detailsOfPokemon, setDetailsOfPokemon] = useState<Pokemon>(
    {} as Pokemon
  );
  console.log(detailsOfPokemon);
  // State -> Loading
  const [loading, setLoading] = useState<boolean>(true);
  // Get the id from the URL -> /details/:id ( :id = id of the Pokemon )
  const { id } = useParams();

  useEffect(() => {
    // Get the details of the Pokemon -> Call API
    PokemonCallSingle(Number(id)).then((response) => {
      // Set the details of the Pokemon
      setDetailsOfPokemon(response),
        // Set Loading to false
        setLoading(false);
    });
  }, [id]);

  return (
    <div className="flex flex-col gap-12 py-10">
      <Back />
      <h1 className="text-3xl">Details</h1>
      {/* If Loading is true -> Show Loading */}
      {loading && <p className="text-center">Loading...</p>}
      {/* If Loading is false -> Show the Pokemon */}
      {!loading && (
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl">
            {detailsOfPokemon.name.charAt(0).toUpperCase() +
              detailsOfPokemon.name.slice(1)}
          </h2>
          <img
            src={detailsOfPokemon.sprites.front_default}
            alt={detailsOfPokemon.name}
            className="w-40 shadow-lg rounded-full"
          />
          <ul className="flex flex-wrap gap-4 justify-center">
            {detailsOfPokemon.types.map((type) => {
              // Set the color of the type
              const color = ColorTypes(type);
              return (
                <li className={color + " text-center rounded-md p-2"}>
                  {type.type.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}
