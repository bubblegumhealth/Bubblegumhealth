import React from 'react'

function BlogChip({ blog }) {
    console.log(blog);

    return (
        <div className='space-y-5'>
            <div className='h-[300px] rounded-2xl bg-gray-50'></div>
            <div className='space-y-3'>
                <div className='font-semibold text-2xl'>{blog?.title.rendered}</div>
                <div className='text-gray-400' dangerouslySetInnerHTML={{__html: blog?.content?.rendered}} />
            </div>
        </div>
    )
}

export default BlogChip