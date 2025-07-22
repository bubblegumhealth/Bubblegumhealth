import React from 'react'
import { IoMdClose } from "react-icons/io";

function AppModal({ children, mode = false }) {
    return (
        mode &&
        <div className='bg-gray-400/40 flex items-center backdrop-blur-2xl z-50 h-screen w-screen fixed top-0 right-0'>
            <div className='w-screen p-3'>
                <div className={`relative`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppModal
