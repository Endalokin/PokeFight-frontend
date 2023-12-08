import React from 'react'

export default function TableHead() {
    return (
        <thead>
            <tr>
                <th
                    className="px-5 py-3 text-lg border-b-2 border-gray-200 bg-red-600 text-left text-lg font-semibold text-orange-200 uppercase tracking-widest">
                    Name
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-red-600 text-left text-lg font-semibold text-orange-200 uppercase tracking-widest">
                    Score
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-red-600 text-left text-lg font-semibold text-orange-200 uppercase tracking-widest">
                    Won
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-red-600 text-left text-lg font-semibold text-orange-200 uppercase tracking-widest">
                    Lost
                </th>
            </tr>
        </thead>
    )
}
