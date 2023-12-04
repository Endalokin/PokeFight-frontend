import React from 'react'

const PlayerPokemon = ({pokemon}) => {

  const HP = 150
  const attack = 100
  const defense = 50

    if(pokemon === null) return 
    const name = pokemon.name
    const image = pokemon.sprites.other.dream_world.front_default
  return (
    <div>
        <img src={image} alt="Pokemon1" width="150px"/>
        <p>{name}</p>
        <p>{HP}</p>
    </div>
  )
}

export default PlayerPokemon
