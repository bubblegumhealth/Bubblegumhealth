import Link from 'next/link'
import React from 'react'

function AppNavLink({ text, active, onClick }) {
    return (
        onClick ? (
            <div onClick={onClick} className='cursor-pointer select-none'>
                <div className={`h-full border-b-4 ${text.replaceAll(" ", "_").toLowerCase() === active ? "border-amber-500 text-white" : "text-gray-400 border-black"} items-center px-8 flex h-full `}>
                    <div>{text}</div>
                </div>
            </div>
        ) : (
            <Link href={text.toLowerCase() !== "trending" ? `/` + text.replaceAll(" ", "_").toLowerCase() : "/"}>
                <div className={`h-full border-b-4 ${text.replaceAll(" ", "_").toLowerCase() === active ? "border-amber-500 text-white" : "text-gray-400 border-black"} items-center px-8 flex h-full `}>
                    <div>{text}</div>
                </div>
            </Link>
        )
    )
}

export default AppNavLink