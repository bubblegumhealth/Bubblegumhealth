import React, { useEffect, useRef } from "react";
import TopBar from "../molecules/TopBar";
import Footer from "../organisms/Footer";
import { Toaster } from "sonner";
import Link from "next/link";

function AppLayout({ bg, children, active, sideMenu, noFooter, location }) {
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      const subHeight = subHeaderRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
      document.documentElement.style.setProperty(
        "--header-subheight",
        `${subHeight}px`,
      );
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <div ref={headerRef} className="fixed z-50 w-screen">
        <div
          ref={subHeaderRef}
          className="bg-bub-primary p-4 text-white text-center text-xs"
        >
          Tech Cabal feature.{" "}
          <span className="text-white/70 italic">
            <Link
              target="_blank"
              href="https://techcabal.com/2025/11/07/7-african-startups-powering-sales-sports-support-and-settlements/"
            >
              [Read the feature →]
            </Link>
          </span>
        </div>
        <div className="h-14 lg:h-20 bg-white flex items-center">
          <div className="w-full">
            <TopBar active={active} location={location} sideMenu={sideMenu} />
          </div>
        </div>
      </div>
      <div className={`flex-grow flex mt-[var(--header-height)]`}>
        <div className={`flex-auto ${bg}`}>{children}</div>
      </div>
      {!noFooter && (
        <div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default AppLayout;
