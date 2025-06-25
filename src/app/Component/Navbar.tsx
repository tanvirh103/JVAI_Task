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
          <p className="font-[700] text-[23px]">Clin</p>
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
