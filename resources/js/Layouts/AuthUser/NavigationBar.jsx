import { useState } from "react";
import { Link } from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

export default function NavigationBar ({text, click}){
    let Menu =[
        {
          name:"Home",
          link: "prototype.index"
        },
        {
          name:"Portfolio",
          link:"prototype.portfolio"
        },
        {
          name:"About Me",
          link: "prototype.about"
        },
        
      ];
      let [open,setOpen]=useState(false);
    return (
        <div className='shadow-tablet w-full fixed-absolute top-0 left-0 mobile:fixed mobile:bg-gray-500 '>
      <div className='tablet:flex items-center justify-between py-4 tablet:px-10 px-7'>
      <div className='text-3xl cursor-pointer flex items-center
      dark:text-white'>
        MeIlham
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer tablet:hidden'>
      
      {open ? <IoCloseSharp /> : <BsList />}
      
      </div>

      <ul className={`tablet:flex tablet:items-center tablet:pb-0 pb-12 absolute tablet:static  tablet:z-auto z-[-1] left-0 w-full tablet:w-auto mobile:bg-gray-500 tablet:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
       {/* <li>
            <Link href='/'>Home</Link>
       </li>
       <li>
            <Link href='/'>Portfolio</Link>
       </li>
       <li>
            <Link href='/'>About Me</Link>
       </li> */}
        {
          Menu.map((menu)=>(
            <li key={menu.name} className='laptop:ml-8 text-xl tablet:my-0 my-7'>
              <Link href={route(menu.link)} className='dark:text-white hover:text-gray-400 duration-500 ml-5 mr-10'>
                {menu.name}
              </Link>
            </li>
          ))
        }
       
          
      <PrimaryButton onClick={click}
          className="text-white bg-slate-600 dark:bg-white dark:text-black "
          >
            {text}
          </PrimaryButton>
      </ul>
       
        
      </div>
    </div>
    )
}