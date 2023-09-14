import React, { useState } from 'react'

const SearchBar = ({ searchBeer }) => {

    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        searchBeer(text.replace(" ", "_"))
    }

    return (
        <div>
            <nav className='bg-purple-500 flex justify-between p-10 px-16 text-xl'>
                <h1 className='font-bold text-[3rem] text-white'>welcome</h1>
                <form onSubmit={handleSubmit} className='flex gap-3'>
                    <input type='text' name="text" value={text} onChange={handleChange} className='p-2 px-4 focus:outline-none' placeholder='Search here' />
                    <input type='submit' className='bg-white font-semibold rounded p-2 px-4' />
                </form>
            </nav>
        </div>
    )
}

export default SearchBar
