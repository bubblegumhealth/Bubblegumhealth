import AppLayout from '@/components/layouts/AppLayout'
import ProductCard from '@/components/organisms/ProductCard'
import { numberFormat } from '@/hooks/utils'
import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plusjakarta',
})
function ViewProduct() {
    return (
        <AppLayout active='shop' >
            <div className="max-w-7xl pb-16 space-y-3 mx-auto p-3">
                <div className={`${plusJakartaSans.className} space-y-2`}>
                    <div className={`flex items-center gap-2 text-gray-400 text-sm`}>
                        <div className="">Home</div>
                        <div className="w-1.5 h-1.5 relative top-0.5 rounded-full bg-gray-400"/>
                        <div className="">Kits</div>
                    </div>
                    <div className="font-bold text-2xl">Categories</div>
                </div>
                <div className="space-y-14">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="border border-gray-100 rounded-2xl"></div>
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <div className="space-y-5">
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap">
                                            <div className="px-3 py-2 border border-gray-200 rounded-full text-sm">Pregnancy Kits</div>
                                        </div>
                                        <div className="font-semibold text-3xl">Postpill Emergency Contraceptive</div>
                                    </div>
                                    <div className={`${plusJakartaSans.className} font-bold text-2xl`}>{numberFormat(3000)}</div>
                                </div>
                                <div className="space-y-3.5">
                                    <div className="border border-gray-200 p-4 rounded-lg space-y-3">
                                        <div className="font-medium">Description</div>
                                        <div className="text-gray-400">P2 surgical respirators are a respiratory protective device intended to protect the wearer from airborne particles. When fitted correctly, the respirator forms a seal around the mouth and nose and can filter a minimum of 94% of airborne particulates</div>
                                    </div>
                                    <div className="border border-gray-200 p-4 rounded-lg space-y-3">
                                        <div className="font-medium">Description</div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Size</div>
                                                    <div className="text-sm">25cm x 13.5cm</div>
                                                </div>
                                            </div>
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Units Per box</div>
                                                    <div className="text-sm">90 pcs</div>
                                                </div>
                                            </div>
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Boxes Per Carton</div>
                                                    <div className="text-sm">12 boxes</div>
                                                </div>
                                            </div>
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Cartons Per Pallet</div>
                                                    <div className="text-sm">12 cartons</div>
                                                </div>
                                            </div>
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Sterile</div>
                                                    <div className="text-sm">Non-Sterile</div>
                                                </div>
                                            </div>
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Use</div>
                                                    <div className="text-sm">Single use</div>
                                                </div>
                                            </div>
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Colour</div>
                                                    <div className="text-sm">White</div>
                                                </div>
                                            </div>
                                            <div className='p-3 gap-2 flex items-center'>
                                                <div className="">
                                                    <div className="h-12 w-12 p-3 flex items-center justify-center rounded-full bg-gray-100"></div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs text-gray-400">Category</div>
                                                    <div className="text-sm underline">Personal Protection</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className='bg-bub-primary rounded-full py-4 text-white text-center cursor-pointer'>Add to Cart</div>
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

export default ViewProduct