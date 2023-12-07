import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../utils/fetchAPI'
import { WholeContext } from '../Root'

export default function PokeDetail({ detailPokemon }) {

    const { id } = useParams()
    const [details, setDetails] = useState({})
    const { setEquippedPoke } = useContext(WholeContext)

    function addPokeFromApi(data) {
        setDetails(data)
    }

    function changeEquippedPoke() {
        setEquippedPoke(id)
    }

    useEffect(() => {
        fetchData(`https://pokefightapi.onrender.com/pokemon/${id}`, addPokeFromApi)
    }, [id])


    return (
        <>
            <h2 className="text-2xl">{id} - {details?.name?.english}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details?.id}.png`} alt={`Image of ${details?.name?.english}`}/>
            <p className="text-center">Type: {details?.type?.join(", ")}</p>
            <div className="grid grid-cols-2 max-w-xs mx-auto 2xl:gap-3 gap-0">
                <div className="px-6 font-medium text-gray-900 whitespace-nowrap">HP:</div>
                <div className="px-6 text-center">{details?.base?.HP}</div>
                <div className="px-6 font-medium text-gray-900 whitespace-nowrap">Attack:</div>
                <div className="px-6 text-center">{details?.base?.Attack}</div>
                <div className="px-6 font-medium text-gray-900 whitespace-nowrap">Defense:</div>
                <div className="px-6 text-center">{details?.base?.Defense}</div>
                <div className="px-6  font-medium text-gray-900 whitespace-nowrap">Sp. Attack:</div>
                <div className="px-6 text-center">{details?.base && details?.base["Sp. Attack"]}</div>
                <div className="px-6  font-medium text-gray-900 whitespace-nowrap">Sp. Defense:</div>
                <div className="px-6 text-center">{details?.base && details?.base["Sp. Defense"]}</div>
                <div className="px-6  font-medium text-gray-900 whitespace-nowrap">Speed:</div>
                <div className="px-6 text-center">{details?.base?.Speed}</div>
            </div>
            <button onClick={changeEquippedPoke} className="border-2 border-rose-500 rounded-full mx-auto my-2 px-12 py-4" style={{ display: "block" }}>Equip</button>
        </>
    )
}
