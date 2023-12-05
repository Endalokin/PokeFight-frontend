import React from 'react'

export default function TypFilter({ setPokeList, pokeList, allPokemons, setMaxEntry }) {

    const pokeTypes = [
        "Bug",
        "Electric",
        "Fire",
        "Flying",
        "Ground",
        "Normal",
        "Poison",
        "Water"

    ]
    function filterPokemons(e) {
        setPokeList(allPokemons)
        setPokeList((prev) => prev.filter(p => {
            return p.type[0] == e.target.id
        }))
        setMaxEntry(15)
    }
    function clearFilters(e) {
        e.preventDefault()
        setPokeList(allPokemons)
        setMaxEntry(15)
    }

    return (
        <>
            <div>Pokemon-Types</div>
            <div>
                {pokeTypes.map(p => {
                    return <button className='border-2 border-orange-200 rounded-full m-2 my-2 p-2 self-start' id={p} onClick={filterPokemons}>{p}</button>
                })}
            </div>
            <button onClick={clearFilters} className="border-2 border-rose-500 rounded-full my-2 py-2 px-4" style={{ display: "block" }}>Clear Filter</button>
        </>
    )
}
