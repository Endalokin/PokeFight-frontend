import React from 'react'
import TypeFilter from "./Filters/TypeFilter"

export default function FilterSlideOver({showOverlay, toggleFilterOverlay, setPokeList}) {

    return (
        <div className={`fixed inset-0 overflow-hidden ${showOverlay}`}  id="filterOverlay">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-20 right-0 flex max-w-full pl-10">
                    <div className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Filter</h2>
                                    <div className="ml-3 flex h-7 items-center">
                                        <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={toggleFilterOverlay}>
                                            <span className="absolute -inset-0.5"></span>
                                            <span className="sr-only">Close panel</span>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <TypeFilter setPokeList={setPokeList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
