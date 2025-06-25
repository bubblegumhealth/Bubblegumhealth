import AppLayout from "@/components/layouts/AppLayout";
import BlogChip from "@/components/organisms/BlogChip";
import OurDoctors from "@/components/organisms/OurDoctors";
import ReportRapeForm from "@/components/organisms/ReportRapeForm";
import { DM_Serif_Display } from "next/font/google";



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
        <div className="flex max-w-5xl mx-auto gap-[72px] py-24">
          <div className="">
            <div className="sideImg2 h-[475.86px] w-[300px] rounded-2xl" />
          </div>
          <div className="space-y-6">
            <div className="flex-auto text-bub-primary font-semibold text-[80px]">
              <div className="">No awkward encounters.<br /> no judgment.</div>
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
        <div className="flex max-w-5xl mx-auto gap-[72px] py-24">
          <div className="flex-auto text-bub-primary font-semibold text-[80px]">
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
