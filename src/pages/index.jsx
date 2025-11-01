import AppLayout from "@/components/layouts/AppLayout";
import AppointmentForm from "@/components/organisms/AppointmentForm";
import BlogChip from "@/components/organisms/BlogChip";
import { Card } from "@/components/organisms/Card";
import OurDoctors from "@/components/organisms/OurDoctors";
import ReportRapeForm from "@/components/organisms/ReportRapeForm";
import { fetchBlogPost } from "@/services/authService";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";



export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function Home() {

  const [blogs, setBlogs] = useState([])
  const [showWaitModal, setshowWaitModal] = useState(false)

  const fetchBlog = async () => {
    const { status, data } = await fetchBlogPost()
    setBlogs(data);
  }

  const gotoShop = () => {
    window.open('https://shop.bubblegum.health', '_blank')
  }


  useEffect(() => {
    fetchBlog()
  }, [])


  return (
    <AppLayout>
      <AppointmentForm showWaitModal={showWaitModal} setshowWaitModal={setshowWaitModal} />
      <div className="bg-bub-secondary">
        <section className="bg-bub-primary min-h-screen text-white text-center py-28 px-4">
          <h1 className="text-4xl md:text-5xl space-y-1 font-[Playfair_Display,ui-serif,Georgia] font-bold mb-6">
            <div className="">Empowering Women's</div>
            <div className="text-white/70">Health, Discreetly</div>
          </h1>
          <p className="text-white/70 font-bold md:text-2xl max-w-4xl mx-auto mb-8">
            From contraceptives to pleasure kits and doctor appointments -- we deliver everything you need for your sexual well-being, privately and conveniently.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            {/* <Link href='https://calendly.com/odugbesanisaac/new-meeting' target="_blank"> */}
            <button onClick={() => setshowWaitModal(true)} className="bg-white w-full cursor-pointer md:w-auto text-bub-primary font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Book Appointment
            </button>
            {/* </Link> */}

            <button onClick={gotoShop} className="bg-[#7a0032] w-full md:w-auto text-white font-bold px-6 py-3 rounded-full hover:bg-[#5a0025] transition">
              Shop Now
            </button>
          </div>
          <p className="text-white/70 text-sm md:text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
            Your health, your choice, your privacy. We exist to give women the power to own their health decisions without shame or barriers. Strong women deserve strong solutions.
          </p>
        </section>



        {/* <div className="md:h-screen p-5 md:p-12">
          <div className="homeBannerImg md:h-full rounded-2xl overflow-hidden">
            <div className="md:h-full  bg-gradient-to-b from-transparent from-55% to-black md:px-8 md:py-20 flex items-end">
              <div className="w-full space-y-3 md:space-y-8">
                <div className="max-w-3xl text-white space-y-3 p-4">
                  <div className="sm:text-xl lg:text-4xl font-bold">
                    Sexual health without shame. Discreet delivery, trusted doctors, and
                    Al-powered support - all in one platform
                  </div>
                  <div className="md:text-xl text-xs font-medium">Welcome to a new era of intimate care — where you can talk to real medical experts, get AI-powered answers, and order your sexual wellness products discreetly, all in one safe, judgment-free space. Your health, your pleasure, your privacy — on your terms.</div>
                </div>
                <div className="flex gap-4 p-3 md:p-0 items-center">
                  <Link href='/shop'>
                    <div className="font-semibold text-white bg-bub-primary text-xs md:text-base rounded-full px-4 py-2 md:px-6 md:py-4">Shop Now</div>
                  </Link>
                  <Link href='/talk_to_a_doctor'>
                    <div className="border border-white text-white font-semibold text-xs md:text-base rounded-full px-4 py-2 md:px-6 md:py-4">Speak to a Specialist</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="space-y-10">
          <div className={`${dmSerifDisplay.className} text-[#E0BBB1] text-3xl md:text-6xl lg:text-8xl pt-8 text-center max-w-5xl mx-auto`}>choose your adventure <span className="italic">responsibly</span></div>
          <div className="flex justify-center">
            {/* <Link href='/shop'> */}
            <div onClick={gotoShop} className="font-semibold text-white bg-bub-primary rounded-full md:px-6 px-4 py-2 md:py-4 text-sm md:text-base">Shop Now</div>
            {/* </Link> */}
          </div>
        </div>



        <div className="w-screen mt-4">
          <div className="flex no-scrollbar py-5 pr-12 gap-3.5 items-center overflow-x-auto w-[98%] ml-auto">
            {
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="">
                  <div className="rounded-2xl h-[140px] w-[300px] chip overflow-hidden">
                    <div className="h-full w-full flex items-center justify-center flex-col bg-black/20">
                      <div className="font-semibold px-16 text-sm py-3 text-white text-center">Contraceptives & Pregnancy Prevention Kits</div>
                      <div className="border border-white text-[10px] text-white font-semibold rounded-full px-4 py-2">View all Products</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>



        {/* <section id="how-it-works" className="py-28 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-24">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 md:mb-8 leading-tight tracking-tight">
                Three Steps to<br />Anonymous Healthcare
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Getting the sexual health care you need shouldn't be complicated. Our simple 3-step process makes it easy and private.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 lg:gap-16">
              <div className="group text-center">
                <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white p-10 h-full group-hover:-translate-y-3 rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bub-minor to-bub-primary"></div>
                  <div className="inline-flex items-center justify-center md:w-24 w-12 md:h-24 h-12 bg-gradient-to-br from-bub-minor/10 to-primary/5 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <span className="text-lg md:text-3xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="md:text-2xl font-bold text-slate-900 mb-5 tracking-tight">Choose Your Care</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Select contraceptives, pleasure kits, or book a doctor&apos;s appointment.
                  </p>
                </Card>
              </div>

              <div className="group text-center">
                <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white p-10 h-full group-hover:-translate-y-3 rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bub-minor to-bub-primary"></div>
                  <div className="inline-flex items-center justify-center md:w-24 w-12 md:h-24 h-12 bg-gradient-to-br from-bub-minor/10 to-primary/5 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <span className="text-lg md:text-3xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="md:text-2xl font-bold text-slate-900 mb-5 tracking-tight">Discreet Delivery</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Plain packaging, fast delivery, nationwide.
                  </p>
                </Card>
              </div>

              <div className="group text-center">
                <Card className="border-0 shadow-xl hover:shadow-3xl transition-all duration-500 bg-white p-10 h-full group-hover:-translate-y-3 rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bub-minor to-bub-primary"></div>
                  <div className="inline-flex items-center justify-center md:w-24 w-12 md:h-24 h-12 bg-gradient-to-br from-bub-minor/10 to-primary/5 rounded-md md:rounded-3xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <span className="text-lg md:text-3xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="md:text-2xl font-bold text-slate-900 mb-5 tracking-tight">Ongoing Support</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                    Get guidance from certified doctors and sexual health experts.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section> */}




        <div className="md:flex px-3 items-center max-w-5xl mx-auto gap-[72px] py-24">
          <div className="">
            <div className="sideImg2 md:h-[475.86px] w-full h-96 md:w-[300px] rounded-2xl" />
          </div>
          <div className="space-y-6">
            <div className="flex-auto text-bub-primary font-semibold text-2xl md:text-4xl lg:text-[80px]">
              <div className="lg:leading-[75px] lg:tracking-[-5px] md:leading-[50px] md:tracking-[-1px] ">No awkward encounters.<br /> no judgment.</div>
            </div>
            <div className="text-gray-500 max-w-lg text-sm md:text-base">Browse anonymously, shop discreetly, receive packages that could be anything. No judgment, no traces, no awkward encounters.</div>
          </div>
        </div>
        <div className="px-3">
          <div className="bg-bub-primary py-5 md:py-24 px-4 max-w-6xl mx-auto rounded-2xl">
            <div className="md:flex space-y-7 md:space-y-0 items-center max-w-5xl mx-auto gap-[72px] px-3 md:px-7">
              <div className="flex-auto space-y-8 text-white font-semibold">
                <div className="font-bold text-2xl md:text-4xl text-white">About Bubblegum</div>
                <div className="md:text-xl font-normal max-w-md space-y-4">
                  <div className="">
                    Our story began with a simple truth: women deserve better access to their own health. For too long, buying contraceptives, period care, or intimate products has been made unnecessarily awkward — from harsh pharmacy lights to judgmental stares and products hidden away as if they were shameful.
                  </div>
                  <div className="">
                    We knew it didn’t have to be this way. Bubble Gum was created to put women first — making sexual and reproductive health private, safe, and empowering. Because taking care of yourself should feel like strength, never embarrassment.
                  </div>
                </div>
                <div className="inline-block text-sm px-6 py-4 border border-white md:text-base font-semibold cursor-pointer rounded-full">Read more</div>
              </div>
              <div className="">
                <div className="aboutBubblegum w-full h-72 md:h-[475.86px] md:w-[300px] rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex space-y-4 md:space-y-0 px-3 items-center max-w-5xl mx-auto gap-[72px] py-24">
          <div className="flex-auto text-bub-primary font-semibold lg:text-[80px] lg:leading-[75px] lg:tracking-[-5px] md:text-[70px] md:leading-[55px] md:tracking-[-3px] text-[50px] leading-[45px] tracking-[-1px] ">
            safer <br /> intimacy. <br /> better protection. more fun.
          </div>
          <div className="">
            <div className="sideImg h-[475.86px] md:w-[300px] rounded-2xl" />
          </div>
        </div>
      </div>
      <OurDoctors />
      <ReportRapeForm />
      <div className="space-y-10 bg-white py-24">
        <div className="max-w-[1350px] space-y-10 mx-auto p-3">
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <div className="inline-block text-sm font-medium px-3 py-1 border border-bub-primary rounded-full text-bub-primary bg-bub-primary/10">Our Blog</div>
            </div>
            <div className=" text-6xl text-center font-medium max-w-xl mx-auto">
              The More You <span className={`${dmSerifDisplay.className} italic`}>Know</span>, The <span className={`${dmSerifDisplay.className} italic`}>Better</span> It Gets
            </div>
            <div className="font-medium text-xl text-center max-w-2xl mx-auto text-gray-500">Consider this your friendly neighborhood fact-checker, myth-buster, and confidence-booster all rolled into one.</div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {blogs?.length > 0 && blogs?.map((blog, i) => (
              <BlogChip blog={blog} key={i} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
