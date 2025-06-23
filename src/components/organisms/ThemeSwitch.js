import React, { useState } from 'react'
import { MdWbSunny } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";

function ThemeSwitch() {
    const toggleTheme = () => {
        if (document.documentElement.classList.length < 1) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("epicAdminTheme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("epicAdminTheme", "light");
        }
    };

    return (
        <div onClick={toggleTheme} className='w-11 cursor-pointer p-0.5 rounded-full dark:bg-amber-400 bg-gray-50'>
            <div className='w-5 h-5 text-white transition-all duration-500 dark:ml-auto dark:text-black flex items-center justify-center bg-black dark:bg-white dark:shadow-inner  rounded-full'> <MdWbSunny className='dark:hidden' /> <BsMoonFill size={12} className='hidden dark:block' /></div>
        </div>
    )
}

export default ThemeSwitch