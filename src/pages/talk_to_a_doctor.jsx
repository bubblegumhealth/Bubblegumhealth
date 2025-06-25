import AppLayout from '@/components/layouts/AppLayout'
import AppInput from '@/components/organisms/AppInput'
import AppSelect from '@/components/organisms/AppSelect'
import Image from 'next/image'
import React from 'react'
import leftImg from '@assets/images/extraImg.jpg'
import rightImg from '@assets/images/extraImg2.jpg'

function TalkToADoctor() {
    return (
        <AppLayout active='talk_to_a_doctor'>
            <div className="relative overflow-hidden">
                <div className="max-w-xl overflow-hidden space-y-12 py-16 pb-32 mx-auto p-3">
                    <div className="text-center space-y-3">
                        <div className="text-4xl font-medium">Talk to a Doctor</div>
                        <div className="text-lg text-gray-400">Take the first step towards better sexual well-being. Fill out the form below, and our team will connect you with the right professional.</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                        <AppInput label='First Name' placeholder='Enter your first name' />
                        <AppInput label='Last Name' placeholder='Enter your last name' />
                        <AppSelect label='Service Needed' placeholder='Select option' />
                        <AppSelect label='Doctor' placeholder='Select option' />
                        <div className='col-span-2 space-y-8'>
                            <AppSelect label='Preferred Date' placeholder='Select availability' />
                            <AppSelect label='Preferred Time' placeholder='Select availability' />
                            <AppInput textareaHeight='h-32' type='textarea' label='Any other information you’d like to share with us about your experience?' placeholder='Share any question you have with us' />
                        </div>
                    </div>
                    <button className='bg-bub-primary text-white font-semibold py-3 rounded-full w-full'>Submit</button>

                </div>
                <div className="absolute left-0 overflow-hidden p-1 -bottom-4 transform transition-transform rotate-12 h-60 w-60 rounded-2xl bg-gray-100">
                    <Image src={leftImg} alt='leftImg' width={100} height={100} className='w-full h-full rounded-2xl' />
                </div>
                <div className="absolute right-[10%] overflow-hidden p-1 -bottom-4 transform transition-transform -rotate-12 h-60 w-60 rounded-2xl bg-gray-100">
                    <Image src={rightImg} alt='leftImg' width={100} height={100} className='w-full h-full rounded-2xl' />
                </div>
            </div>
        </AppLayout>
    )
}

export default TalkToADoctor