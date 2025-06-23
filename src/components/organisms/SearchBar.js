import React from 'react'
import { GoSearch } from "react-icons/go";

function SearchBar() {
  return (
    <div className='flex border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden'>
        <div className='flex-auto text-xs md:text-base'><input className='w-full focus:outline-0 py-3 px-3 dark:text-white dark:placeholder:text-gray-500' placeholder='Search...' /></div>
        <div className='bg-amber-500 text-white px-8 text-sm md:text-xl py-3'><GoSearch /></div>
    </div>
  )
}

export default SearchBar