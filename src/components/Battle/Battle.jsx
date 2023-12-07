import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BattleComponent from './Fightlogic';
import background from './battle-background.png';
import ComputerPokemon from './ComputerPokemon';
import PlayerPokemon from './PlayerPokemon';
import { randomNumberInRange } from '../../utils/pokeHandler';

const Battle = () => {
  const [pokemonId, setPokemonId] = useState();
  const [playerStats, setPlayerStats] = useState();
  const [computerStats, setComputerStats] = useState();
  const [nextFight, setNextFight]=useState(false)
  const [key, setKey] = useState(0);

  console.log("player", playerStats, "computer", computerStats)

  useEffect(() => {
    const randomNbr = randomNumberInRange()
    setPokemonId(randomNbr);
    console.log('Generated new Pokemon ID:', pokemonId);
  }, [nextFight]);

 
 const handleNextFight = () => {
    setNextFight(!nextFight)
    setKey(key + 1);
    console.log('Next Fight button clicked');
  }; 
 
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    minWidth: '150vh',
  };



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
      {computerStats != null && playerStats != null ? <BattleComponent key={key} playerStats={playerStats} computerStats={computerStats}/>: <div>Battle preperation...</div>} 
      {/*<button onClick={handleNextFight}>Start</button>*/}
      <br />      
      <div className="grid grid-cols-4 gap-4">
        <button className="border-2 border-rose-500 rounded-s-full" onClick={handleNextFight} >
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
