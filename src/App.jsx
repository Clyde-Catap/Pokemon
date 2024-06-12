import { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer';
import Content from './components/Content/Content';
import { Individual } from './store/PokemonContext';
import getPokemon from './requests/requestManager';

function App() {
  const primaryDiv = "flex flex-col min-h-screen";
  const randomNumber = Math.floor(Math.random() * 1026);
  const [currentPokemonId, getNewPokemonId] = useState(randomNumber);

  function getRandomPokemon (id){
      getNewPokemonId(id)
      getPokemon(currentPokemonId)
  }
  useEffect(()=>{
    getPokemon(currentPokemonId)
  }, []);


  const individualContext = {
      id: currentPokemonId,
      getNewPokemonId: getRandomPokemon
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
