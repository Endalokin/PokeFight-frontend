import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import FilterSlideOver from './FilterSlideOver'
import fetchData from '../../utils/fetchApi'
import StartBattle from './StartBattle'
import Pager from './Pager'

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
        fetchData("https://pokefightapi.onrender.com/pokemon", addPokeFromApi)
    }, [])

    const [maxEntry, setMaxEntry] = useState(15)

    return (
        <>
            <FilterSlideOver showOverlay={showOverlay} toggleFilterOverlay={toggleFilterOverlay} setPokeList={setPokeList} pokeList={pokeList} allPokemons={allPokemons} setMaxEntry={setMaxEntry} />
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="container col-span-2 bg-red-600 flex flex-col justify-around">
                    <button onClick={toggleFilterOverlay} className='border-2 border-orange-200 rounded-r-full m-2 my-2 p-2 text-orange-200 self-start'>Open Filter</button>
                    <div className="grid grid-cols-5">
                        {pokeList.filter((d) => pokeList.indexOf(d) < maxEntry && pokeList.indexOf(d) >= maxEntry - 15).map(p => {
                            p.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`
                            return <Link to={`pokemon/${p.id}`} ><img src={p.img} id={p.name.english} alt={p.name.english} /></Link>
                        })}
                    </div>
                    {/* auslagern in Komponente: */}
                    <div className="flex justify-between">
                    <Pager direction="prev" maxEntry={maxEntry} setMaxEntry={setMaxEntry} />
                    <Pager direction="next" maxEntry={maxEntry} setMaxEntry={setMaxEntry} />
                    </div>
                </div>
                <div className="container col-span-1 bg-orange-200 flex flex-col items-center justify-around"><Outlet /></div>
            </div>
            <StartBattle />

        </>
    )
}
