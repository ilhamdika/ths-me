import { Link } from "@inertiajs/react";
import { useState } from "react";


export default function SideBar() {
    const [open, setOpen] = useState(true);
    const Menus = [
        {
            name: "Dashboard",
            link: 'prototype.admin',
            src:  "https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
        },
        {
            name: "Portfolio",
            link: 'prototype.admin.portfolio',
            src:  "https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
        },
        {
            name: "About Me",
            link: 'prototype.admin.about',
            src:  "https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
        },
      
    ];

    return (
        <>
        
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-black h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
            className={`w-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
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
              <img src={Menu.src} className="w-9" />
              </Link>
              <Link href={route(Menu.link)} className={` w-10 ${!open && "hidden"} origin-left duration-200`}>
                {Menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
    
        </>
    )
}