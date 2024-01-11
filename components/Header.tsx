"use client";

import Logo from "./Logo";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex justify-between items-center px-10 py-5 border-b-[1px] border-[#E6EAEE]">
      <div className="block md:hidden">
        <button onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <svg width="18" height="18" fill="none" viewBox="0 0 41 41">
              <path
                fill="#000"
                d="M0 3H4V56.13H0z"
                transform="rotate(-45 0 3)"
              ></path>
              <path
                fill="#000"
                d="M37.568 0.172H41.568V53.302H37.568z"
                transform="rotate(45 37.568 .172)"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="14"
              fill="none"
              viewBox="0 0 20 14"
              className=" "
            >
              <path
                stroke="#23262F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="M1 7h18M1 1h18M1 13h18"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <Logo />
      <div className="flex space-x-2 md:space-x-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          fill="none"
          viewBox="0 0 20 21"
        >
          <path
            stroke="#23262F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 20H8m8-13A6 6 0 104 7c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H16.61c1.196 0 1.795 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.936C16.78 12.206 16 10.09 16 7z"
          ></path>
        </svg>

        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="bg-[#0CBC8B] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white rounded-full text-base">
            GA
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="6"
              fill="none"
              viewBox="0 0 8 6"
            >
              <path
                fill="#606060"
                d="M3.465 5.151L.232 1.918c-.238-.238-.293-.513-.165-.827C.194.777.427.62.767.62h6.466c.34 0 .573.157.7.47.128.315.073.59-.165.828L4.535 5.151a.776.776 0 01-.255.178.748.748 0 01-.28.051.748.748 0 01-.28-.05.776.776 0 01-.255-.179z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
