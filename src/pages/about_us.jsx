import React from 'react'
import AppLayout from '@/components/layouts/AppLayout'
import { DM_Serif_Display } from 'next/font/google'
import ReportRapeForm from '@/components/organisms/ReportRapeForm'
import OurDoctors from '@/components/organisms/OurDoctors'



export const dmSerifDisplay = DM_Serif_Display({
    subsets: ['latin'],
    variable: '--font-dm-serif-display',
    weight: '400',
    style: ['normal', 'italic'],
    display: 'swap',
})

function Aboutus() {
    return (
        <AppLayout active='about_us'>
            <div className="h-screen p-12">
                <div className="aboutBannerImg h-full rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-transparent from-55% to-black px-8 py-20 flex items-end">
                        <div className="w-full">
                            <div className="max-w-3xl text-white space-y-3 p-4">
                                <div className="text-6xl font-semibold">
                                    <div className=""><span className={`${dmSerifDisplay.className} italic`}>Everyone</span> Deserves</div>
                                    <div className="">Great Sexual Health <span className={`${dmSerifDisplay.className} italic`}>Care</span></div>
                                </div>
                                <div className="text-lg">We believe sexual wellness should be as normal as buying vitamins. So we created a space where you can shop with confidence, learn without judgment, and prioritize your health without any weird vibes.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-bub-secondary py-24 px-3">
                <div className="max-w-4xl mx-auto space-y-10 p-4">
                    <div className="space-y-8">
                        <div className="font-bold text-4xl">About Bubblegum</div>
                        <div className="text-xl">
                            At Bubble Gum Health, we exist to give women the power to own their health decisions without shame or barriers. Strong women deserve strong solutions. We provide discreet access to contraceptives, pleasure kits, period care, pregnancy tests, and expert consultations all delivered with privacy, safety, and empowerment at the core.
                        </div>
                        {/* <div className="text-xl">Between the fluorescent-lit pharmacy aisles, judgmental stares, and products locked behind glass like they're precious jewels, we realized the whole experience was designed to make people feel embarrassed about taking care of themselves. That seemed pretty backwards to us.</div> */}
                    </div>
                    <div className="h-96 aboutBubblegum rounded-2xl" />
                </div>
            </div>
            <div className="py-24 bg-gray-50">
                <div className="grid max-w-7xl p-3 mx-auto grid-cols-2 gap-12">
                    <div className="space-y-16">
                        <div className="font-semibold text-4xl">How Can We <span className='italic'>Help</span> You?</div>
                        <div className="space-y-6">
                            <div className="p-4 rounded-lg bg-bub-primary text-white">
                                <div className="font-medium text-lg">01</div>
                                <div className="font-semibold text-2xl">Shop from Us</div>
                            </div>
                            <div className="p-4 rounded-lg bg-gray-100">
                                <div className="font-medium text-lg">02</div>
                                <div className="font-semibold text-2xl">Chat with Our AI Support</div>
                            </div>
                            <div className="p-4 rounded-lg bg-gray-100">
                                <div className="font-medium text-lg">03</div>
                                <div className="font-semibold text-2xl">Talk to consultant</div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            {/* <OurDoctors />
            <ReportRapeForm /> */}
        </AppLayout>
    )
}

export default Aboutus