import React, { useEffect, useState } from "react";

const ComputerPokemon = ({ pokemonId, computerStats, setComputerStats }) => {
  const [computerName, setComputerName] = useState("");

  useEffect(() => {
    const fetchComputerStats = async () => {
      try {
        const response = await fetch(
          `https://pokefightapi.onrender.com/pokemon/${pokemonId}`
        );
        const data = await response.json();

        const { Attack, Defense, HP } = data.base;
        const computerName = data.name.english;
        const stats = { Attack, Defense, HP };

        setComputerStats(stats);
        setComputerName(computerName);
      } catch (error) {
        console.error("Error fetching Pokemon stats:", error);
      }
    };

    fetchComputerStats();
  }, [pokemonId]);

  if (!computerStats) {
    return <p>Loading Computer stats...</p>;
  }

  return (
    <div>
      <div className="text-4xl">
        <h1>{computerName}</h1>
      </div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
        alt={`Pokemon with ID ${pokemonId}`}
        style={{ display: "inline" }}
      />

      <p className="font-medium text-2xl">
        Attack: <span>{computerStats.Attack}</span>
      </p>
      <p className="font-medium text-2xl">
        Defense: <span>{computerStats.Defense}</span>
      </p>
      <p className="font-medium text-2xl">
        Health: <span>{computerStats.HP}</span>
      </p>
      <br />
    </div>
  );
};

export default ComputerPokemon;
