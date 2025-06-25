import AppLayout from '@/components/layouts/AppLayout'
import AppInput from '@/components/organisms/AppInput';
import ProductCard from '@/components/organisms/ProductCard'
import ProductInCart from '@/components/organisms/ProductInCart';
import { numberFormat } from '@/hooks/utils';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BsArrowLeft } from "react-icons/bs";




const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plusjakarta',
})


function Cart() {

    const router = useRouter()

    const itemCount = 4;

    const [selectedItems, setSelectedItems] = useState(Array(itemCount).fill(false));
    const allSelected = selectedItems.every(Boolean);

    const toggleSelectAll = () => {
        const newState = allSelected
            ? Array(itemCount).fill(false)
            : Array(itemCount).fill(true);
        setSelectedItems(newState);
    };

    const toggleItem = (index) => {
        const newSelection = [...selectedItems];
        newSelection[index] = !newSelection[index];
        setSelectedItems(newSelection);
    };


    const checkout = () => {
        router.push('/shop/shipping')
    }


    return (
        <AppLayout active='shop' >
            <div className="max-w-7xl pb-16 space-y-3.5 mx-auto p-3">
                <div className="space-y-2">
                    <div onClick={() => router.back()} className="text-xl inline-block cursor-pointer"><BsArrowLeft /></div>
                    <div className="font-bold text-2xl">Cart</div>
                </div>

                <div className="space-y-12">
                    <div className="">
                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="md:col-span-2 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <AppInput type="checkbox" label="Select All" checked={allSelected} onChange={toggleSelectAll} />
                                    </div>
                                    <div className="text-bub-danger select-none font-medium cursor-pointer">
                                        Remove
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {Array.from({ length: itemCount }).map((_, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-6">
                                                <AppInput type="checkbox" checked={selectedItems[i]} onChange={() => toggleItem(i)} />
                                            </div>
                                            <div className="flex-auto">
                                                <ProductInCart />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-gray-100 divide-y divide-gray-300 p-6 rounded-2xl">
                                    <div className="space-y-5 pb-5">
                                        <div className="text-2xl font-medium">Summary</div>
                                        <div className="space-y-3">
                                            <div className="font-medium">Do you have a promotional code?</div>
                                            <div className="flex border rounded-xl p-2 overflow-hidden border-gray-300">
                                                <div className="flex-auto"><input type="text" name="" id="" className='w-full h-full focus:outline-0 px-1.5' /></div>
                                                <button className="bg-bub-primary text-white px-4 py-1.5 font-semibold text-sm rounded-full select-none cursor-pointer">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`pt-5 space-y-5 ${plusJakartaSans.className}`}>
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
                                        <div onClick={checkout} className="bg-bub-primary cursor-pointer text-white font-medium text-center py-4 rounded-full">Checkout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="text-6xl">Related Products</div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8">
                            {
                                Array.from({ length: 3 }).map((_, i) => (
                                    <ProductCard key={i} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Cart