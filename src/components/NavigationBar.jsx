import SearchIcon from '../assets/Search-icon.svg';
import Grass from '../assets/Grass.jpg';
import { Individual } from '../store/PokemonContext';
import { useContext } from 'react';


export default function NavigationBar(){    


    const {getNewPokemonId} = useContext(Individual);

    function handleRandom(){
        let randomNumber = Math.floor(Math.random() * 1026);
        getNewPokemonId(randomNumber);
    }



    return (
        <header>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Pokemon Project</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Quiz</a></li>
                    <li><button onClick={handleRandom}>Random</button></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <button className="btn btn-circle">
                        <img src={SearchIcon} alt="custom icon" className="h-6 w-6" />                    
                    </button>
                    <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Pokeball" src={Grass} className="w-full h-full" />                        
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}