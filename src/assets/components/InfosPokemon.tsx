// Import Functions
import ColorTypes from "../hooks/ColorTypes";
// Import Types
type Pokemon = {
  types: {
    type: {
      name: string;
    };
  }[];
  number: number;
  height: number;
  weight: number;
};

export default function InfosPokemon(props: Pokemon) {
  return (
    <div className="flex flex-col gap-4 min-w-[200px] sm:min-w-[440px] shadow-lg rounded-lg p-8">
      <div className="flex flex-row gap-2 justify-between items-center">
        {/* Show the types of the pokemon */}
        <h1 className="text-lg text-gray-400">Types</h1>
        <ul className="flex flex-wrap gap-4 justify-center">
          {props.types.map((type, index: number) => {
            // Set the color of the type
            const color = ColorTypes(type);
            return (
              <li
                key={index}
                className={
                  color + " text-center rounded-full px-2 py-1 text-white"
                }
              >
                {type.type.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        {/* if the pokemon is 1 -> Convert to 001, 10 -> 010, 100 -> 100 */}
        <h1 className="text-lg text-gray-400">Number</h1>
        <p className="text-lg">{props.number.toString().padStart(3, "0")}</p>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        {/* Height is in decimeter, so we divide by 10 to get meter */}
        <h1 className="text-lg text-gray-400">Height</h1>
        <p className="text-lg">{props.height / 10}m</p>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        {/* Weight is in hectogram, so we divide by 10 to get kilogram */}
        <h1 className="text-lg text-gray-400">Weight</h1>
        <p className="text-lg">{props.weight / 10} kg</p>
      </div>
    </div>
  );
}
