import { Individual } from '../../../store/PokemonContext';
import { useContext } from 'react';
import Abilities from './Abilities';


export default function Description()
{
    const outerDiv = "p-2";
    const infoDiv = "card bg-sky-950 shadow-xl p-4";
    const {id,getNewPokemonId, pokemonArray, pokemonDescription} = useContext(Individual);
    const description = getFirstEnglishFlavorText(pokemonDescription['flavor_text_entries']);

    function getFirstEnglishFlavorText(flavorTextArray){
        for (let key in flavorTextArray) {
            if(flavorTextArray[key]['language']['name'] == 'en'){
                return flavorTextArray[key]['flavor_text'];
            } 

        }
    }
    return(
        <div className={outerDiv}>
            <div className={infoDiv}>
                <div className="card-body">
                    <h2 className="card-title text-black">Description:</h2>
                    <p className="text-black">{description}</p>
                    <div className="card-actions justify-end ">
                    </div>
                </div>
            </div>
        </div>
    );
}