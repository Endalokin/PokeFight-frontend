import React from 'react'

export default function TypFilter({ setPokeList, pokeList, allPokemons, setMaxEntry }) {

    const pokeTypes = [
        "Fire",
        "Water"
    ]
    function filterPokemons(e) {
        setPokeList(pokeList.filter(p => {
            return p.type[0] == e.target.id
        }))
        setMaxEntry(12)
    }
    function clearFilters(e) {
        e.preventDefault()
        setPokeList(allPokemons)
        setMaxEntry(12)
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
