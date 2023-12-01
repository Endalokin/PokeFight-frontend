import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import FilterSlideOver from './FilterSlideOver'
import fetchData from '../../utils/fetchApi'

export default function PokeList() {

    const [showOverlay, setShowOverlay] = useState("invisible")

    function toggleFilterOverlay(e) {
        e.preventDefault()
        showOverlay == "" ? setShowOverlay("invisible") : setShowOverlay("")
    }

    const [allPokemons, setAllPokemons] = useState([])
    const [pokeList, setPokeList] = useState([])
    function addPokeFromApi(data) {
        setPokeList(data)
        setAllPokemons(data)
    }

    useEffect(() => {
        fetchData("http://localhost:8080/pokemon/", addPokeFromApi)
    }, [])


    const [maxEntry, setMaxEntry] = useState(12)
    function showNext(e) {
        e.preventDefault()
        setMaxEntry(maxEntry + 12)
    }

    function showPrev(e) {
        e.preventDefault()
        setMaxEntry(maxEntry - 12)

    }

    return (
        <>
            <div>PokeList</div>
            <FilterSlideOver showOverlay={showOverlay} toggleFilterOverlay={toggleFilterOverlay} setPokeList={setPokeList} pokeList={pokeList} allPokemons={allPokemons} setMaxEntry={setMaxEntry} />
            <div className="grid grid-cols-3">
                <div className="container col-span-2 bg-red-600">
                    <p>Returns all the pokemon names in a list and includes a link to the detailed view  </p>
                    <button onClick={toggleFilterOverlay}>Open Filter</button>
                    <div className="grid grid-cols-4">
                        {pokeList.filter((d) => pokeList.indexOf(d) < maxEntry && pokeList.indexOf(d) >= maxEntry - 12).map(p => {
                            return <Link to={`pokemon/${p.name.english}`} style={{ color: 'lightgrey' }} ><div id={p.name.english}>{p.name.english}</div></Link>
                        })}
                    </div>
                    {/* auslagern in Komponente: */}
                    <button onClick={showPrev}>{`<<`}</button>
                    <button onClick={showNext}>{`>>`}</button>
                </div>
                <div className="container col-span-1 bg-orange-200"><Outlet /></div>
            </div>

        </>
    )
}
