import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import BattlePokemon from './battlePokemon'
import { useState } from 'react';
import BattleComponent from './Fightlogic';
import background from "./battle-background.png"

const Battle = () => {
    const [num, setNum] = useState(0); 
  
    const randomNumberInRange = (min, max) => { 
        return Math.floor(Math.random()  
                * (max - min + 1)) + min; 
    }; 
  
    const handleClick = () => { 
        setNum(randomNumberInRange(1, 809)); 
    }; 
  
    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      minWidth: "150vh" 
    };

  return (
    <>
    <div style={backgroundStyle}>
        <h1>Hello Battle</h1>
        <BattlePokemon num={num}/>
        <BattleComponent />
        <button onClick={handleClick}>Start</button><br />
        <div class="grid grid-cols-4 gap-4">
            <p>+100 Points</p>
            <button class="border-2 border-rose-500 rounded-s-full">Next Fight</button>
            <button class="border-2 border-rose-500 rounded-r-full"><Link to="/">Back to Pokedex</Link></button>
        </div>
    </div>
    </>
  );
};
export default Battle