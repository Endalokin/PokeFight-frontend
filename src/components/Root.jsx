import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
            <header><h1>PokeFight</h1></header>
            <main>
                <Outlet />
            </main>
            <footer>Footer this is</footer>
        </>
    )
}
