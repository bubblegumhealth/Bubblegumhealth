import React from 'react'
import TopBar from '../organisms/TopBar'
import Footer from '../organisms/Footer'
import ThemeSwitch from '../organisms/ThemeSwitch'
import AppLink from '../organisms/AppLink'
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { GrHomeRounded } from 'react-icons/gr'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { PiVideoThin } from 'react-icons/pi'
import { LiaWalletSolid } from 'react-icons/lia'
import { FaRegUser } from 'react-icons/fa'
import { FiLogOut } from "react-icons/fi";
import { SignOut } from '@/hooks/Auth'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'


function AppLayout({ sideActive, children, active, sideMenu, noFooter, location }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const siOut = () => {
    SignOut(dispatch)
    router.push("/")
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-bub-primary p-4 text-white text-center text-xs'>Free delivery on all orders above N20,000</div>
      <div className='h-20'>
        <TopBar active={active} location={location} sideMenu={sideMenu} />
      </div>
      <div className='flex-grow flex'>
        {sideMenu &&
          <div className='h-[90vh] hidden lg:block p-3 sticky top-20 w-72'>
            <div className='bg-black  h-full rounded-2xl flex flex-col'>
              <div className='flex-auto pt-4'>
                <AppLink active={sideActive} icon={<GrHomeRounded />} text='Home' />
                <AppLink active={sideActive} icon={<MdOutlineVideoLibrary size={20} />} text='Videos' />
                <AppLink active={sideActive} icon={<PiVideoThin size={22} />} text='Channel' />
                <AppLink active={sideActive} icon={<LiaWalletSolid size={20} />} text='Wallet' />
                <AppLink active={sideActive} icon={<FaRegUser size={18} />} text='Profile' />
              </div>
              <div className='pb-8'>
                <div className='pb-8 px-4'><ThemeSwitch /></div>
                <AppLink active={sideActive} icon={<HiOutlineCog6Tooth size={20} />} text='Settings' />
                <AppLink onClick={siOut} icon={<FiLogOut size={20} />} text='Log Out' />
              </div>
            </div>
          </div>
        }
        <div className='flex-auto'>{children}</div>
      </div>
      {
        !noFooter && (
          <div>
            {/* <Footer /> */}
          </div>
        )
      }

    </div>
  )
}

export default AppLayout