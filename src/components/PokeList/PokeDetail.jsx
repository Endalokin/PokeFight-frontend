import React from 'react'
import { useParams } from 'react-router-dom'

export default function PokeDetail({detailPokemon}) {

    const {id} = useParams()

    return (
        <>
            <div>PokeDetail for {id}</div>
            <p>Detailed view with the name, type and base</p>
        </>
    )
}
