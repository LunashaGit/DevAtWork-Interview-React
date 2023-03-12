import { useState } from "react";

export default function AddToMyTeam({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) {
  const [myTeam, setTeam] = useState<boolean>(
    // Searching inside the Array of Objects if the name of the pokemon is in the local storage
    JSON.parse(localStorage.getItem("team") || "[]").some(
      (pokemon: { name: string }) => pokemon.name === name
    )
  );

  return (
    <>
      <button
        onClick={() => {
          onClick();
          setTeam(!myTeam);
        }}
        className="mx-auto bg-black rounded-lg text-white py-2 px-4 hover:bg-gray-700"
        disabled={
          JSON.parse(localStorage.getItem("team") || "[]").length === 6 &&
          !JSON.parse(localStorage.getItem("team") || "[]").some(
            (pokemon: { name: string }) => pokemon.name === name
          )
          // Disable the button if the team is full and the pokemon is not in the team
        }
      >
        {/* 
            If the name of the pokemon is in the local storage,
            the button will show "Remove from my team"
            If the name of the pokemon is not in the local storage,
            the button will show "Add to my team"
            If the length of the local storage is 6,
            the button will show "Team is full"
        */}

        {JSON.parse(localStorage.getItem("team") || "[]").some(
          (pokemon: { name: string }) => pokemon.name === name
        )
          ? "Remove from my team"
          : JSON.parse(localStorage.getItem("team") || "[]").length === 6
          ? "Team is full"
          : "Add to my team"}
      </button>
    </>
  );
}
