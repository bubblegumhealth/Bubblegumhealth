import React from 'react'
import { LuSmartphone } from 'react-icons/lu'
import { TbClock } from "react-icons/tb";
import { RiShieldLine } from 'react-icons/ri'
import AppLayout from '@/components/layouts/AppLayout';
import { CardContent } from '@/components/organisms/Card';
import Image from 'next/image';

function Contact_us() {
    return (
        <AppLayout active='contact_us'>
            <section id="mobile-app" className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-24">
                        <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Experience the future of healthcare. contact us today, and access your health records anytime, anywhere. Your health, now at your fingertips.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4 md:space-x-6">
                                    <div className="md:w-12 w-8 h-8 md:h-12 bg-gradient-to-br from-bub-primary/10 to-bub-primary/5 rounded-md md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <LuSmartphone className="md:w-6 md:h-6 text-bub-primary" />
                                    </div>
                                    <div>
                                        <h3 className="md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 tracking-tight">Quick Booking</h3>
                                        <p className="text-slate-600 leading-relaxed text-xs md:text-lg">Book appointments instantly with our streamlined process, reducing wait times and improving accessibility.</p>
                                        <div className='pt-3'>
                                            <div>
                                                <h3 className="md:text-lg font-bold text-slate-900 tracking-tight">Contact Number</h3>
                                                <div className=''>07067593825</div>
                                            </div>
                                            <div>
                                                <h3 className="md:text-lg font-bold text-slate-900 tracking-tight">Contact E-mail</h3>
                                                <div>Business@bubblegum.health</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 md:space-x-6">
                                    <div className="md:w-12 w-8 h-8 md:h-12 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-md md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <RiShieldLine className="md:w-6 md:h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 tracking-tight">Secure & Private</h3>
                                        <p className="text-slate-600 leading-relaxed text-xs md:text-lg">Your health information is protected with industry-leading security measures, ensuring complete privacy and compliance.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 md:space-x-6">
                                    <div className="md:w-12 w-8 h-8 md:h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-md md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <TbClock className="md:w-6 md:h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="md:text-2xl font-bold text-slate-900 mb-1 md:mb-3 tracking-tight">Expert Care</h3>
                                        <p className="text-slate-600 leading-relaxed text-xs md:text-lg">Access expert medical advice anytime, anywhere with our user-friendly platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <CardContent className="p-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1666886573421-d19e546cfc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkxNDYxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Professional doctor in medical setting"
                                    className="w-full h-[500px] object-cover"
                                    width={100}
                                    height={100}
                                />
                            </CardContent>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Contact_us