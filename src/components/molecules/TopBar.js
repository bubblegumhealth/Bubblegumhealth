import React from 'react'
import { Andika } from "next/font/google";
import AppLink from '../organisms/AppLink';
import { HiOutlineUser } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link';

const andika = Andika({
    subsets: ["latin"],
    variable: "--font-andika",
    weight: ["400", "700"],
});


function TopBar({ active }) {

    return (
        <div className='bg-white'>
            <div className='flex max-w-[1350px] mx-auto px-3 justify-between items-center'>
                <div className='flex'>
                    <AppLink active={active} text='Shop' />
                    <AppLink active={active} text='About Us' />
                    <AppLink active={active} text='Chat AI' />
                </div>
                <Link href='/'>
                    <div className={`${andika.className} text-bub-primary font-andika font-bold text-[40px]`}>bubblegum</div>
                </Link>
                <div className='flex items-center justify-center'>
                    <AppLink active={active} text='Talk to a Doctor' />
                    <div className='px-2 cursor-pointer hover:text-bub-primary relative bottom-1.5'><HiOutlineUser /></div>
                    <div className='px-2 cursor-pointer hover:text-bub-primary relative bottom-1.5'><LuShoppingCart /></div>
                </div>
            </div>
        </div>
    )
}

export default TopBar