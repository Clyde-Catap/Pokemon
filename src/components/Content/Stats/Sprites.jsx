import right from '../../../assets/right.png';
import left from '../../../assets/left.png';
import { Individual } from '../../../store/PokemonContext';
import { useContext } from 'react';
import Abilities from './Abilities';
import Type from './Types';
import fighting from '../../../assets/types/fighting.webp';
export default function Sprites()
{
    const {id,getNewPokemonId, pokemonArray} = useContext(Individual);
    const spritesDiv = "w-3/6 p-4";
    const pictureOuterDiv = "flex justify-center p-4";
    const pictureDiv = "card w-96 bg-base-100 shadow-xl p-4 flex-grow";
    const buttonDiv = "flex items-center p-10";
    const imageSize = "h-60 w-60 rounded-xl"
    const typeDiv = "p-5 flex items-center justify-center"
    const pokemonImage = pokemonArray['sprites']['front_default'];



    return(
        <div className={spritesDiv}>
            <div className={pictureOuterDiv}>
                <div className={buttonDiv}>
                    <button className="btn btn-circle">
                        <img src={left} alt="custom icon" className="w-full h-full" />                    
                    </button>
                </div>
                <div className={pictureDiv}>
                    <figure className="px-50 pt-50">
                        <img src={pokemonImage} alt={pokemonArray['name']} className={imageSize} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{pokemonArray['name'] ?? 'unknown'}</h2>
                        <div className={typeDiv}>
                            <Type typesArray={pokemonArray['types']}></Type>
                        </div>
                    </div>
                </div>
                <div className={buttonDiv}>
                    <button className="btn btn-circle">
                        <img src={right} alt="custom icon" className="w-full h-full" />                    
                    </button>
                </div>
            </div>
        </div>
    );
}