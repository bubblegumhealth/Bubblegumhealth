import AppLayout from "@/components/layouts/AppLayout";
import BlogChip from "@/components/organisms/BlogChip";
import OurDoctors from "@/components/organisms/OurDoctors";
import ReportRapeForm from "@/components/organisms/ReportRapeForm";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";



export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function Home() {
  return (
    <AppLayout>
      <div className="bg-bub-secondary">
        <div className="h-screen p-12">
          <div className="homeBannerImg h-full rounded-2xl overflow-hidden">
            <div className="h-full bg-gradient-to-b from-transparent from-55% to-black px-8 py-20 flex items-end">
              <div className="w-full space-y-8">
                <div className="max-w-xl text-white space-y-3 p-4">
                  <div className="text-6xl font-bold">
                    <div className="">Breaking <span className={`${dmSerifDisplay.className} italic`}>Stigmas</span></div>
                    <div className="">Bursting <span className={`${dmSerifDisplay.className} italic`}>Flavors</span></div>
                  </div>
                  <div className="text-xl font-medium">Premium brands, tested reliability, from our door to yours, no questions asked.</div>
                </div>
                <div className="flex gap-4 items-center">
                  <Link href='/shop'>
                    <div className="font-semibold text-white bg-bub-primary rounded-full px-6 py-4">Shop Now</div>
                  </Link>
                  <Link href='/talk_to_a_doctor'>
                    <div className="border border-white text-white font-semibold rounded-full px-6 py-4">Speak to a Specialist</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className={`${dmSerifDisplay.className} text-[#E0BBB1] text-8xl pt-8 text-center max-w-5xl mx-auto`}>choose your adventure <span className="italic">responsibly</span></div>
          <div className="flex justify-center">
            <Link href='/shop'>
              <div className="font-semibold text-white bg-bub-primary rounded-full px-6 py-4">Shop Now</div>
            </Link>
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


        <div className="flex items-center max-w-5xl mx-auto gap-[72px] py-24">
          <div className="">
            <div className="sideImg2 h-[475.86px] w-[300px] rounded-2xl" />
          </div>
          <div className="space-y-6">
            <div className="flex-auto text-bub-primary font-semibold text-[80px]">
              <div className="leading-[75px] tracking-[-5px] ">No awkward encounters.<br /> no judgment.</div>
            </div>
            <div className="text-gray-500 max-w-lg">Browse anonymously, shop discreetly, receive packages that could be anything. No judgment, no traces, no awkward encounters.</div>
          </div>
        </div>
        <div className="">
          <div className="bg-bub-primary py-24 px-4 max-w-6xl mx-auto rounded-2xl">
            <div className="flex items-center max-w-5xl mx-auto gap-[72px] px-7">
              <div className="flex-auto space-y-8 text-white font-semibold">
                <div className="font-bold text-4xl text-white">About Bubblegum</div>
                <div className="text-xl font-normal max-w-md space-y-4">
                  <div className="">
                    Our story started with a simple frustration: <span className="italic">why is buying protection and other sexual products so unnecessarily awkward? </span>
                  </div>
                  <div className="">Between the fluorescent-lit pharmacy aisles, judgmental stares, and products locked behind glass like they're precious jewels, we realized the whole experience was designed to make people feel embarrassed about taking care of themselves. That seemed pretty backwards to us.</div>
                </div>
                <div className="inline-block px-6 py-4 border border-white text-base font-semibold cursor-pointer rounded-full">Read more</div>
              </div>
              <div className="">
                <div className="aboutBubblegum h-[475.86px] w-[300px] rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center max-w-5xl mx-auto gap-[72px] py-24">
          <div className="flex-auto text-bub-primary font-semibold text-[80px] leading-[75px] tracking-[-5px] ">
            safer <br /> intimacy. <br /> better protection. more fun.
          </div>
          <div className="">
            <div className="sideImg h-[475.86px] w-[300px] rounded-2xl" />
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
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <BlogChip key={i} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
