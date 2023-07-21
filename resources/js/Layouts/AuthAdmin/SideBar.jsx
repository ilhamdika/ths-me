import { Link } from "@inertiajs/react";
import { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { HiOutlineViewList } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";

export default function SideBar() {
    const [open, setOpen] = useState(true);
    const Menus = [
        {
            name: "Dashboard",
            link: 'prototype.admin',
            src:  <MdDashboard size="32" color="black"/>,
        },
        {
            name: "Portfolio",
            link: 'prototype.admin.portfolio',
            src:  <AiOutlineFileText size="32" color="black" />,
        },
        {
            name: "About Me",
            link: 'prototype.admin.about',
            src:  <SiAboutdotme  size="32" color="black"/>,
        },
        {
            name: "Logout",
            link: 'logout',
            src:  <CiLogout size="32" color="black"/>,
        }
      
    ];

    return (
        <>
        
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-emerald-300 h-screen p-5  pt-8 relative duration-300`}
      >
        <HiOutlineViewList
          size={30}
          className={`absolute cursor-pointer -right-3 top-9 w-7  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <GrUserAdmin
            size="40"
            className={`w-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Link href={route(Menu.link)}>
              {/* <img src={Menu.src} className="w-9" /> */}
              {Menu.src}
              </Link>
              <Link href={route(Menu.link)} className={` w-10 ${!open && "hidden"} origin-left duration-200 text-black`}>
                {Menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    
        </>
    )
}