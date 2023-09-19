import { Link } from "@inertiajs/react";
import { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { HiOutlineViewList } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import PrimaryButton from "@/Components/PrimaryButton";

export default function SideBar({click, icon}) {
    const [open, setOpen] = useState(true);
    const Menus = [
        {
            name: "Dashboard",
            link: 'prototype.admin',
            src:  <MdDashboard size="32" color="black" className="dark:bg-slate-200 rounded-xl"/>,
        },
        {
            name: "Portfolio",
            link: 'admin.dashboard.portfolio.index',
            src:  <AiOutlineFileText size="32" color="black" className="dark:bg-slate-200 rounded-xl"/>,
        },
        {
            name: "About Me",
            link: 'admin.dashboard.about.index',
            src:  <SiAboutdotme  size="32" color="black" className="dark:bg-slate-200 rounded-xl"/>,
        },
        {
            name: "Logout",
            link: 'logout',
            src:  <CiLogout size="32" color="black" className="bg-rose-600 rounded-xl"/>,
        }
      
    ];

    return (
        <>
        
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-emerald-300 dark:bg-slate-500 h-screen p-5 pt-8 relative duration-300`}
      >
        <HiOutlineViewList
          size={30}
          className={`absolute cursor-pointer -right-3 top-9 w-7 dark:bg-slate-200 rounded-xl ${!open && "rotate-180 "}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <GrUserAdmin
            size="40"
            className={`w-10 cursor-pointer duration-500  ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 dark:text-white ${
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
              <Link href={route(Menu.link)} className={` w-10 ${!open && "hidden"} origin-left duration-200 text-black dark:text-white`}>
                {Menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 mb-5">
        <PrimaryButton onClick={click}
          className="text-white bg-slate-600 dark:bg-white dark:text-black "
          >
            {icon}
          </PrimaryButton>
          <p className="text-black text-sm">© 2021 MeIlham</p>
          </div>
      </div>
      
    
        </>
    )
}