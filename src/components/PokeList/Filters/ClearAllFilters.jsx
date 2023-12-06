import React from 'react'

export default function ClearAllFilters({setPokeList, allPokemons, setMaxEntry}) {
    function clearFilters(e) {
        e.preventDefault()
        setPokeList(allPokemons)
        setMaxEntry(15)
    }
    return (
        <button onClick={clearFilters} className="border-2 border-rose-500 rounded-full my-2 py-2 px-4" style={{ display: "block" }}>Clear Filter</button>
    )
}
