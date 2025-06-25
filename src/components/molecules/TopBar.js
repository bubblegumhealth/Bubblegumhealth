import React, { useState } from 'react'
import { Andika, Plus_Jakarta_Sans } from "next/font/google";
import AppLink from '../organisms/AppLink';
import { HiOutlineUser } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';
import { numberFormat } from '@/hooks/utils';
import ProductInCart from '../organisms/ProductInCart';

const andika = Andika({
    subsets: ["latin"],
    variable: "--font-andika",
    weight: ["400", "700"],
});


const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plusjakarta',
})


function ProfileEl() {
    return (
        <div className='px-2 cursor-pointer hover:text-bub-primary relative bottom-0.5'><HiOutlineUser /></div>
    )
}

function TopBar({ active }) {

    const [showCart, setShowcart] = useState(false)

    const chatAI = () => {
        setShowcart(false)
    }



    return (
        <div className='bg-white'>
            <div className='flex max-w-[1350px] mx-auto px-3 justify-between items-center'>
                <div className='flex'>
                    <AppLink active={active} text='Shop' />
                    <AppLink active={active} text='About Us' />
                    <AppLink active={active} onClick={chatAI} text='Chat AI' />
                </div>
                <Link href='/'>
                    <div className={`${andika.className} text-bub-primary font-andika font-bold text-[40px]`}>bubblegum</div>
                </Link>
                <div className='flex items-center justify-center'>
                    <AppLink active={active} text='Talk to a Doctor' />
                    <ProfileEl />
                    <div onClick={() => setShowcart(true)} className='px-2 cursor-pointer hover:text-bub-primary relative bottom-0.5'><LuShoppingCart /></div>
                </div>
            </div>
            <div className={`fixed transition-all duration-500 pt-[var(--header-subheight)] w-[450px] h-screen top-0 bottom-0 ${showCart ? 'right-0' : '-right-[450px]'} `}>
                <div className='bg-white shadow flex flex-col h-full w-full'>
                    <div className='p-6 flex items-center justify-between'>
                        <div className={`${plusJakartaSans.className} text-xl`}>Cart <span className='text-xs bg-gray-100 rounded-full px-2 py-0.5 relative bottom-0.5'>3</span></div>
                        <ProfileEl />
                    </div>
                    <div className='flex-auto space-y-3 px-6 pb-6 overflow-y-auto'>
                        {
                            Array.from({ length: 6 }).map((_, i) => (
                                <ProductInCart key={i} />
                            ))
                        }
                    </div>
                    <div className='p-6 space-y-3'>
                        <div className={`${plusJakartaSans.className} flex items-center justify-between`}>
                            <div className='text-sm'>Subtotal</div>
                            <div className='font-bold'>{numberFormat(7000)}</div>
                        </div>
                        <div>
                            <Link href='/shop/cart'>
                                <div className='bg-bub-primary select-none rounded-full py-4 text-white text-center cursor-pointer'>Checkout</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar