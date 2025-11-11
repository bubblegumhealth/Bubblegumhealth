import Link from 'next/link';
import React from 'react'

function BlogChip({ blog }) {

    return (
        <Link href={blog?.link} target='_blank'>
            <div className='space-y-5'>
                <div className='h-[300px] rounded-2xl bg-gray-50'></div>
                <div className='space-y-3'>
                    <div className='font-semibold line-clamp-2 text-2xl'>{blog?.title?.rendered}</div>
                    <div className='text-gray-400 line-clamp-3' dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }} />
                </div>
            </div>
        </Link>
    )
}

export default BlogChip