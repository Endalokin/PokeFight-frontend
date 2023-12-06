import React from 'react'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import StartBattle from './PokeList/StartBattle'

export const WholeContext = createContext()

export default function Root() {

    const [equippedPoke, setEquippedPoke] = useState("1")

    return (
        <WholeContext.Provider value = {{equippedPoke, setEquippedPoke}}>
            <header><h1 className="text-4xl m-6">PokeFight</h1></header>
            <main >
                <Outlet /> 
            </main>
        </WholeContext.Provider>
    )
}
