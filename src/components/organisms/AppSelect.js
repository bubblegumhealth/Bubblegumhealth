'use client'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

function AppSelect({ label, required, value, name, error, options, defaultValue, onChange,placeholder }) {

    return (
        <div className='space-y-2 cursor-pointer text-green'>

            <div>
                <label className="font-medium text-gray-600 text-sm">
                    {label}
                </label>
            </div>
            <div className='relative'>
                <div className='absolute right-0 top-0 pointer-events-none text-gray-400 h-full w-12 flex items-center justify-center'><IoIosArrowDown /></div>
                <select
                    name={name}
                    onChange={(e) => onChange && onChange(e)}
                    required={required}
                    value={value}
                    className={`w-full border ${error ? 'border-red-500' : ' border-black'} bg-white disabled:bg-gray-100 appearance-none focus:border-black disabled:border-gray-100 disabled:cursor-default border-gray-300 p-3 peer outline-none rounded-2xl text-sm`}
                >
                    <option value="" disabled selected hidden>
                        {placeholder}
                    </option>
                    {options?.map((option) => (
                        <option key={option.value} defaultValue={typeof (defaultValue) === "string" ? defaultValue === option.value : defaultValue === option.label} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default AppSelect