import AppLayout from '@/components/layouts/AppLayout'
import React from 'react'

function Shipping() {
    return (
        <AppLayout active='shop' >
            <div className='flex mx-auto max-w-7xl p-3 py-16'>
                <div className="grid grid-cols-2 gap-6">
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Shipping