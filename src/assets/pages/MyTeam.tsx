import { useState } from "react";
import Footer from "../components/Footer";
import CardPokemon from "../components/CardPokemon";
import Back from "../components/Back";
type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
  id: number;
  types: {
    type: {
      name: string;
    };
  }[];
};

export default function MyTeam() {
  const [team, setTeam] = useState<Pokemon[]>(
    // Team by localstorage or empty array
    JSON.parse(localStorage.getItem("team") || "[]")
  );

  return (
    <div className="flex flex-col gap-12 py-10">
      <Back />
      <h1 className="text-3xl">My Team</h1>
      {team.length > 0 ? (
        <ul className="flex flex-wrap gap-4 justify-center">
          {team.map((pokemon) => (
            // Show the CardPokemon component for each pokemon in the team
            <CardPokemon
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              sprites={pokemon.sprites}
            />
          ))}
        </ul>
      ) : (
        // If the team is empty -> Show this
        <p className="text-center">Your team is empty</p>
      )}
    </div>
  );
}
