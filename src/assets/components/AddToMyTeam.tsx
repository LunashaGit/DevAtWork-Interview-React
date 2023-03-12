// Import Packages
import { useState } from "react";
export default function AddToMyTeam({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) {
  // Check if the pokemon is in the team
  const isInTeam = JSON.parse(localStorage.getItem("team") || "[]").some(
    (pokemon: { name: string }) => pokemon.name === name
  );

  // Check if the team is full
  const isTeamFull =
    JSON.parse(localStorage.getItem("team") || "[]").length === 6;

  // Change the text of the button
  const action = isInTeam ? "Remove from my team" : "Add to my team";

  // Searching inside the Array of Objects if the name of the pokemon is in the local storage
  const [myTeam, setTeam] = useState<boolean>(isInTeam);

  return (
    <>
      <button
        onClick={() => {
          onClick();
          setTeam(!myTeam);
        }}
        className="mx-auto bg-black rounded-lg text-white py-2 px-4 hover:bg-gray-700"
        disabled={
          isTeamFull && !isInTeam
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
        {isTeamFull && !isInTeam ? "Team is full" : action}
      </button>
    </>
  );
}
