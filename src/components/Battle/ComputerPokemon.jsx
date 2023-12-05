import React, { useEffect, useState } from 'react';

const ComputerPokemon = ({ pokemonId, onStatsChange, computerStats, setComputerStats }) => {


  useEffect(() => {
    const fetchComputerStats = async () => {
      try {
        const response = await fetch(`https://pokefightapi.onrender.com/pokemon/${pokemonId}`);
        const data = await response.json();


        const { Attack, Defense, HP } = data.base;
        const stats = { Attack, Defense, HP };

        setComputerStats(stats);
        onStatsChange(stats);

      } catch (error) {
        console.error('Error fetching Pokemon stats:', error);
      }
    };

    fetchComputerStats();
  }, [pokemonId, onStatsChange]);

  if (!computerStats) {
    return <p>Loading Computer stats...</p>;
  }

  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
        alt={`Pokemon with ID ${pokemonId}`}
        style={{ display: 'inline' }}
      />
      <p>Attack: {computerStats.Attack}</p>
      <p>Defense: {computerStats.Defense}</p>
      <p>Health: {computerStats.HP}</p>
    </div>
  );
};

export default ComputerPokemon;
