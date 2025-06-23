import React from 'react'
import Btn from './Btn'
import Link from 'next/link'

function ChannelVideoDetail() {
    return (
        <div className='space-y-3 sm:space-y-5 border p-3 rounded-2xl dark:border-gray-800 border-gray-100'>
            <div className='h-28 sm:h-44 lg:h-52 rounded-2xl bg-amber-200/30'></div>
            <div className='font-extrabold text-xs sm:text-lg'><span className=' text-gray-500'>Channel:</span> Good Vibe</div>
            <div className='sm:space-y-2 space-y-1 text-xs '>
                <div className='flex gap-3'>
                    <div>Subscribers</div>
                    <div className='font-semibold'>124</div>
                </div>
                <div className='flex gap-3'>
                    <div>Videos</div>
                    <div className='font-semibold'>2312</div>
                </div>
                <div className='flex gap-3'>
                    <div>Videos views</div>
                    <div className='font-semibold'>252</div>
                </div>
            </div>
            <div>
                <Link href='channels/234' >
                    <div className='btn text-xs sm:text-base py-3 text-center w-full'>
                        View Channel
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ChannelVideoDetail