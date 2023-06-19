import LayoutPage from "@/Layouts/LayoutPage";
import { Head, Link } from "@inertiajs/react";
import Flickity from "react-flickity-component";


export default function AboutMe() {
  

    return<LayoutPage>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            <title>Dashboard</title>
        </Head>
        <div className="grid grid-cols-2 dekstop:h-screen laptop:h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 pt-32">
            <div className="">
            <div className="flex justify-center">
                <div className="">
                    <img src="/images/landing.png" alt="IMG-20211017-123751" border="0" className='rounded-full w-64 h-64'/>
                    {/* <h1 className="text-white justify-center items-center flex mt-2">
                        Hi, internet
                    </h1> */}
                    <h1 className="text-white justify-center items-center flex text-2xl font-thin mt-2">
                        Ilham Dika Permana
                    </h1>
                    <h1 className="text-white justify-center items-center flex text-xl font-thin mt-2">
                        Web Developer
                    </h1>
                    <div className="flex flex-row">
                        <Link>
                            <img src="/images/github.png" className="w-10 h-10 mx-3 my-2"/>
                        </Link>
                        <Link>
                            <img src="/images/instagram.png" className="w-10 h-10 mx-3 my-2"/>
                        </Link>
                        <Link>
                            <img src="/images/mail.png" className="w-10 h-10 mx-3 my-2"/>
                        </Link>
                        <Link>
                            <img src="/images/linkedin.png" className="w-10 h-10 mx-3 my-2"/>
                        </Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="p-4 mt-4">
                <h1 className="text-white text-3xl font-thin">About me</h1>
                <p className="text-white text-xl font-thin mt-3">
                I am a fresh graduate of S1 Informatics Engineering who is always motivated and able to work together in a team or work individually. Now looking for a position as a web developer. Someone who is thorough, structured, and nimble when doing tasks. Ambitious to learn and grow from the experiences I've had.
                </p>
            </div>
        </div>

        <div>
            <h1 className="text-white text-3xl font-bold text-center">My Skills</h1>
            
                <div className="dekstop:grid-cols-9 laptop:grid-cols-9 tablet:grid-cols-7 flex flex-wrap justify-center">
                
                    {[1,2,3,4,5,6,7,8,9].map(i=>(
                        <img key={i}
                        src="/images/laravel.png"
                        className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                        />
                    ))}
                
                </div>
            
        </div>

        {/* Edication */}

        <div className="mt-3">
            <h1 className="text-white text-3xl font-bold text-center">Education</h1>
            <div className="flex justify-center items-center py-2">
                <div className="">
                    <img src="/images/graduate.png" alt="IMG-20211017-123751" border="0" className='w-32 h-32 mx-auto'/>
                    <h1 className="text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                        2018 - 2022
                    </h1>
                    <h1 className="text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                        Bachelor of Computer Science
                    </h1>
                    <h1 className="text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                        Muria Kudus University
                    </h1>
                    
                    
                </div>
            </div>
        </div>
    </LayoutPage>
}