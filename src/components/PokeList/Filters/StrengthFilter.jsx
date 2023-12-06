import React, { useState } from 'react'

export default function StrengthFilter({ setPokeList, pokeList, allPokemons, setMaxEntry }) {

  const maxHp = 190
  const [hpValue, setHpValue] = useState(maxHp)

  function handleChange(e) {
    setHpValue(parseInt(e.target.value))
    setPokeList(allPokemons)
    if (hpValue != maxHp) {
      setPokeList((prev) => prev.filter(p => {
        return (hpValue - 20) < p.base.HP && p.base.HP < (hpValue + 20)
      }))
    }
    setMaxEntry(15)
  }


  return (
    <div className="slidecontainer">
      <h3 className="m-4">HP</h3>
      <input type="range" min="1" max="maxHp" value={hpValue} className="slider my-6" id="myRange" onChange={handleChange} />
    </div>
  )
}
