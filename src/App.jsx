import { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer';
import Content from './components/Content/Content';
import { Individual } from './store/PokemonContext';

function App() {
  const primaryDiv = "flex flex-col min-h-screen";
  const randomNumber = Math.floor(Math.random() * 1026);
  const [currentPokemonId, setNewPokemonId] = useState(randomNumber);
  const [currentPokemon, setNewPokemon] = useState({});
  const [currentPokemonDescription, setNewPokemonDescription] = useState({});
  const [currentPokemonEvolutionChain, setNewPokemonEvolutionChain] = useState({});
  const [loading, setLoading] = useState(true);
  const individualContext = {
    id: currentPokemonId,
    getNewPokemonId: getRandomPokemon,
    pokemonArray: currentPokemon,
    pokemonDescription: currentPokemonDescription,
}



  // retrieve pokemon data from api
  async function getPokemon(pokemon) {
    try {
      const response = await fetch(`http://localhost/api/v2/pokemon/${pokemon}/`);
      if (!response.ok) {
        throw new Error("Something went wrong when retrieving data");
      }
      const responseData = await response.json();
      setNewPokemon(responseData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // Handle the error, such as setting an error state
    }
  }

    // retrieve pokemon description data from api
    async function getPokemonDescription(pokemon) {
      try {
        const response = await fetch(`http://localhost/api/v2/pokemon-species/${pokemon}/`);
        if (!response.ok) {
          throw new Error("Something went wrong when retrieving data");
        }
        const responseData = await response.json();
        setNewPokemonDescription(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle the error, such as setting an error state
      }
    }






  // passed Function
  function getRandomPokemon (id){
    setNewPokemonId(id)
    getPokemon(id)
    getPokemonDescription(id)
  }


  useEffect(()=>{
    getPokemon(randomNumber);
    getPokemonDescription(randomNumber)
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Render a loading state while fetching data
  }


  return (
    <Individual.Provider value={individualContext}>
          <div className={primaryDiv}>
            <NavigationBar></NavigationBar>
            <Content></Content>
            <Footer></Footer>
          </div>
    </Individual.Provider>

  )
}

export default App
