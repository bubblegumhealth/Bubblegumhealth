import AppLayout from '@/components/layouts/AppLayout'
import BlogChip from '@/components/organisms/BlogChip'
import { fetchBlogPost } from '@/services/authService'
import React, { useEffect, useState } from 'react'

function Index() {

    const [blogs, setBlogs] = useState([])

    const fetchBlog = async () => {
        const { status, data } = await fetchBlogPost()
        setBlogs(data);
    }


    useEffect(() => {
        fetchBlog()
    }, [])


    return (
        <AppLayout active='blog'>
            <div className="max-w-7xl min-h-screen mx-auto p-3">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs?.length > 0 && blogs?.map((blog, i) => (
                        <BlogChip blog={blog} key={i} />
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}

export default Index