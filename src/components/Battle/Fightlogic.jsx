import { useState, useEffect } from 'react';
import { calculateDamage } from '../../utils/pokeFightHandler';
import ProgressBar from './Progressbar';

const BattleComponent = ({ computerStats, playerStats }) => {
  
    const [attacker, setAttacker] = useState(playerStats);
    const [defender, setDefender] = useState(computerStats);

    const [battleLog, setBattleLog] = useState([]);
    const [battleInProgress, setBattleInProgress] = useState(true);

    const startBattle = () => {
      const randomFactor = 2;

      const damageDealtByAttacker = calculateDamage(attacker.Attack, defender.Defense, randomFactor);
      const damageDealtByDefender = calculateDamage(defender.Attack, attacker.Defense, randomFactor);

    
      setAttacker({ ...attacker, HP: Math.max(0, attacker.HP - damageDealtByDefender) })
      setDefender({ ...defender, HP: Math.max(0, defender.HP - damageDealtByAttacker) })
      
      /* const battleRoundLog = {
        attackerDamage: damageDealtByAttacker,
        defenderDamage: damageDealtByDefender,
        attackerHealth: newAttacker.health,
        defenderHealth: newDefender.health,
      }; */

      /*  setBattleLog((prevLog) => [...prevLog, battleRoundLog]); */
   
          if (attacker.HP <= 0 || defender.HP <= 0) {
            setBattleInProgress(false);
      
            const pointsGained = attacker.HP > defender.HP ? 100 : -50;
            //TODO mongoDB request
            console.log("points gained",pointsGained)
            /* setAttacker((prevAttacker) => ({ ...prevAttacker, points: prevAttacker.points + pointsGained })); */
          } 
    };

    useEffect(() => {

      const battleInterval = setInterval(() => {
        if(battleInProgress){
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
          {`${attacker?.name} Gesundheit: ${attacker?.HP || 0}, Punkte: ${attacker?.points}`}
          {/*<ProgressBar value={attacker?.health} max={initialAttackerState?.health} />*/}
        </p>
        <p>
          {`${defender?.name} Gesundheit: ${defender?.HP || 0}, Punkte: ${defender?.HP}`}
          {/*<ProgressBar value={defender?.health} max={initialDefenderState?.health} />*/}
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
