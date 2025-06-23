import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import img from '../../../public/images/logo.png'

function Footer() {

    const year = new Date().getFullYear()


    return (
        <>
            <div className='px-3'>
                <div className="flex items-center justify-center sm:px-4 py-10">
                    <div className="max-w-3xl text-xs md:text-base rounded-2xl bg-gradient-to-br from-[#3c2a23] to-[#1f1a18] p-5 sm:p-8 text-amber-400 space-y-6 shadow-xl">
                        <p>
                            <strong>Epic Africa</strong> is a dedicated porn site designed to empower adult content creators in Africa by giving them a secure space to upload, showcase, and monetize their explicit videos. Creators have access to comprehensive tools for managing their content, tracking earnings, and engaging with their audience, ensuring they can maximize their revenue in a trusted environment.
                        </p>
                        <p>
                            Subscribers enjoy exclusive access to high-quality, curated adult content through flexible payment models, including subscriptions and pay-per-view options. The site emphasizes user privacy and security, creating a seamless and discreet experience for both creators and viewers.
                        </p>
                    </div>
                </div>
            </div>
            <div className='sm:p-12 p-4 pb-5 bg-black space-y-4 divide-y divide-gray-800'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pb-9 gap-4 sm:gap-9'>
                    <div className='col-span-2 text-gray-400'>
                        <div className='max-w-xs'>
                            {/* <Image src={img} alt='LOGO' /> */}
                            <div className='text-sm sm:text-lg px-4'>17 King Edwards Road, Ruislip, London , Ha4 7ae, United Kindom</div>
                        </div>
                    </div>
                    <div className='sm:space-y-2.5'>
                        <div className='font-bold text-white text-sm sm:text-lg'>Get Started</div>
                        <div className='text-gray-400 text-xs sm:text-sm'>
                            <Link href='/'><div className='py-1.5'>Become An Affiliate</div></Link>
                            <Link href='/'><div className='py-1.5'>Content Removal</div></Link>
                        </div>
                    </div>
                    <div className='sm:space-y-2.5'>
                        <div className='font-bold text-white text-sm sm:text-lg'>Legal</div>
                        <div className='text-gray-400 text-xs sm:text-sm'>
                            <Link href='/'><div className='py-1.5'>Legal</div></Link>
                            <Link href='/'><div className='py-1.5'>Terms & Condition</div></Link>
                            <Link href='/'><div className='py-1.5'>Privacy Policy</div></Link>
                        </div>
                    </div>
                    <div className='sm:space-y-2.5'>
                        <div className='font-bold text-white text-sm sm:text-lg'>More Info</div>
                        <div className='text-gray-400 text-xs sm:text-sm'>
                            <Link href='/'><div className='py-1.5'>Faq</div></Link>
                            <Link href='/'><div className='py-1.5'>Contact</div></Link>
                        </div>
                    </div>
                    <div className='sm:space-y-2.5'>
                        <div className='font-bold text-white text-sm sm:text-lg'>Top Category</div>
                        <div className='text-gray-400 text-xs sm:text-sm'>
                            <Link href='/'><div className='py-1.5'>Ebony</div></Link>
                            <Link href='/'><div className='py-1.5'>Hardcore</div></Link>
                            <Link href='/'><div className='py-1.5'>Student</div></Link>
                        </div>
                    </div>
                </div>
                <div className='text-center text-gray-400 text-xs sm:text-sm'>&copy; EpicAfri {year} – All Rights Reserved. </div>
            </div>
        </>
    )
}

export default Footer