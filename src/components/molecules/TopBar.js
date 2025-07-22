import React, { useState } from 'react'
import { Andika, Plus_Jakarta_Sans } from "next/font/google";
import AppLink from '../organisms/AppLink';
import { HiOutlineUser } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { numberFormat } from '@/hooks/utils';
import ProductInCart from '../organisms/ProductInCart';
import AppModal from '../organisms/AppModal';
import AppInput from '../organisms/AppInput';

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
    const [showWaitModal, setShowWaitModal] = useState(true)
    

    const chatAI = () => {
        setShowcart(false)
    }

    const joinWaitList = (e) => {
        e.preventDefault()
        setShowWaitModal(false)
    }


    return (
        <>
            <AppModal mode={showWaitModal}>
                <div className='max-w-lg space-y-5 mx-auto'>
                    <div><div className={`${andika.className} text-bub-primary text-center font-andika font-bold text-[40px]`}>bubblegum</div></div>
                    <div className='p-4 py-7 text-center space-y-4 rounded-2xl bg-white'>
                        <div className='flex font-bold text-lg gap-1 justify-center'>Hi <div className='text-bub-primary'>Welcome!</div></div>
                        <div className='space-y-3'>
                            <div className='text-3xl font-bold max-w-sm mx-auto px-3'>Lorem, ipsum dolor sit amet consectetur.</div>
                            <div className='text-sm text-gray-500 max-w-sm mx-auto px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum fugit pariatur ipsum veritatis voluptatibus ratione similique ea esse, vero deserunt quos nisi. Fugit iusto nisi, commodi inventore officiis natus.</div>
                        </div>
                        <form onSubmit={joinWaitList} className='text-left space-y-4'>
                            <AppInput label='Email' required type='email' placeholder='Enter your Email' />
                            <AppInput label='Nickname' required placeholder='Enter what you would like to be called' />
                            <div className='flex justify-center'>
                                <button className='bg-bub-primary cursor-pointer text-white font-semibold py-3 rounded-full w-full'>Join Our Wait-list</button>
                            </div>
                        </form>
                        <div className='flex items-center text-white justify-center gap-3'>
                            <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><GrFacebookOption /></div>
                            <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><RiTwitterXFill /></div>
                            <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><FaInstagram /></div>
                        </div>
                    </div>
                </div>
            </AppModal>
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
        </>
    )
}

export default TopBar