import { Individual } from '../../../store/PokemonContext';
import { useContext } from 'react';
import Abilities from './Abilities';

export default function Info()
{
    const outerDiv = "p-2";
    const infoDiv = "card bg-sky-950 shadow-xl";

    const {id,getNewPokemonId, pokemonArray, pokemonDescription} = useContext(Individual);

    return(
        <div className={outerDiv}>
            <div className={infoDiv}>
                <div className="card-body">
                    <h2 className="card-title text-black">Abilities:</h2>
                    <Abilities abilitiesArray={pokemonArray['abilities']}></Abilities>
                </div>
            </div>
        </div>
    );
}