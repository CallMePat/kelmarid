"use client";

import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
// import DashboardIcon from "../public/element-1.svg";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function SideNav() {
  const segment = useSelectedLayoutSegment();
  const sidenavOptions = [
    {
      name: "Get Started",
      href: "/Getstarted",
      icon: GlobeAltIcon,
      current: !segment ? true : false,
    },
    {
      name: "Dashboard",
      href: "/Dashboard",
      icon: GlobeAltIcon,
      current: `/${segment}` === "/Dashboard" ? true : false,
    },
  ];
  console.log(segment);
  const [isDashboardClicked, setIsDashboardClicked] = useState(true);
  const [isTransactionsClicked, setIsTransactionsClicked] = useState(false);

  const handleDashboardClick = () => {
    setIsDashboardClicked(true);
    setIsTransactionsClicked(false);
  };

  const handleTransactionsClick = () => {
    setIsDashboardClicked(false);
    setIsTransactionsClicked(true);
  };

  const dashboardStyle = {
    backgroundColor: isDashboardClicked ? "#3976E8" : "transparent",
    color: isDashboardClicked ? "#ffffff" : "#04004D",
    stroke: isDashboardClicked ? "#ffffff" : "#04004D",
  };

  const transactionsStyle = {
    backgroundColor: isTransactionsClicked ? "#3976E8" : "transparent",
    color: isTransactionsClicked ? "#ffffff" : "#04004D",
    stroke: isTransactionsClicked ? "#ffffff" : "#04004D",
  };

  return (
    <div className="">
      <div className="hidden md:block md:inset-y-0 md:w-72 md:flex-col">
        <div className="flex flex-col flex-1 gap-y-3 items-center mt-5">
          <div className="flex items-center px-20 py-4 gap-x-3">
            <div className="pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  stroke="#04004D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11 1a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10m0-20a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10m0-20C5.477 1 1 5.477 1 11s4.477 10 10 10m0-20c5.523 0 10 4.477 10 10s-4.477 10-10 10M1.5 8h19m-19 6h19"
                ></path>
              </svg>
            </div>
            <p className="text-[#04004D]">Get Started</p>
            {/* <Link
                href={option.href}
                className={classNames(
                  option.current
                    ? " bg-[#3976E8] text-white"
                    : " text-gray-400 hover:text-white hover:bg-[#3976E8]",
                  "group flex items-center px-20 py-4 gap-x-3"
                )}
              >
                <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
                {option.name}
              </Link> */}
          </div>
          <Link href="/">
            <div
              className="flex items-center px-20 py-4 gap-x-3"
              style={dashboardStyle}
              onClick={handleDashboardClick}
            >
              <div className="pl-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.5 19.9V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1zM22 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1zM22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1z"
                  ></path>
                </svg>
              </div>
              <p className="">Dashboard</p>
            </div>
          </Link>

          <div className="flex items-center px-20 py-4 gap-x-3">
            <div className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#04004D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H6.26c-2.07 0-3.76-1.69-3.76-3.76v-6.73c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6z"
                ></path>
                <path
                  stroke="#04004D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 012.57 1.78v3.8M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02zM7 12h7"
                ></path>
              </svg>
            </div>
            <p className="text-[#04004D] mr-1">Accounts</p>
          </div>
          <div className="flex items-center px-20 py-4 gap-x-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 22 22"
              >
                <path
                  stroke="#23262F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 5l2-2m0 0L5 1m2 2H5a4 4 0 00-4 4m16 10l-2 2m0 0l2 2m-2-2h2a4 4 0 004-4M9.189 5.5a6 6 0 117.311 7.311M13 15a6 6 0 11-12 0 6 6 0 0112 0z"
                ></path>
              </svg>{" "}
            </div>
            <p className="text-[#04004D]">Transfers</p>
          </div>
          <Link href="/Transaction">
            <div
              className="flex items-center ml-3.5 px-20 py-4 gap-x-3"
              style={transactionsStyle}
              onClick={handleTransactionsClick}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7zM15.75 9h-7.5M15.75 15h-7.5"
                  ></path>
                </svg>
              </div>
              <p className="">Transactions</p>
            </div>
          </Link>

          <div className="flex items-center mr-5 px-20 py-4 gap-x-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                ></path>
                <path
                  stroke="#292D32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 01-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9z"
                ></path>
              </svg>
            </div>
            <p className="text-[#04004D]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
