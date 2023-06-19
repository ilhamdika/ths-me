import { useState } from "react";
import { Link } from '@inertiajs/react'



export default function NavigationBar (){
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
        <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
      <div className='font-light text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        MeIlham
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer bg-white md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
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
            <li key={menu.name} className='laptop:ml-8 text-xl md:my-0 my-7'>
              <Link href={route(menu.link)} className='text-white hover:text-gray-400 duration-500 ml-5 mr-10'>
                {menu.name}
              </Link>
            </li>
          ))
        }
       
      </ul>
      </div>
    </div>
    )
}