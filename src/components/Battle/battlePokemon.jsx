import React, { useState } from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";


const BattlePokemon = (props) =>{

    //const URL = `https://pokeapi.co/api/v2/pokemon/`
    const computerId = props.num
    const [pokemonDataPlayer, setPokemonDataPlayer] = useState(null)
    const [pokemonDataComputer, setPokemonDataComputer] = useState(null)
    const [error, setError] = useState(null)

    
    return (
        <div>
            <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1">
            <div className="col-span-2">
            <PlayerPokemon />
            </div>
            <div className="col-span-2">
            <ComputerPokemon />
            </div>
            </div>
        </div>
        )
}

export default BattlePokemon