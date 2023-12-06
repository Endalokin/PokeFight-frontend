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
                    products
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-red-600 text-left text-lg font-semibold text-orange-200 uppercase tracking-widest">
                    Created at
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-red-600 text-left text-lg font-semibold text-orange-200 uppercase tracking-widest">
                    QRT
                </th>
                <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-red-600 text-left text-lg font-semibold text-orange-200 uppercase tracking-widest">
                    Status
                </th>
            </tr>
        </thead>
    )
}
