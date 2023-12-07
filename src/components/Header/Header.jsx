import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="flex justify-between m-6 items-center ">
            <Link to="/"><h1 className="text-4xl ">PokeFight</h1></Link>
            <Link to="/leaderboard" className='border-2 rounded-full px-12 py-4'>Leaderboard</Link>
        </header>
    )
}
