import React, { useState } from 'react'
import { Andika, Plus_Jakarta_Sans } from "next/font/google";
import AppLink from '../organisms/AppLink';
import { HiOutlineBars3BottomLeft, HiOutlineUser } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import { GrFacebookOption } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import { RiLinkedinBoxFill, RiTiktokFill, RiTwitterXFill } from "react-icons/ri";
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
    const gotoShop = () => {
        window.open('https://shop.bubblegum.health', '_blank')
    }

    const [showCart, setShowcart] = useState(false)
    const [showSide, setShowSide] = useState(false)
    const [showWaitModal, setShowWaitModal] = useState(false)



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
                            <div className='text-xl font-bold max-w-sm mx-auto px-3'>We&apos;re Bubblegum Health — your smart, judgment-free guide to all things sexual health.</div>
                            <div className='text-sm text-gray-500 max-w-sm mx-auto px-3'>Join the waitlist and be the first to know when we launch access to expert answers, discreet products, and AI-powered support — all with zero awkwardness.</div>
                        </div>
                        <form onSubmit={joinWaitList} className='text-left space-y-4'>
                            <AppInput label='Email' required type='email' placeholder='Enter your Email' />
                            <AppInput label='Nickname' required placeholder='Enter what you would like to be called' />
                            <div className='flex justify-center'>
                                <button className='bg-bub-primary cursor-pointer text-white font-semibold py-3 rounded-full w-full'>Join Our Wait-list</button>
                            </div>
                        </form>
                        <div className='flex items-center text-white justify-center gap-3'>
                            {/* <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><GrFacebookOption /></div> */}
                            <Link target='_blank' href='https://x.com/BubbleGumHealth?ref_src=twsrc%5Etfw'>
                                <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><RiTwitterXFill /></div>
                            </Link>
                            <Link target='_blank' href=' https://www.instagram.com/bubblegumhealth'>
                                <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><FaInstagram /></div>
                            </Link>
                            <Link target='_blank' href='https://www.linkedin.com/company/bubble-gum-health/about/?viewAsMember=true'>
                                <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><RiLinkedinBoxFill /></div>
                            </Link>
                            <Link target='_blank' href='https://www.tiktok.com/@bubblegum.health'>
                                <div className='w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-bub-primary'><RiTiktokFill /></div>
                            </Link>

                        </div>
                    </div>
                </div>
            </AppModal>
            <div className='bg-white'>
                <div className='flex max-w-[1350px] mx-auto px-3 justify-between items-center'>
                    <div className={`lg:flex pt-12 lg:pt-0 bg-white w-72 fixed top-0 bottom-0 h-screen lg:h-auto lg:relative ${showSide ? 'left-0' : '-left-72 lg:left-0'}`}>
                        <AppLink active={active} onClick={gotoShop} text='Shop' />
                        <AppLink active={active} text='Blog' />
                        <AppLink active={active} text='About Us' />
                        <AppLink active={active} comingsoon onClick={chatAI} text='Chat AI' />
                    </div>
                    <Link href='/'>
                        <div className={`${andika.className} text-bub-primary font-andika font-bold text-xl lg:text-[40px]`}>bubblegum</div>
                    </Link>
                    <div className='flex items-center justify-center'>
                        <div className='hidden lg:block'>
                            <AppLink active={active} text='Talk to a Doctor' />
                        </div>
                        <ProfileEl />
                        <div onClick={() => setShowcart(true)} className='px-2 cursor-pointer hover:text-bub-primary relative bottom-0.5'><LuShoppingCart /></div>
                        <div onClick={() => setShowSide(!showSide)} className='lg:hidden p-3 cursor-pointer'><HiOutlineBars3BottomLeft /></div>
                    </div>
                </div>
                <div className={`fixed transition-all duration-500 pt-[var(--header-subheight)] w-[450px] h-screen top-0 bottom-0 ${showCart ? 'right-0' : '-right-[450px]'} `}>
                    <div className='bg-white shadow flex flex-col h-full w-full'>
                        <div className='p-6 flex items-center justify-between'>
                            <div className={`${plusJakartaSans.className} text-xl`}>Cart <span className='text-xs bg-gray-100 rounded-full px-2 py-0.5 relative bottom-0.5'>0</span></div>
                            <div onClick={() => setShowcart(false)}><IoCloseOutline /></div>
                        </div>
                        <div className='flex-auto space-y-3 px-6 pb-6 overflow-y-auto'>
                            {/* {
                                Array.from({ length: 6 }).map((_, i) => (
                                    <ProductInCart key={i} />
                                ))
                            } */}

                            <div className='flex h-full text-gray-400 select-none items-center justify-center flex-col'>
                                <div><LuShoppingCart size={50} /></div>
                                <div>Cart is Empty</div>
                            </div>

                        </div>
                        <div className='p-6 space-y-3'>
                            <div className={`${plusJakartaSans.className} flex items-center justify-between`}>
                                <div className='text-sm'>Subtotal</div>
                                <div className='font-bold'>{numberFormat(0)}</div>
                            </div>
                            <div>
                                {/* <Link href='/shop/cart'>
                                    <div className='bg-bub-primary select-none rounded-full py-4 text-white text-center cursor-pointer'>Checkout</div>
                                </Link> */}
                                <div className='bg-gray-300 cursor-not-allowed select-none rounded-full py-4 text-white text-center'>Checkout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar