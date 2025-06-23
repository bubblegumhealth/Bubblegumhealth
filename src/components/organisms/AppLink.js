import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function AppLink({ text, icon, active, onClick }) {

    return (
        onClick ? (
            <div onClick={onClick} className={` ${text.replaceAll(" ", "_").toLowerCase() === active ? "bg-amber-300/10 text-amber-600" : "hover:border-amber-500 border-transparent text-gray-500"} border-b-3 flex px-3 py-3.5 items-center gap-3 cursor-pointer`}>
                {icon} {text}
            </div>
        ) : (
            <Link href={text.toLowerCase() === 'home' ? '/my_home' : text.toLowerCase() !== "return to website" ? `/` + text.replaceAll(" ", "_").toLowerCase() : "/"}>
                <div className={` ${text.replaceAll(" ", "_").toLowerCase() === active ? " text-amber-600" : "hover:border-amber-500 border-transparent text-gray-500"} border-b-3 flex px-3 py-3.5 items-center gap-3 cursor-pointer`}>
                    {icon} {text}
                </div>
            </Link>
        )
    )
}

export default AppLink