// Import Packages
import axios from "axios";

// API Link
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// API Call -> Get the pokemon by id
const PokemonCallSingle = (id: number) => {
  return axios.get(`${BASE_URL}/${id}`).then((response) => {
    return response;
  });
};

export default PokemonCallSingle;
