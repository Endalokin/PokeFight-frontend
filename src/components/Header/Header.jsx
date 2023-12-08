import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="flex justify-between m-6 items-center ">
            <Link to="/"><h1 className="text-4xl ">PokeFight</h1></Link>
            <div>
                <Link to="/" className='border-2 rounded-full px-12 py-4 mx-2'>Pokedex</Link>
                <Link to="/leaderboard" className='border-2 rounded-full px-12 py-4 mx-2'>Leaderboard</Link>
            </div>
        </header>
    )
}
