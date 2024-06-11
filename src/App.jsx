import { useState, useEffect } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer';
import Content from './components/Content/Content';

function App() {
  const primaryDiv = "flex flex-col min-h-screen"
  useEffect(() => {
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
    getPokemon('bulbasaur');
  }, []); // empty dependency array means this effect runs only once on mount

  return (
    <div className={primaryDiv}>
      <NavigationBar></NavigationBar>
      <Content></Content>
      <Footer></Footer>
    </div>

  )
}

export default App
