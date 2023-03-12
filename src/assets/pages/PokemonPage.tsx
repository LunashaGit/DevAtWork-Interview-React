// Import Packages
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
// Import Components
import Footer from "../components/Footer";
import Back from "../components/Back";
import InfosPokemon from "../components/InfosPokemon";
import StatsPokemon from "../components/StatsPokemon";
import AddToMyTeam from "../components/AddToMyTeam";
// Import API
import PokemonCallSingle from "../api/PokemonCallSingle";
// Import Types
import { DetailsPokemon as Pokemon } from "../types/DetailsPokemon";

export default function PokemonPage() {
  // State -> Details of the Pokemon
  const [detailsOfPokemon, setDetailsOfPokemon] = useState<Pokemon>(
    {} as Pokemon
  );
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

  const addToMyTeam = useCallback(() => {
    // Get the team from the local storage
    const team = JSON.parse(localStorage.getItem("team") || "[]");
    // If the team includes the name of the Pokemon -> Remove it
    if (
      team.some(
        (pokemon: { name: string }) => pokemon.name === detailsOfPokemon.name
      )
    ) {
      // Remove the Pokemon from the team
      const newTeam = team.filter(
        (pokemon: { name: string }) => pokemon.name !== detailsOfPokemon.name
      );
      // Set the new team to the local storage
      localStorage.setItem("team", JSON.stringify(newTeam));
    } else {
      // If the team doesn't include the name of the Pokemon -> Add it
      // Add the name of the Pokemon to the team
      team.push({
        id: detailsOfPokemon.id,
        name: detailsOfPokemon.name,
        sprites: {
          front_default: detailsOfPokemon.sprites.front_default,
        },
        types: detailsOfPokemon.types.map((ele) => {
          // Not The same API, Need To structure the data & it's working
          const type = {
            slot: ele.slot,
            type: {
              name: ele.type.name,
            },
          };
          return type;
        }),
      });
      // Set the new team to the local storage
      localStorage.setItem("team", JSON.stringify(team));
    }
  }, [detailsOfPokemon.name]);
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
            {/* Capitalize the first letter of the name of the Pokemon */}
            {detailsOfPokemon.name.charAt(0).toUpperCase() +
              detailsOfPokemon.name.slice(1)}
          </h2>
          {/* Show the image of the Pokemon */}
          <img
            src={detailsOfPokemon.sprites.front_default}
            alt={detailsOfPokemon.name}
            className="w-40"
          />
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            {/* Show the Infos of the Pokemon */}
            <article>
              <h6 className="text-sm text-gray-400">Infos</h6>
              <InfosPokemon
                types={detailsOfPokemon.types}
                number={detailsOfPokemon.id}
                height={detailsOfPokemon.height}
                weight={detailsOfPokemon.weight}
              />
            </article>
            {/* Show the Stats of the Pokemon */}
            <article>
              <h6 className="text-sm text-gray-400">Stats</h6>
              <StatsPokemon stats={detailsOfPokemon.stats} />
            </article>
          </div>
        </div>
      )}
      {/* Show the button to add the Pokemon to the team */}
      <AddToMyTeam name={detailsOfPokemon.name} onClick={addToMyTeam} />
      <Footer />
    </div>
  );
}
