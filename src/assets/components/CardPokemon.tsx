// Import Types
import { Pokemon } from "../types/Pokemon";

export default function CardPokemon(props: Pokemon) {
  return (
    <a
      href={`/details/${props.id}`}
      className="flex flex-row items-center justify-between shadow-xl rounded-xl p-4 w-[440px] h-[130px] text-left"
      key={props.id}
    >
      {/* Show the image of the pokemon */}
      <div className="flex flex-row justify-center items-center">
        <img
          className="w-28"
          src={props.sprites.front_default}
          alt={props.name}
        />
        <div>
          {/* Show the name of the pokemon + First Letter in UpperCase */}

          <h1 className="text-xl">
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          </h1>
          {/* if the pokemon is 1 -> Convert to 001, 10 -> 010, 100 -> 100 */}
          <p className="text-sm text-gray-400">
            Number {props.id.toString().padStart(3, "0")}
          </p>
        </div>
      </div>

      {/* Show the types of the pokemon */}
      <div className="flex flex-col gap-2 text-center">
        {props.types.map((type) => {
          // Check the type of the pokemon and show the type in the right color
          let color;
          switch (type.type.name) {
            case "grass":
              color = "bg-green-400";
              break;
            case "fire":
              color = "bg-red-400";
              break;
            case "water":
              color = "bg-blue-400";
              break;
            case "bug":
              color = "bg-green-500";
              break;
            case "normal":
              color = "bg-gray-400";
              break;
            case "poison":
              color = "bg-purple-400";
              break;
            case "electric":
              color = "bg-yellow-400";
              break;
            case "ground":
              color = "bg-yellow-500";
              break;
            case "fairy":
              color = "bg-pink-400";
              break;
            case "fighting":
              color = "bg-red-500";
              break;
            case "psychic":
              color = "bg-pink-500";
              break;
            case "rock":
              color = "bg-yellow-600";
              break;
            case "ghost":
              color = "bg-purple-500";
              break;
            case "ice":
              color = "bg-blue-500";
              break;
            case "dragon":
              color = "bg-purple-600";
              break;
            case "dark":
              color = "bg-gray-500";
              break;
            case "steel":
              color = "bg-gray-600";
              break;
            case "flying":
              color = "bg-blue-600";
              break;
            default:
              color = "bg-gray-400";
              break;
          }

          return (
            <p
              className={color + " p-2 text-sm rounded-full"}
              key={type.type.name}
            >
              {type.type.name}
            </p>
          );
        })}
      </div>
    </a>
  );
}
