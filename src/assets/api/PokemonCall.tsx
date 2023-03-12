// Import Packages
import axios from "axios";

// API Link
const BASE_URL =
  "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon";

// API Call -> Get the first 151 Pokemon ( First Generation )
const PokemonCall = axios.get(BASE_URL).then((response) => {
  return response.data;
});

export default PokemonCall;
