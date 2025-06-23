import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Pagination() {
    return (
        <div className='flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm'>
            <div className='hidden lg:block'>Showing 1 to 10 of 20 results</div>
            <div className='flex *:**:cursor-pointer *:cursor-pointer justify-center divide-x divide-gray-300 items-center  border border-gray-300 rounded-md text-xs '>
                <div className='px-3 py-2'><FaChevronLeft /></div>
                <div className='flex justify-center items-center gap-1 divide-x divide-gray-300 *:px-3 *:py-2'>
                    <div className='bg-amber-500 text-white'>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>...</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                </div>
                <div className='px-3'><FaChevronRight /></div>
            </div>
        </div>
    )
}

export default Pagination