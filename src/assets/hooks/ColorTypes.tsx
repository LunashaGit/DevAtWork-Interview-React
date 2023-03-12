type Pokemon = {
  type: {
    name: string;
  };
};

const ColorTypes = (type: Pokemon) => {
  // Init Color
  let color;
  // Get The color of the type
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

  return color;
};

export default ColorTypes;
