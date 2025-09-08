import { Andika } from 'next/font/google';
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AppLink from './AppLink';
import Link from 'next/link';


const andika = Andika({
    subsets: ["latin"],
    variable: "--font-andika",
    weight: ["400", "700"],
});

function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className='bg-white py-12 px-3'>
            <div className='max-w-7xl space-y-5 mx-auto'>
                <div className='md:flex space-y-4 md:space-y-0 justify-between'>
                    <div>
                        <Link href='/'>
                            <div>
                                <div className={`${andika.className} text-bub-primary font-andika font-bold text-xl lg:text-[40px]`}>bubblegum</div>
                            </div>
                        </Link>
                        <div className='max-w-sm text-sm lg:text-base text-gray-400'>
                            Revolutionizing preventive sexual and reproductive health for women creating a world where every woman has the right to make informed, confident choices about her body and well-being.

                        </div>
                    </div>
                    <div>
                        <div className='max-w-sm flex gap-2'>
                            <div className='border border-gray-300 rounded-full'><input type="text" placeholder='Email address' className='focus:outline-0 w-full px-4 py-2' /></div>
                            <button className='bg-bub-primary text-white px-4 py-2 rounded-full'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100  p-8 flex gap-2 flex-col lg:flex-row justify-between items-center'>
                    <div className='text-sm hidden md:block text-gray-400'>
                        &copy; {year} Bubblegum. All rights reserved.
                    </div>
                    <div className='flex items-center'>
                        <AppLink text='Terms of Service' />
                        <AppLink text='Privacy Policy' />
                        <AppLink text='Security' />
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full'><FaFacebook /></div>
                        <div className='bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full'><FaTwitter /></div>
                        <div className='bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full'><FaInstagram /></div>
                        <div className='bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full'><FaLinkedinIn /></div>
                    </div>
                    <div className='text-sm md:hidden text-gray-400'>
                        &copy; {year} Bubblegum. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer