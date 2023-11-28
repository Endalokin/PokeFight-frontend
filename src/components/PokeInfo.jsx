import React from 'react'
import { useParams } from 'react-router-dom'

export default function PokeInfo() {

    const {id, info} = useParams()

    return (
        <>
            <div>PokeInfo for {id} about {info}</div>
            <p>Super detailed view with only the names or the types and or the bases</p>
        </>
    )
}
