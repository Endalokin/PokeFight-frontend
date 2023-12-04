import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../utils/fetchApi'
import { WholeContext } from '../root'

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
            <div className="text-center">{id} - {details?.name?.english}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details?.id}.png`} alt={`Image of ${details?.name?.english}`} />
            <p className="text-center">Type: {details?.type?.join(", ")}</p>
            <table>
                <tr>
                    <td>HP:</td>
                    <td>{details?.base?.HP}</td>
                </tr>
                <tr>
                    <td>Attack:</td>
                    <td>{details?.base?.Attack}</td>
                </tr>
                <tr>
                    <td>Defense:</td>
                    <td>{details?.base?.Defense}</td>
                </tr>
                <tr>
                    <td>Sp. Attack:</td>
                    <td>{details?.base && details?.base["Sp. Attack"]}</td>
                </tr>
                <tr>
                    <td>Sp. Defense:</td>
                    <td>{details?.base && details?.base["Sp. Defense"]}</td>
                </tr>
                <tr>
                    <td>Speed:</td>
                    <td>{details?.base?.Speed}</td>
                </tr>
            </table>
            <button onClick={changeEquippedPoke} className="border-2 border-rose-500 rounded-full mx-auto my-2 px-12 py-4" style={{ display: "block" }}>Equip</button>
        </>
    )
}
