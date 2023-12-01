import React from 'react'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import Footer from './Footer/Footer'

export const WholeContext = createContext()

export default function Root() {

    const [equippedPoke, setEquippedPoke] = useState("Pikachu")

    return (
        <WholeContext.Provider value = {{equippedPoke, setEquippedPoke}}>
            <header><h1>PokeFight</h1></header>
            <main>
                <Outlet /> 
            </main>
            <Footer />
        </WholeContext.Provider>
    )
}
