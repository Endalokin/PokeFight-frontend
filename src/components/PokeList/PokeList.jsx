import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FilterSlideOver from './FilterSlideOver'
import { pokemons } from '../../utils/pokemons'

export default function PokeList() {

    const [showOverlay, setShowOverlay] = useState("invisible")
    const [typeFilter, setTypeFilter] = useState("")
    const [detailPokemon, setDetailPokemon] = useState("Pikachu")

    function toggleFilterOverlay(e) {
        e.preventDefault()
        showOverlay == "" ? setShowOverlay("invisible") : setShowOverlay("")
    }

    function changeDetailPokemon(e) {
        e.preventDefault()
        console.log(`${detailPokemon} changes to ${e.target.id}`)
        setDetailPokemon(e.target.id)
    }

    const [pokeList, setPokeList] = useState(pokemons)


    return (
        <>
            <div>PokeList</div>
            <FilterSlideOver showOverlay={showOverlay} toggleFilterOverlay={toggleFilterOverlay} setPokeList={setPokeList} />
            <div className="grid grid-cols-3">
                <div className="container col-span-2 bg-red-600">
                    <p>Returns all the pokemon names in a list and includes a link to the detailed view  </p>
                    <button onClick={toggleFilterOverlay}>Open Filter</button>
                    <div className="grid grid-cols-4">
                        {pokeList.map(p => {
                            return <div id={p.name} onClick={changeDetailPokemon}>{p.name}</div>
                        })}
                    </div>
                </div>
                <div className="container col-span-1 bg-orange-200"><Outlet /></div>
            </div>

        </>
    )
}
