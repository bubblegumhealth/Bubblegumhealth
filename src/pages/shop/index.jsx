import AppLayout from '@/components/layouts/AppLayout'
import AppInput from '@/components/organisms/AppInput'
import ProductCard from '@/components/organisms/ProductCard'
import React from 'react'

function Index() {
    return (
        <AppLayout active='shop' bg='bg-gray-100' >
            <div className='flex mx-auto max-w-7xl p-3 py-16'>
                <div className="">
                    <div className='hidden space-y-3 p-3 lg:block sticky top-[var(--header-height)] w-80'>
                        <div className='flex items-center justify-between'>
                            <div className='text-sm'>Categories</div>
                            <div className='text-gray-400 text-xs'>Reset</div>
                        </div>
                        {
                            Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className='flex items-center justify-between'>
                                    <AppInput type='checkbox' label='Contraceptive Kits' />
                                    <div className=" px-2 py-0.5 rounded-lg text-gray-400 relative top-2 text-[10px] border border-gray-300">12</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex-auto p-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8">
                        {
                            Array.from({ length: 21 }).map((_, i) => (
                                <ProductCard key={i} />
                            ))
                        }
                    </div>
                </div>
                {/* </div> */}
            </div>
        </AppLayout>
    )
}

export default Index