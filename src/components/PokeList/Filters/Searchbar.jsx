import React from 'react'

export default function Searchbar({ allPokemons, setPokeList, setMaxEntry }) {

    function filterPokemons(e) {
        console.log(e.target.value)
        setPokeList(allPokemons)
        setPokeList((prev) => prev.filter(p => {
            if (p.name.english.includes(e.target.value)) {
                return p
            }
        }))
        setMaxEntry(15)
    }

    return (
        <div class=" flex items-center justify-between pb-6 mx-2 ">
            <div class="flex items-center justify-between">
                <div class="flex items-center p-2 rounded-full border-b-2 border-orange-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-200" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                    <input class="bg-red-600 text-orange-200 placeholder:text-orange-200 outline-none ml-1 block" type="text" name="" id="" placeholder="search..." onChange={filterPokemons} />
                </div>
            </div>
        </div>
    )
}
