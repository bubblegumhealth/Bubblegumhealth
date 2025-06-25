import React, { useEffect, useRef } from 'react'
import TopBar from '../molecules/TopBar'
import Footer from '../organisms/Footer'


function AppLayout({ bg, children, active, sideMenu, noFooter, location }) {
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);


  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      const subHeight = subHeaderRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
      document.documentElement.style.setProperty('--header-subheight', `${subHeight}px`);
    }
  }, []);


  return (
    <div className='flex flex-col min-h-screen'>
      <div ref={headerRef} className='fixed z-50 w-screen'>
        <div ref={subHeaderRef} className='bg-bub-primary p-4 text-white text-center text-xs'>Free delivery on all orders above N20,000</div>
        <div className='h-20 bg-white flex items-center'>
          <div className='w-full'><TopBar active={active} location={location} sideMenu={sideMenu} /></div>
        </div>
      </div>
      <div className={`flex-grow flex mt-[var(--header-height)]`}>
        <div className={`flex-auto ${bg}`}>{children}</div>
      </div>
      {
        !noFooter && (
          <div>
            <Footer />
          </div>
        )
      }

    </div>
  )
}

export default AppLayout