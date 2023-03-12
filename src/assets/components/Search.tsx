export default function Search(props: {
  search: string;
  searchPokemon: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
        type="text"
        placeholder="Search"
        // Set the value of the input to the search state
        value={props.search}
        // When the user press enter, call the searchPokemon function
        onChange={props.searchPokemon}
      />
    </>
  );
}
