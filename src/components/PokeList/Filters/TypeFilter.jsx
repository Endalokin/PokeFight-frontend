import React, {useEffect, useState} from 'react'
import fetchData from '../../../utils/fetchApi'

export default function TypFilter({ setPokeList, pokeList, allPokemons, setMaxEntry }) {

    const [pokeTypes, setPokeTypes] = useState([
        "Bug",
        "Electric",
        "Fire",
        "Flying",
        "Ground",
        "Normal",
        "Poison",
        "Water"
    ])
    
    function filterPokemons(e) {
        setPokeList(allPokemons)
        setPokeList((prev) => prev.filter(p => {
            return p.type[0] == e.target.id
        }))
        setMaxEntry(15)
    }

    function addTypesFromApi(data) {
        setPokeTypes(data.types)
    }

    useEffect(() => {
        fetchData("https://pokefightapi.onrender.com/types", addTypesFromApi)
    }, [])

    return (
        <>
            <h3 className="m-4">Types</h3>
            <div>
                {pokeTypes.map(p => {
                    return <button className='border-2 border-orange-200 rounded-full m-2 my-2 p-2 self-start' id={p} onClick={filterPokemons}>{p}</button>
                })}
            </div>
        </>
    )
}
