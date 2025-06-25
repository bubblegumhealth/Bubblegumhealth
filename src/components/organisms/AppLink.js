import Link from 'next/link'
import React from 'react'

function AppLink({ text, icon, active, onClick }) {

    return (
        onClick ? (
            <div onClick={onClick} className='group relative h-6 overflow-hidden select-none'>
                <div className={` ${text.replaceAll(" ", "_").toLowerCase() === active ? "text-bub-primary" : "text-gray-500 hover:text-bub-primary  "} flex px-3 items-center gap-3 text-sm cursor-pointer`}>
                    {icon} {text}
                </div>
                <div className={`absolute transition-all duration-500 w-full ${text.replaceAll(" ", "_").toLowerCase() === active ? '' : 'group-hover:bottom-0 -bottom-5'} `}>
                    <div className='w-1 h-1 rounded-full bg-bub-primary mx-auto'></div>
                </div>
            </div>
        ) : (
            <Link href={text.toLowerCase() === 'home' ? '/my_home' : text.toLowerCase() !== "return to website" ? `/` + text.replaceAll(" ", "_").toLowerCase() : "/"}>
                <div className='group relative h-6 overflow-hidden select-none'>
                    <div className={` ${text.replaceAll(" ", "_").toLowerCase() === active ? "text-bub-primary" : "text-gray-500 hover:text-bub-primary"} flex px-3 items-center gap-3 text-sm cursor-pointer`}>
                        {icon} {text}
                    </div>
                    <div className={`absolute transition-all duration-500 w-full ${text.replaceAll(" ", "_").toLowerCase() === active ? '' : 'group-hover:bottom-0 -bottom-5'} `}>
                        <div className='w-1 h-1 rounded-full bg-bub-primary mx-auto'></div>
                    </div>
                </div>
            </Link>
        )
    )
}

export default AppLink