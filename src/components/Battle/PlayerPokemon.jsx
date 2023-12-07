import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { WholeContext } from '../root'


const PlayerPokemon = ({playerStats, setPlayerStats}) => {
  const [playerName, setPlayerName] = useState("")
  const { equippedPoke } = useContext(WholeContext)
  
  useEffect(() => {
    const fetchPlayerStats = async () => {
      try {
        const response = await fetch(`https://pokefightapi.onrender.com/pokemon/${equippedPoke}`);
        const data = await response.json();

        const { Attack, Defense, HP } = data.base;
        const playerName = data.name.english; 
        const stats = { Attack, Defense, HP };

        setPlayerName(playerName)
        setPlayerStats(stats);
      } catch (error) {
        console.error('Error fetching Pokemon stats:', error);
      }
    };

    fetchPlayerStats();
  }, [equippedPoke]);

  if (!playerStats) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${equippedPoke}.png`} id={equippedPoke} style={{ display: "inline" }} />
        <h1>{playerName}</h1>
        <p>Attack: {playerStats.Attack}</p>
        <p>Defense: {playerStats.Defense}</p>
        <p>Health: {playerStats.HP}</p>
    </div>
  )
}

export default PlayerPokemon
