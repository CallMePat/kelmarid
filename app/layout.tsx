import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

export const metadata: Metadata = {
  title: "FundR",
  description: "Interview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Header />


        <div className=" flex flex-row">
          <div className=" w-[20%] h-screen overflow-hidden hidden md:block border-r-[1px] border-[]">
            <SideNav />
          </div>
          <div className="w-[100%] md:w-[80%] h-screen overflow-y-scroll">{children}</div>
        </div>
      </body>
    </html>
  );
}
