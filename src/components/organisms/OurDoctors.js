import React from 'react'

function OurDoctors() {
    return (
        <div className='bg-white py-12 space-y-14'>
            <div className="max-w-7xl grid items-center grid-cols-2 gap-11 mx-auto">
                <div className="space-y-4">
                    <div className="inline-block text-sm font-medium px-3 py-1 border border-bub-primary rounded-full text-bub-primary bg-bub-primary/10">Our Doctors</div>
                    <div className="text-5xl font-semibold">Meet our Specialists</div>
                </div>
                <div className="text-lg text-gray-400">
                    Behind every product and piece of advice is a team of healthcare professionals who actually know their stuff. Our medical advisory board includes doctors, therapists, and specialists who treat sexual health like any other healthcare – with expertise, compassion, and zero judgment. They make sure we get it right, so you can shop with confidence.
                </div>
            </div>
            <div className="w-screen">
                <div className="flex py-5 no-scrollbar pr-12 gap-3.5 items-center overflow-x-auto w-[94%] ml-auto">
                    {
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="">
                                <div className="w-[380px] rounded-2xl overflow-hidden h-[550px] cardImg">
                                    <div className="bg-black/50 py-12 px-8 h-full w-full">
                                        <div className="cardImg2 text-white h-full w-full overflow-hidden rounded-2xl">
                                            <div className="h-full space-y-4 w-full p-4 bg-black/20 flex items-end">
                                                <div className="">
                                                    <div className="space-y-2">
                                                        <div className="font-semibold text-xl">Dr. Jordan Rivera, MSN, RN</div>
                                                        <div className="text-sm">Certified SANE nurse and trauma-informed care specialist providing compassionate support for sexual assault survivors.</div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        <div className="bg-white/20 backdrop-blur-sm text-sm px-4 py-1 rounded-full">Sexual Assault Nurse</div>
                                                        <div className="bg-white/20 backdrop-blur-sm text-sm px-4 py-1 rounded-full">Sexual Assault Nurse</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurDoctors