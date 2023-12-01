import React from 'react'
import { pokemons } from '../../../utils/pokemons'

export default function TypFilter({ setPokeList }) {

    const pokeTypes = [
        "Fire",
        "Plant",
        "Water",
        "Crazy"
    ]

    function filterPokemons(e) {
        setPokeList(pokemons.filter(p => {
            return p.type == e.target.id
        }))
    }

    function clearFilters(e) {
        e.preventDefault()
        setPokeList(pokemons)
    }

    return (
        <>
            <div>Pokemon-Types</div>
            {pokeTypes.map(p => {
                return <div id={p} onClick={filterPokemons}>{p}</div>
            })}
            <button onClick={clearFilters}>Clear Filter</button>
        </>
    )
}
