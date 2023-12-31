import React from 'react'
import { useContext } from 'react'
import { WholeContext } from '../Root'
import { Link } from 'react-router-dom'

export default function StartBattle() {
  const { equippedPoke } = useContext(WholeContext)
  return (
    <button className="border-2 border-rose-500 rounded-full mx-auto my-2 py-2 px-4" style={{ display: "block" }}>
      <Link to="/battle">
        Start Battle
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${equippedPoke}.png`} id={equippedPoke} className="h-24" style={{ display: "inline" }} />
      </Link>
    </button>
  )
}
