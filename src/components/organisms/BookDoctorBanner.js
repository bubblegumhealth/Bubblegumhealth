
// import { Card, CardContent } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";
import { BsCalendar, BsClock, BsShield } from "react-icons/bs";
import { LuStethoscope } from "react-icons/lu";
import { Card, CardContent } from "./Card";
import Image from "next/image";
// import { Button } from "./Button";

export function BookDoctorBanner() {
    return (
        <div className="bg-gradient-to-br py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="bg-bub-primary/5 px-3 rounded-md py-1 inline text-bub-primary text-sm">
                                ✨ Trusted Healthcare Platform
                            </div>
                            <h1 className="text-4xl sm:text-5xl py-3 lg:text-6xl tracking-tight text-gray-900">
                                Book Your{" "}
                                <span className="text-bub-primary">Doctor</span>{" "}
                                Appointment
                            </h1>
                            <p className="text-lg text-gray-600 max-w-lg">
                                Connect with qualified healthcare professionals instantly. Schedule appointments,
                                get consultations, and take control of your health journey.
                            </p>
                        </div>

                        <div className="flex flex-row gap-4">
                            <Link href='https://calendly.com/odugbesanisaac/new-meeting' target="_blank">
                                <div className="bg-bub-primary/90 cursor-pointer flex rounded-md hover:bg-bub-primary text-white px-8 py-3">
                                    <BsCalendar className="w-5 h-5 mr-2" />
                                    Book Appointment
                                </div>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <BsClock className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Quick Booking</p>
                                    <p className="text-sm text-gray-600">Same day slots</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <BsShield className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Secure & Private</p>
                                    <p className="text-sm text-gray-600">HIPAA compliant</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <LuStethoscope className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Expert Care</p>
                                    <p className="text-sm text-gray-600">Certified doctors</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="relative">
                        <CardContent className="p-0">
                            <Image
                                src="https://images.unsplash.com/photo-1666886573421-d19e546cfc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkxNDYxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Professional doctor in medical setting"
                                className="w-full h-[500px] object-cover"
                                width={100}
                                height={100}
                            />
                        </CardContent>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white shadow-lg">
                            <CardContent className="p-0 pt-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-blue-600">10,000+</p>
                                    <p className="text-sm text-gray-600">Appointments Booked</p>
                                </div>
                            </CardContent>
                        </div>

                        {/* Floating Rating Card */}
                        <div className="absolute -top-6 pt-4 -right-6 bg-white shadow-lg">
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-2">
                                    <div className="flex text-yellow-400">
                                        {'★★★★★'.split('').map((star, i) => (
                                            <span key={i}>{star}</span>
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium">4.9</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">Trusted by patients</p>
                            </CardContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}