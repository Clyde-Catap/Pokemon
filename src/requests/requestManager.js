export default function getPokemon(currentPokemonId)
{
    async function getPokemon(pokemon) {
        try {
          const response = await fetch(`http://localhost/api/v2/pokemon/${pokemon}/`);
          if (!response.ok) {
            throw new Error("Something went wrong when retrieving data");
          }
          const responseData = await response.json();
          console.log(responseData);
        } catch (error) {
          console.error("Error fetching data:", error.message);
          // Handle the error, such as setting an error state
        }
      }
  
      // Call getPokemon with the initial Pokemon
      getPokemon(currentPokemonId);
}