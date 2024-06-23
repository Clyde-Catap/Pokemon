import { useContext, useEffect, useState } from 'react';
import EvolvesTo from './EvolvesTo';
import { Individual } from '../../../store/PokemonContext';

export default function Evolutions() {
    const [currentEvolutionArray, setCurrentEvolutionArray] = useState(null);
    const outerDiv = "p-2";
    const infoDiv = "card bg-sky-950 shadow-xl";
    const { pokemonDescription } = useContext(Individual);

    useEffect(() => {
        if (pokemonDescription && pokemonDescription.evolution_chain && pokemonDescription.evolution_chain.url) {
            const regex = /evolution-chain\/(\d+)\//;
            const match = pokemonDescription.evolution_chain.url.match(regex);
            if (match) {
                const evolutionChainId = match[1];
                getPokemonEvolutionChain(evolutionChainId);
            }
        }
    }, [pokemonDescription]);

    async function getPokemonEvolutionChain(pokemonEvolutionId) {
        try {
            const response = await fetch(`http://localhost/api/v2/evolution-chain/${pokemonEvolutionId}/`);
            if (!response.ok) {
                throw new Error("Failed to fetch evolution chain data");
            }
            const responseData = await response.json();
            setCurrentEvolutionArray(responseData);
        } catch (error) {
            console.error("Error fetching data:", error.message);
            // Handle the error, such as setting an error state or retrying
        }
    }

    return (
        <div className={outerDiv}>
            <div className={infoDiv}>
                <div className="card-body">
                    <h2 className="card-title text-black">Evolutions:</h2>
                    <EvolvesTo evolvesToArray={currentEvolutionArray} />
                </div>
            </div>
        </div>
    );
}
