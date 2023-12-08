import React, {useEffect, useState} from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import fetchData from '../../utils/fetchAPI'

export default function Leaderboard() {

 /*    const player = [
        {
            id: 7,
            name: "Shiggy",
            won: 2,
            lost: 6
        },
        {
            id: 1,
            name: "Bisasam",
            won: 3,
            lost: 6
        },
        {
            id: 25,
            name: "Pikachu",
            won: 7,
            lost: 4
        }
    ] */

    const [player, setPlayer] = useState([        {
        id: 25,
        name: "Pikachu",
        wins: 7,
        loses: 4
    }])

    function comparefn(a, b) {
        return b.won - a.won
    }

    function getLeaderboard(data) {
        setPlayer(data)
        player.sort(comparefn)
    }

    useEffect(() => {
        fetchData("https://pokefightapi.onrender.com/game/leaderboard", getLeaderboard)
    }, [])





    return (
        <div className="bg-white p-8 rounded-md w-full">

            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <TableHead />
                            <tbody>
                                <TableRow participant={player[0]} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
