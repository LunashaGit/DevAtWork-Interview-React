// Import Types
import { Pokemon } from "../types/Pokemon";
// Import Functions
import ColorTypes from "../hooks/ColorTypes";

export default function CardPokemon(props: Pokemon) {
  return (
    <a
      href={`/details/${props.id}`}
      className="flex flex-row items-center justify-between shadow-xl rounded-xl p-4 sm:w-[440px] h-[130px] text-left"
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
          // Set the color of the type
          const color = ColorTypes(type);
          return (
            <p
              className={color + " p-2 text-sm rounded-full text-white"}
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
