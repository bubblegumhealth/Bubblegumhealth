import { Andika } from "next/font/google";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import AppLink from "./AppLink";
import Link from "next/link";
import Image from "next/image";

const andika = Andika({
  subsets: ["latin"],
  variable: "--font-andika",
  weight: ["400", "700"],
});

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-white py-12 px-3">
      <div className="max-w-7xl space-y-5 mx-auto">
        <div className="md:flex space-y-4 md:space-y-0 justify-between">
          <div>
            <Link href="/">
              <Image
                src="/bubblegum-logo.png"
                alt="Bubblegum Health logo"
                width={180}
                height={100}
              />
            </Link>
            <div className="max-w-sm text-sm lg:text-base text-gray-400">
              Building Africa&apos;s leading FemTech platform, connecting women
              to trusted healthcare, licensed female doctors, and the tools they
              need to live healthier lives.
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-bold">Subscribe to our newsletter</div>
            <div className="text-sm text-gray-400 max-w-xs">
              Stay in the loop. Get monthly check-ins on your health, new drops,
              and real talk — straight to your inbox.
            </div>
            <div className="max-w-sm flex gap-2">
              <div className="border border-gray-300 rounded-full">
                <input
                  type="text"
                  placeholder="Email address"
                  className="focus:outline-0 w-full px-4 py-2"
                />
              </div>
              <button className="bg-bub-primary text-white px-4 py-2 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100  p-8 flex gap-2 flex-col lg:flex-row justify-between items-center">
          <div className="text-sm hidden md:block text-gray-400">
            &copy; {year} Bubblegum. All rights reserved.
          </div>
          <div className="flex items-center">
            <AppLink text="Terms of Service" />
            <AppLink text="Privacy Policy" />
            <AppLink text="Security" />
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full">
              <FaFacebook />
            </div>
            <div className="bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-bub-primary text-white w-7 h-7 flex items-center justify-center rounded-full">
              <FaLinkedinIn />
            </div>
          </div>
          <div className="text-sm md:hidden text-gray-400">
            &copy; {year} Bubblegum. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
