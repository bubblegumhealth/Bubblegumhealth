import React from 'react'
import { FiPlayCircle } from "react-icons/fi";
import AppInput from './AppInput';
import { LuVideo } from "react-icons/lu";

function UploadForm() {


    const fliterList = [
        'Honey',
        'Trending',
        'Beginner ',
        'Hardcore',
        'Tri-some',
        'Crazy sex',
        'Cum on feet',
        'Blow job',
        'Slut',
        'Wild sex',
        'Teasing',
        'Gym',
        'Partyhose',
        'Swallow',
        'Kitchen',
        'Hotel',
        'Affair',
        'Bathroom sex',
        'Context',
        'Forbidden sex',
        'Sloppy',
        'Oral sex',
        'Condom',
        'Inlaw porn',
        'Step family porn',
        'Food fuck',
        'Twins',
        'Robot',
        'Whipped cream',
        'Pussy gape',
        'Ice cream'
    ]



    return (
        <div className="max-w-5xl px-3 mx-auto">
            <div className="p-4 space-y-5 bg-white dark:bg-gray-950 border dark:border-gray-700 rounded-lg border-gray-300">
                <div className="font-bold text-sm md:text-lg dark:text-white">Upload Your Video</div>
                <div className="space-y-5">
                    <div className="p-4 border space-y-7 text-red-500 border-red-400 rounded-lg">
                        <div className="font-bold text-xl text-red-800">Warning</div>
                        <div className="">
                            <ul className='list-inside list-disc'>
                                <li>If you upload illegal content, your account will be disabled and possibly deleted completely</li>
                                <li>Do not upload from multiple accounts or you might get banned even with legal content!.</li>
                                <li>Pedophiles are reported to the competent authorities.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor='file'>
                            <input type="file" className='hidden' id='file' />
                            <div dropZone className="max-w-md py-7 dark:border-gray-600 space-y-5 cursor-pointer mx-auto border border-dashed border-gray-300 p-4 rounded-lg">
                                <div className="flex items-center justify-center">
                                    <div className="h-16 w-16 p-1.5 dark:border-gray-700 rounded-sm border border-gray-200">
                                        <div className="h-full w-full dark:bg-gray-700 dark:text-gray-400 bg-gray-100 rounded-full flex items-center justify-center"><FiPlayCircle size={27} /></div>
                                    </div>
                                </div>
                                <div className="text-center dark:text-white">
                                    <div className="font-bold">Drag and drop video file to upload</div>
                                    <div className="">Your video will be private untill you publish it</div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="outlineBtn px-3.5 py-1">Select File</div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="">
                        <AppInput placeholder='Name of the video' icon={<LuVideo />} label='Video Title' />
                    </div>
                    <div className="space-y-3 p-4 dark:border-gray-600 rounded-lg border border-gray-200">
                        <div className="font-bold text-lg dark:text-white">Select category</div>
                        <div className='flex flex-wrap gap-2'>
                            {
                                fliterList.map((_, i) => (
                                    <div key={i} className='border text-sm dark:border-gray-500 dark:text-white border-gray-300 rounded-md px-4 py-1 cursor-pointer'>{_}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="">
                            <AppInput type='checkbox' label='By Uploading the video(s), You certify that you have rights on the video(s), that the person in it is at least 18, and you agree to the Terms Of Service And Privacy Policy' />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className='outlineBtn py-2 px-8'>Cancel Upload</div>
                            <button className='btn py-2 px-8'>Publish Video</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadForm