import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'

export default function Leaderboard() {

    const player = [
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
    ]

    function comparefn(a, b) {
        return b.won - a.won
    }

    player.sort(comparefn)

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
                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
