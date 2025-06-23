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
        <div className='bg-white py-12'>
            <div className='max-w-7xl space-y-5 mx-auto'>
                <div className='sm:flex justify-between'>
                    <div>
                        <Link href='/'>
                            <div>
                                <div className={`${andika.className} text-bub-primary font-andika font-bold text-[40px]`}>bubblegum</div>
                            </div>
                        </Link>
                        <div className='max-w-sm text-gray-400'>
                            Revolutionizing preventive sexual health products for both women and men; a world where everyone has the right to make informed choices about their sexual health.
                        </div>
                    </div>
                    <div>
                        <div className='max-w-sm flex gap-2'>
                            <div className='border border-gray-300 rounded-full'><input type="text" placeholder='Email address' className='focus:outline-0 w-full px-4 py-2' /></div>
                            <button className='bg-bub-primary text-white px-4 py-2 rounded-full'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100 p-8 flex justify-between items-center'>
                    <div className='text-sm text-gray-400'>
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
                </div>
            </div>
        </div>
    )
}

export default Footer