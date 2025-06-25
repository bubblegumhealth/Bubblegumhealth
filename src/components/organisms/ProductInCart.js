import { numberFormat } from '@/hooks/utils';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React, { useState } from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";




const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plusjakarta',
})

function ProductInCart() {
    const [amount, setAmount] = useState(1)


    const increase = (amount) => {
        setAmount(amount + 1)
    }

    const decrease = (amount) => {
        amount > 1 && setAmount(amount - 1)
    }

    return (
        <div className='p-3 border flex items-center rounded-2xl border-gray-200'>
            <div>
                <div className='w-32 h-16 bg-gray-100 rounded-lg'></div>
            </div>
            <div className='flex-auto px-3'>
                <div className='font-medium'>Postpill  Contraceptive</div>
                <div className={`text-sm font-bold ${plusJakartaSans.className}`}>{numberFormat(3000)}</div>
            </div>
            <div className='flex gap-1 text-sm shadow p-1 rounded-md items-center justify-center'>
                <div onClick={() => decrease(amount)} className='px-2 py-1 cursor-pointer'><FiMinus /></div>
                <div className=''>{amount}</div>
                <div onClick={() => increase(amount)} className='px-2 py-1 cursor-pointer'><FiPlus /></div>
            </div>
        </div>
    )
}

export default ProductInCart