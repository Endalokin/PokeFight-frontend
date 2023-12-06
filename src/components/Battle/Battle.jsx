import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BattleComponent from './Fightlogic';
import background from './battle-background.png';
import ComputerPokemon from './ComputerPokemon';
import PlayerPokemon from './PlayerPokemon';

const Battle = () => {
  const [pokemonId, setPokemonId] = useState(null);
  const [playerStats, setPlayerStats] = useState();
  const [computerStats, setComputerStats] = useState();

  console.log("player", playerStats, "computer", computerStats)

  useEffect(() => {
    generateRandomPokemon();
  }, []);

  const generateRandomPokemon = () => {
    const randomNumberInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const newID = randomNumberInRange(1, 809);
    setPokemonId(newID);
    console.log('Generated new Pokemon ID:', newID);
  };

  const handleNextFight = () => {
    generateRandomPokemon();
    console.log('Next Fight button clicked');
  };

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '150vh',
  };

  console.log('Rendered with Pokemon ID:', pokemonId);

  return (
    <div style={backgroundStyle}>
      <div>
            <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1">
            <div className="col-span-2">
            <PlayerPokemon playerStats={playerStats} setPlayerStats={setPlayerStats}/>
            </div>
            <div className="col-span-2">
            <ComputerPokemon pokemonId={pokemonId} computerStats={computerStats} setComputerStats={setComputerStats}/>
            </div>
            </div>
        </div>
      <BattleComponent playerStats={playerStats} computerStats={computerStats}/>
      <button onClick={handleNextFight}>Start</button>
      <br />      
      <div className="grid grid-cols-4 gap-4">
        <button className="border-2 border-rose-500 rounded-s-full" onClick={handleNextFight}>
          Next Fight
        </button>
        <button className="border-2 border-rose-500 rounded-r-full">
          <Link to="/">Back to Pokedex</Link>
        </button>
      </div>
    </div>
  );
};

export default Battle;
