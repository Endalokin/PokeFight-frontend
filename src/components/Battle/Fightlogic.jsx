import React, { useState, useEffect } from 'react';
import ProgressBar from './Progressbar';

const calculateDamage = (attack, defense, randomFactor) => {
  const minimumDamage = 5;
  const damage = Math.max(minimumDamage, (attack - defense) * randomFactor);
  return Math.round(damage);
};

const initialAttackerState = { name: 'Player', attack: 10, defense: 5, health: 100 };
const initialDefenderState = { name: 'Computer', attack: 8, defense: 8, health: 100 };



const BattleComponent = ({computerStats, playerStats}) => {
 
  const [attacker, setAttacker] = useState();
  const [defender, setDefender] = useState();
  const [battleLog, setBattleLog] = useState([]);
  const [battleInProgress, setBattleInProgress] = useState(true);
  
  if(computerStats != null && playerStats != null){
    setDefender(computerStats)
    setAttacker(playerStats)
  }
  console.log("computer-fightlogic", attacker)

  useEffect(() => {
    const startBattle = () => {
      const randomFactor = 2;

      const damageDealtByAttacker = calculateDamage(attacker.attack, defender.defense, randomFactor);
      const damageDealtByDefender = calculateDamage(defender.attack, attacker.defense, randomFactor);

      const newAttacker = { ...attacker, health: Math.max(0, attacker.health - damageDealtByDefender) };
      const newDefender = { ...defender, health: Math.max(0, defender.health - damageDealtByAttacker) };

      setAttacker(newAttacker);
      setDefender(newDefender);

      const battleRoundLog = {
        attackerDamage: damageDealtByAttacker,
        defenderDamage: damageDealtByDefender,
        attackerHealth: newAttacker.health,
        defenderHealth: newDefender.health,
      };

      setBattleLog((prevLog) => [...prevLog, battleRoundLog]);

      if (newAttacker.health <= 0 || newDefender.health <= 0) {
        setBattleInProgress(false);

        const pointsGained = newAttacker.health > newDefender.health ? 100 : -50;
        setAttacker((prevAttacker) => ({ ...prevAttacker, points: prevAttacker.points + pointsGained }));
      }
    };

    const battleInterval = setInterval(() => {
      if (battleInProgress) {
        startBattle();
      }
    }, 500);

    return () => clearInterval(battleInterval);
  }, [attacker, defender, battleInProgress]);

  const handleReset = () => {
    setAttacker((prevAttacker) => ({ ...prevAttacker, ...initialAttackerState, points: prevAttacker.points }));
    setDefender((prevDefender) => ({ ...prevDefender, ...initialDefenderState, points: prevDefender.points }));
    setBattleLog([]);
    setBattleInProgress(true);
  };

  return (
    <div>
      <h2>{`${attacker?.name} vs. ${defender?.name}`}</h2>
      <p>
        {`${attacker?.name} Gesundheit: ${attacker?.health || 0}, Punkte: ${attacker?.points}`}
        <ProgressBar value={attacker?.health} max={initialAttackerState?.health} />
      </p>
      <p>
        {`${defender?.name} Gesundheit: ${defender?.health || 0}, Punkte: ${defender?.points}`}
        <ProgressBar value={defender?.health} max={initialDefenderState?.health} />
      </p>
      {!battleInProgress && (
        <div>
          <p>Kampf beendet!</p>
          <button onClick={handleReset}>Neustart</button>
        </div>
      )}
    </div>
  );
};

export default BattleComponent;
