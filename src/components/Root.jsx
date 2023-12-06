import React from 'react'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import Header from './Header/Header'

export const WholeContext = createContext()

export default function Root() {

    const [equippedPoke, setEquippedPoke] = useState("150")

    return (
        <WholeContext.Provider value={{ equippedPoke, setEquippedPoke }}>
            
            <main >
                <Header />
                <Outlet />
            </main>
        </WholeContext.Provider>
    )
}
