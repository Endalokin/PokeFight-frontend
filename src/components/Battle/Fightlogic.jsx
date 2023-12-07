import React, { useState, useEffect } from "react";
import { calculateDamage } from "../../utils/pokeFightHandler";
import ProgressBar from "./Progressbar";

const BattleComponent = ({ computerStats, playerStats }) => {
  const [attacker, setAttacker] = useState({ ...playerStats, points: 0 });
  const [defender, setDefender] = useState({ ...computerStats, points: 0 });
  const [battleLog, setBattleLog] = useState([]);
  const [battleResult, setBattleResult] = useState(null);
  const [battleInProgress, setBattleInProgress] = useState(true);

  const startBattle = () => {
    const randomFactor = 2;

    const damageDealtByAttacker = calculateDamage(
      attacker.Attack,
      defender.Defense,
      randomFactor
    );
    const damageDealtByDefender = calculateDamage(
      defender.Attack,
      attacker.Defense,
      randomFactor
    );

    setAttacker((prevAttacker) => ({
      ...prevAttacker,
      HP: Math.max(0, prevAttacker.HP - damageDealtByDefender),
    }));
    setDefender((prevDefender) => ({
      ...prevDefender,
      HP: Math.max(0, prevDefender.HP - damageDealtByAttacker),
    }));

    if (attacker.HP <= 0 || defender.HP <= 0) {
      setBattleInProgress(false);

      const pointsGained = attacker.HP > defender.HP ? 100 : -50;
      setAttacker((prevAttacker) => ({
        ...prevAttacker,
        points: prevAttacker.points + pointsGained,
      }));

      if (pointsGained > 0) {
        setBattleResult("won");
      } else {
        setBattleResult("lost");
      }
    }
  };

  useEffect(() => {
    const battleInterval = setInterval(() => {
      if (battleInProgress) {
        startBattle();
      }
    }, 1000);

    return () => clearInterval(battleInterval);
  }, [attacker, defender, battleInProgress]);

  const handleReset = () => {
    setAttacker({ ...playerStats, points: attacker.points });
    setDefender({ ...computerStats, points: defender.points });
    setBattleLog([]);
    setBattleInProgress(true);
  };

  return (
    <div>
      <div className="grid grid-flow-row-dense grid-cols-9">
        <div className="col-span-4 text-2xl font-medium">
          <p>
            {`Gesundheit: ${attacker.HP || 0}, Punkte: ${attacker.points}`}
            <ProgressBar value={attacker.HP} max={playerStats.HP} />
          </p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-4 text-2xl font-medium">
          <p>
            {`Gesundheit: ${defender.HP || 0}, Punkte: ${defender.points}`}
            <ProgressBar value={defender.HP} max={computerStats.HP} />
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>
      {!battleInProgress && (
        <div className="flex justify-center text-4xl text-red-600">
          <h1>{battleResult === "won" ? "Gewonnen!" : "Verloren!"}</h1>
        </div>
      )}
    </div>
  );
};

export default BattleComponent;
