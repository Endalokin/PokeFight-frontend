import React, { useEffect, useState } from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";


const BattlePokemon = (props) =>{

    const URL = `https://pokeapi.co/api/v2/pokemon/`
    const computerId = props.num
    const [pokemonDataPlayer, setPokemonDataPlayer] = useState(null)
    const [pokemonDataComputer, setPokemonDataComputer] = useState(null)
    const [error, setError] = useState(null)

    const fetchPlayerPokemon = async() => {
        
        try{
            const playerPokemonId = 104
            const fetchData = await fetch(URL + playerPokemonId) // hier noch mit id ersetzen
            const json = await fetchData.json()
            setPokemonDataPlayer(json)
            
        } catch (err) {

            console.error(err)
            setError("no such pokemon")
        
        }
    }

    const fetchComputerPokemon = async() => {
        
        try{
            
            const fetchData = await fetch(URL + computerId) // hier noch mit id ersetzen
            const json = await fetchData.json()
            setPokemonDataComputer(json)
        
        } catch (err) {

            console.error(err)
            setError("no such pokemon")
        }
    }
    useEffect(() => { 
        fetchPlayerPokemon();
        fetchComputerPokemon();
}, )
    return (
        <div>
            {/* <form onSubmit={fetchPlayerPokemon}>
                <input type="submit" />
            </form> */}
            <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1">
            <div className="col-span-2">
            <PlayerPokemon pokemon={pokemonDataPlayer} />
            </div>
            <div className="col-span-2">
            <ComputerPokemon pokemon={pokemonDataComputer} />
            </div>
            </div>
        </div>
        )
}

export default BattlePokemon