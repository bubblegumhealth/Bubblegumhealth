import AppLayout from '@/components/layouts/AppLayout'
import Image from 'next/image';
import React, { useState } from 'react'
import { RiArrowUpSLine } from "react-icons/ri";
import visa from '@assets/images/visa.png'
import master from '@assets/images/master.png'
import discovery from '@assets/images/discovery.png'
import maestro from '@assets/images/Maestro.png'
import { numberFormat } from '@/hooks/utils';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';
import AppInput from '@/components/organisms/AppInput';
import AppSelect from '@/components/organisms/AppSelect';


function Shipping() {
    const router = useRouter()
    const [showPaymentType, setShowPaymentType] = useState(false)
    const [completedShipping, setCompletedShipping] = useState(false)


    const submit = (e) => {
        e.preventDefault()
        setCompletedShipping(true)
    }

    return (
        <AppLayout active='shop' noFooter>
            <div className='mx-auto max-w-7xl p-3 py-16 pb-32'>
                {
                    completedShipping ? (
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-12">
                                <div className="max-w-sm space-y-5">
                                    <div className="text-xs text-gray-400">Your order has been placed</div>
                                    <div className="font-medium text-4xl">Thanks for shopping from us.</div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <div className="text-xs text-gray-400">Email:</div>
                                        <div className="text-sm font-medium">janefrances@gmail.com</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-xs text-gray-400">Shipping Address:</div>
                                        <div className="text-sm font-medium">Osborne Forshore, Ikoyi, Lagos</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-xs text-gray-400">Payment Info:</div>
                                        <div className="text-sm font-medium">Visa 4242, 7/2028</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-xs text-gray-400">Billing Address:</div>
                                        <div className="text-sm font-medium">Osborne Forshore, Ikoyi, Lagos</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-100 space-y-12 px-10 py-6 rounded-lg">
                                <div className="space-y-6">
                                    <div className="font-medium text-sm uppercase">Your Order Summary</div>
                                    {
                                        Array.from({ length: 2 }).map((_, i) => (
                                            <div key={i} className='p-3 border bg-white flex items-center rounded-2xl border-gray-100'>
                                                <div>
                                                    <div className='w-32 h-16 bg-gray-100 rounded-lg'></div>
                                                </div>
                                                <div className='flex-auto px-3'>
                                                    <div className='font-medium'>Postpill  Contraceptive</div>
                                                    <div className={`text-sm font-bold`}>{numberFormat(3000)}</div>
                                                </div>
                                                <div className='flex gap-1 text-sm shadow p-1 px-2 rounded-md items-center justify-center'>x2</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="">
                                    <div className="pt-5 space-y-5">
                                        <div className="flex items-center justify-between">
                                            <div className="">Subtotal</div>
                                            <div className="">{numberFormat(7000)}</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="">Shipping</div>
                                            <div className="">{numberFormat(3000)}</div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="">VAT</div>
                                            <div className="">{numberFormat(1250)}</div>
                                        </div>
                                        <div className="flex font-bold items-center justify-between">
                                            <div className="">Total</div>
                                            <div className="text-2xl">{numberFormat(11754)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <div onClick={() => router.back()} className="text-xl inline-block cursor-pointer"><BsArrowLeft /></div>
                                        <div className="font-medium text-3xl">Contact Info</div>
                                        <div className="space-y-1">
                                            <div className="text-sm font-medium">Email</div>
                                            <div className="border border-gray-200 rounded-3xl overflow-hidden">
                                                <input type="email" required className='w-full px-4 py-1.5 h-full' placeholder='email@mail.com' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="font-medium text-3xl">Billing Address</div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <AppInput label='First Name' placeholder='Enter your first name here' required />
                                            <AppInput label='Last Name' placeholder='Enter your last name here' required />
                                            <div className="sm:col-span-2">
                                                <AppInput label={<div>Company Name <span className='text-gray-400'>(Optional)</span></div>} placeholder='Enter your company name here' />
                                            </div>
                                            <AppInput type='email' label='Email Address' placeholder='Enter your email address here' required />
                                            <AppInput type='tel' label='Phone Number' placeholder='Enter your phone number here' required />
                                            <div className="sm:col-span-2">
                                                <AppInput disabled label='Country' value='Nigeria' />
                                            </div>
                                            <AppInput label='Street' placeholder='House number and street name' required />
                                            <AppInput label={<div className='text-transparent select-none text-base'>txcvext</div>} placeholder='Apartment, suite, unit, etc (optional)' required />
                                            <AppSelect label='State' required />
                                            <AppInput label='Post Code' placeholder='Enter post code' required />
                                            <div className="sm:col-span-2">
                                                <AppInput type='textarea' textareaHeight='h-44' label='Additional Notes' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-100 rounded-2xl p-8">
                                        <div className="pb-5 space-y-5">
                                            <div className="font-medium text-3xl">Summary</div>
                                            <div className="space-y-5">
                                                {
                                                    Array.from({ length: 2 }).map((_, i) => (
                                                        <div key={i} className='p-3 border bg-white flex items-center rounded-2xl border-gray-100'>
                                                            <div>
                                                                <div className='w-32 h-16 bg-gray-100 rounded-lg'></div>
                                                            </div>
                                                            <div className='flex-auto px-3'>
                                                                <div className='font-medium'>Postpill  Contraceptive</div>
                                                                <div className={`text-sm font-bold`}>{numberFormat(3000)}</div>
                                                            </div>
                                                            <div className='flex gap-1 text-sm shadow p-1 px-2 rounded-md items-center justify-center'>x2</div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="py-5 border-y border-gray-300">
                                            <div className="space-y-3">
                                                <div className="font-medium">Do you have a promotional code?</div>
                                                <div className="flex border rounded-xl p-2 overflow-hidden border-gray-300">
                                                    <div className="flex-auto"><input type="text" name="" id="" className='w-full h-full focus:outline-0 px-1.5' /></div>
                                                    <button className="bg-bub-primary text-white px-4 py-1.5 font-semibold text-sm rounded-full select-none cursor-pointer">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-5 space-y-5">
                                            <div className="flex items-center justify-between">
                                                <div className="">Subtotal</div>
                                                <div className="">{numberFormat(7000)}</div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="">Shipping</div>
                                                <div className="">{numberFormat(3000)}</div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="">VAT</div>
                                                <div className="">{numberFormat(1250)}</div>
                                            </div>
                                            <div className="flex font-bold items-center justify-between">
                                                <div className="">Total</div>
                                                <div className="text-2xl">{numberFormat(11754)}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="font-medium text-3xl">Payment Method</div>
                                        <div className="rounded-2xl border border-gray-300 overflow-hidden">
                                            <div onClick={() => setShowPaymentType(!showPaymentType)} className="flex cursor-pointer bg-gray-100 py-4 px-5 items-center justify-between">
                                                <div className="">Credit Card</div>
                                                <div className={`transition-transform duration-300 ${showPaymentType ? 'rotate-180' : 'rotate-0'} transform`}><RiArrowUpSLine size={18} /></div>
                                            </div>
                                            {
                                                showPaymentType && (
                                                    <div className="py-8 grid grid-cols-4 gap-5 px-5">
                                                        <div className="">
                                                            <label htmlFor='visa'>
                                                                <div className="space-y-7 border border-gray-300 rounded-lg p-3 cursor-pointer">
                                                                    <input type="radio" name="payType" id='visa' className='accent-black' />
                                                                    <Image src={visa} alt='visa' width={100} height={24} className='h-6 w-16' />
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="">
                                                            <label htmlFor='master'>
                                                                <div className="space-y-7 border border-gray-300 rounded-lg p-3 cursor-pointer">
                                                                    <input type="radio" name="payType" id='master' className='accent-black' />
                                                                    <Image src={master} alt='visa' width={100} height={100} className='h-6 w-10' />
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="">
                                                            <label htmlFor='discovery'>
                                                                <div className="space-y-7 border border-gray-300 rounded-lg p-3 cursor-pointer">
                                                                    <input type="radio" name="payType" id='discovery' className='accent-black' />
                                                                    <Image src={discovery} alt='visa' width={100} height={100} className='h-6 w-9' />
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="">
                                                            <label htmlFor='maestro'>
                                                                <div className="space-y-7 border border-gray-300 rounded-lg p-3 cursor-pointer">
                                                                    <input type="radio" name="payType" id='maestro' className='accent-black' />
                                                                    <Image src={maestro} alt='visa' width={100} height={100} className='h-6 w-9' />
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <button className="bg-bub-primary w-full text-white select-none font-medium py-4 rounded-full text-center cursor-pointer">Proceed to Payment</button>
                                </div>
                            </div>
                        </form>
                    )
                }

            </div>
        </AppLayout>
    )
}

export default Shipping