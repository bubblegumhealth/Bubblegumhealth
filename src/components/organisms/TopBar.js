import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function TopBar({ active }) {


    return (
        <div className='text-white'>
            <div className='flex justify-between items-center'>
                <div>

                </div>
                <div className='text-bub-primary font-andika font-bold text-[40px]'>bubblegum</div>
                <div></div>
            </div>
        </div>
    )
}

export default TopBar