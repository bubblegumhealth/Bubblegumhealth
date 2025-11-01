import React, { useState } from 'react'
import AppInput from './AppInput'
import AppSelect from './AppSelect'
import { toast } from 'sonner'
import { reportRape } from '@/services/authService'
import serialize from '@/hooks/Serialize'

function ReportRapeForm() {

    const [processing, setprocessing] = useState(false)


    const submit = async (e) => {
        e.preventDefault();
        setprocessing(true)
        const payload = serialize(e.target)

        try {
            const { data, status } = await reportRape(payload)
            status && toast.success(data?.message)
            e.target.reset()
        } catch (error) {
            console.log(error);
        } finally {
            setprocessing(false)
        }
    }


    return (
        <div className='bg-bub-secondary py-24 p-3'>
            <form onSubmit={submit} className="max-w-4xl space-y-12 mx-auto">
                <div className="space-y-8">
                    <div className="font-semibold text-4xl">Report a Rape Case</div>
                    <div className="text-xl">Your safety is our priority. This form will help connect you with the right resources and support. You can stop at any time, and all information is confidential.</div>
                </div>


                <div className="sm:grid grid-cols-2 gap-x-4 gap-y-8">
                    <AppInput name='name' label='Fullname' required placeholder='Enter Your fullname' />
                    <AppInput name='email' label='Email' required placeholder='Enter Email' />
                    <AppSelect name='safe_location' required options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} label='Are you currently in a safe location?' placeholder='Select option' />
                    <AppInput name='how_to_proceed' label='How would you like to proceed?' placeholder='Enter response' />
                    <AppInput name='location' label='Where are you located? (To connect with local resources)' placeholder='Enter response' />
                    <AppInput name='address' label='Address' placeholder='Enter response' />
                    <AppInput name='incident_time' label='When did this occur? (Helps determine available options)' placeholder='Enter response' />
                    <div className='col-span-2 space-y-8'>
                        <AppInput name='access_to_doctor_asap' label='How can we best support you?' placeholder='Enter response' />
                        <AppInput name='other' textareaHeight='h-32' type='textarea' label='Any other information you’d like to share with us about your experience?' placeholder='Share any question you have with us' />
                    </div>
                </div>
                <button disabled={processing} className='bg-bub-primary disabled:bg-bub-primary/15 cursor-pointer w-full text-white py-3 rounded-full font-semibold'>Submit</button>
            </form>
        </div>
    )
}

export default ReportRapeForm