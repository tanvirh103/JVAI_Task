"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";


export default function Navbar() {
  const [isShowMenu, setShowMenu] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-[#0E172A]">
      <div className="flex justify-between items-center mx-8 pt-4 pb-4">
        <div className="flex justify-start items-center">
        
          <svg
            className="absolute w-[60px] h-[60px] animate-[pulse_5s_infinite] filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
            viewBox="0 0 100 100"
          >
            <path
              d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
            ></path>
          </svg>

          <svg
            className="absolute w-[60px] h-[60px] animate-[glow_3s_infinite]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75"
              stroke="#93c5fd"
              strokeWidth="1.5"
            />
            <circle cx="35" cy="40" r="2" fill="#93c5fd" />
            <circle cx="65" cy="40" r="2" fill="#93c5fd" />
            <circle cx="50" cy="60" r="2" fill="#93c5fd" />
            <circle cx="35" cy="80" r="2" fill="#93c5fd" />
            <circle cx="65" cy="80" r="2" fill="#93c5fd" />
          </svg>
          <p className="font-[700] text-[23px] ml-14 mt-2">Clin</p>
        </div>
        <div className="hidden lg:flex lg:justify-end gap-12">
          {[
            "About",
            "Our solutions",
            "In Action",
            "Technology",
            "Benefit",
            "Case Use",
          ].map((item) => (
            <Link
              className="font-[500] text-[16px] text-[#8F9EB3] hover:text-[#FFFFFF] border-b-2 border-transparent hover:border-[#60A5FA] active:text-[#FFFFFF] active:border-[#60A5FA] transition-all duration-200 transform hover:translate-y-0"
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      {isShowMenu && <MobileMenu setShow={setShowMenu} />}
    </div>
  );
}
