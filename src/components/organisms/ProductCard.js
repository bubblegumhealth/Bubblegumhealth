import { numberFormat } from '@/hooks/utils';
import Link from 'next/link';
import React from 'react'
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

function ProductCard() {
    return (
        <div className='relative'>
            <Link href={`/shop/234`}>
                <div className='space-y-3'>
                    <div className='h-[360px] bg-white rounded-xl relative'>

                    </div>
                    <div className='text-sm space-y-1'>
                        <div className='font-semibold'>Postpill Emergency Contraceptive</div>
                        <div className='font-normal text-gray-500'>Commonly known as the morning after pill</div>
                        <div className='font-semibold'>{numberFormat(2000)} </div>
                    </div>
                </div>
            </Link>
            <div className='absolute cursor-pointer right-3 top-3 w-10 h-10 flex items-center justify-center bg-bub-secondary rounded-full'><IoIosHeartEmpty /></div>
        </div>


    )
}

export default ProductCard