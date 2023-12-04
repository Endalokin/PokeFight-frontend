import React from 'react'

const ComputerPokemon = ({pokemon}) => {

    const HP = 150
    const angriff = 100
    const verteidigung = 50

    if(pokemon === null) return 
    const name = pokemon.name
    const image = pokemon.sprites.other.dream_world.front_default
  return (
    <div>
        <img src={image} alt="Pokemon2" width="200px" />
        <p>{name}</p>
        <p>{HP}</p>
    </div>
  )
}

export default ComputerPokemon
