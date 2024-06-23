import { createContext } from "react";


export const Individual = createContext(
    {
        id: '',
        getNewPokemonId: ()=>{},
        pokemonArray: {},
        pokemonDescription: {},
        pokemonEvolutionChain: {},
    }
);