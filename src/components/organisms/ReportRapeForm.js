import React from 'react'
import AppInput from './AppInput'
import AppSelect from './AppSelect'

function ReportRapeForm() {
    return (
        <div className='bg-bub-secondary py-24 p-3'>
            <div className="max-w-4xl space-y-12 mx-auto">
                <div className="space-y-8">
                    <div className="font-semibold text-4xl">Report a Rape Case</div>
                    <div className="text-xl">Your safety is our priority. This form will help connect you with the right resources and support. You can stop at any time, and all information is confidential.</div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    <AppSelect label='Are you currently in a safe location?' placeholder='Select option' />
                    <AppSelect label='How would you like to proceed?' placeholder='Select option' />
                    <AppSelect label='Where are you located? (To connect with local resources)' placeholder='Select option' />
                    <AppSelect label='When did this occur? (Helps determine available options)' placeholder='Select option' />
                    <div className='col-span-2 space-y-8'>
                        <AppSelect label='How can we best support you?' placeholder='Select option' />
                        <AppInput textareaHeight='h-32' type='textarea' label='Any other information you’d like to share with us about your experience?' placeholder='Share any question you have with us' />
                    </div>
                </div>
                <button className='bg-bub-primary w-full text-white py-3 rounded-full font-semibold'>Submit</button>
            </div>
        </div>
    )
}

export default ReportRapeForm