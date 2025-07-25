import AppLayout from '@/components/layouts/AppLayout'
import BlogChip from '@/components/organisms/BlogChip'
import React from 'react'

function Index() {
    return (
        <AppLayout active='blog'>
            <div className="max-w-7xl mx-auto p-3">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 18 }).map((_, i) => (
                        <BlogChip key={i} />
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}

export default Index