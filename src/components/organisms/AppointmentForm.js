import React, { useState } from 'react'
import AppModal from './AppModal'
import Link from 'next/link'
import AppInput from './AppInput'
import { Andika } from "next/font/google";
import AppSelect from './AppSelect';
import serialize from '@/hooks/Serialize';
import { bookppointment } from '@/services/authService';
import { toast } from 'sonner';

const andika = Andika({
    subsets: ["latin"],
    variable: "--font-andika",
    weight: ["400", "700"],
});


function AppointmentForm({ showWaitModal, setshowWaitModal }) {
    const [processing, setprocessing] = useState(false)

    const Consultation = [
        { label: 'Starter Chat — ₦7,500 A 20-minute quick medical chat for urgent or simple health concerns.', value: 'Starter Chat — ₦7,500' },
        { label: 'Standard Session — ₦13,000 A 45-minute in-depth consultation with professional follow-up advice.', value: 'Standard Session — ₦13,000' },
        { label: 'Couples Session — ₦15,000 A 45-minute joint consultation designed for couples or partners.', value: 'Couples Session — ₦15,000' },
        { label: 'Monthly Wellness Plan — ₦38,000 Four sessions per month (one each week, 30 minutes per session). Ideal for continuous doctor support, prescription follow-ups, and symptom monitoring.', value: 'Monthly Wellness Plan — ₦38,000' },
        { label: 'Quarterly Health Plan — ₦70,000 Eight sessions spread across three months — great for long-term check-ins and coordinated care.', value: 'Quarterly Health Plan — ₦70,000' },
        { label: 'Premium Family Plan — ₦90,000 Twelve sessions for up to three family members. Perfect for families or couples who want flexible scheduling and extended care.', value: 'Premium Family Plan — ₦90,000' }
    ]

    const joinWaitList = async (e) => {
        e.preventDefault();
        setprocessing(true)
        const payload = serialize(e.target)

        try {
            const { data, status } = await bookppointment(payload)
            status && toast.success(data?.message)
            setshowWaitModal(false)
        } catch (error) {
            console.log(error);
        } finally {
            setprocessing(false)
        }
    }

    return (
        <AppModal mode={showWaitModal}>
            <div onClick={() => setshowWaitModal(false)} className='absolute top-0 right-0 w-screen h-screen '></div>
            <div className='max-w-lg relative z-50 space-y-3 h-screen scrollbar-hide overflow-y-auto py-6 mx-auto'>
                <div><div className={`${andika.className} text-bub-primary text-center font-andika font-bold text-[40px]`}>bubblegum</div></div>
                <div className='p-4 py-7 text-center space-y-4 rounded-2xl bg-white'>
                    <div className='flex font-bold text-lg gap-1 justify-center'>Consultation <div className='text-bub-primary'>Form</div></div>

                    <form onSubmit={joinWaitList} className='text-left space-y-4'>
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <AppInput name='full_name' label='Fullname' required type='text' placeholder='Enter your Fullname' />
                            <AppInput name='email' label='Email' required type='email' placeholder='Enter your Email' />
                            <AppInput name='phone' label='Phone' required placeholder='Enter Phone Number' />
                            <AppSelect name='consultation_type' label='Consultation Type' options={Consultation} placeholder='Select option' />
                        </div>
                        <AppInput name='consultation_options' label='Consultation Note (Optional)' type='textarea' placeholder='Enter Consultation Note' />

                        <div className='space-y-2'>
                            <div className='font-medium text-gray-600 text-sm'>Payment Details:</div>
                            <div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <div className='font-semibold'>Account Name:</div>
                                    <div>Bubblegum Limited</div>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <div className='font-semibold'>Account Number:</div>
                                    <div>6715074522</div>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <div className='font-semibold'>Bank:</div>
                                    <div>Moniepoint</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex pt-4 justify-center'>
                            <button disabled={processing} className='bg-bub-primary disabled:bg-bub-primary/15 cursor-pointer text-white font-semibold py-3 rounded-full w-full'>I Have Paid</button>
                        </div>
                    </form>
                </div>
            </div>
        </AppModal>
    )
}

export default AppointmentForm