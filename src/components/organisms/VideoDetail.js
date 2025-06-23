import Link from 'next/link';
import React from 'react'
import { HiOutlineHandThumbUp, HiOutlineHandThumbDown } from "react-icons/hi2";

function VideoDetail() {
    return (
        <Link href='/234'>
            <div className='bg-gray-50 dark:text-white dark:bg-slate-900 rounded-md overflow-hidden'>
                <div className='h-24 md:h-36 rounded-md  bg-amber-100/10 relative'>

                </div>
                <div className="p-2 space-y-3">
                    <div className="font-bold text-xs md:text-base line-clamp-2">
                        The Sensual Massage from the Neighbor That Breaks Taboos vkscj sdfj ksfj kjsfgkjsgfkj sdfgk
                    </div>
                    <div className='divide-x-2 md:text-base text-[10px] flex divide-gray-300 dark:divide-gray-700'>
                        <div className='flex-auto pr-2.5'>Melisamaldinistar</div>
                        <div className='px-4 gap-2 *:cursor-pointer *:flex *:items-center *:justify-center text-sm flex items-center justify-center'>
                            <div className='md:text-base text-[10px]'>
                                <HiOutlineHandThumbUp /> 30
                            </div>
                            <div className='md:text-base text-[10px]'>
                                <HiOutlineHandThumbDown /> 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoDetail