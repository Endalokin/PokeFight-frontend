import React from 'react'

export default function Pager({ direction, maxEntry, setMaxEntry }) {

    function showNext(e) {
        e.preventDefault()
        setMaxEntry(maxEntry + 15)
    }

    function showPrev(e) {
        e.preventDefault()
        setMaxEntry(maxEntry - 15)
    }

    let disabled = ""

    if (direction == "prev") {
        if (maxEntry <= 15) disabled = "true"
        return (
            <button onClick={showPrev} className='border-2 border-orange-200 rounded-l-full m-2 py-4 px-8 text-orange-200 disabled:invisible' disabled={disabled}>{`<<`}</button>
        )
    } else {
        /* Hier müsste auch noch ein disabled hin bei Erreichen des Endes der Liste */
        return (
            <button onClick={showNext} className='border-2 border-orange-200 rounded-r-full m-2 py-4 px-8 text-orange-200'>{`>>`}</button>
        )
    }

}
