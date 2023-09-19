import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthAdmin";
import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import TypeIt from "typeit-react";
import { AiFillEdit } from "react-icons/ai";


export default function IndexAboutMe ({auth, aboutMe}){
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])
    
    
    return <Authenticated auth={auth}>
        <Head title="Admin About Me" />
        {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
                
                <div className="">
                {aboutMe.map((about) => (
                
                <div className="grid grid-cols-2 dekstop:h-screen laptop:h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 pt-32" key={about.id}>
                    <div className="">
                    <div className="flex justify-center">
                        <div className="">
                        
                            <img src={`/storage/${about.image}`} alt="IMG-20211017-123751" border="0" className='rounded-full w-64 h-64 '/>
                            
                            <h1 className="dark:text-white justify-center items-center flex text-2xl font-thin mt-2">
                                {about.name}
                            </h1>
                            <h1 className="dark:text-white justify-center items-center flex text-xl font-thin mt-2">
                               {about.profession}
                            </h1>
                            <div className="flex flex-row">
                                <Link href={about.github}>
                                    <img src="/images/github.png" className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"/>
                                </Link>
                                <Link href={about.instagram}>
                                    <img src="/images/instagram.png" className="w-10 h-10 mx-3 my-2 bg-dark rounded-2xl dark:rounded-none"/>
                                </Link>
                                <Link href={about.email}>
                                    <img src="/images/mail.png" className="w-10 h-10 mx-3 my-2 bg-dark rounded-xl dark:rounded-none"/>
                                </Link>
                                <Link href={about.linkedin}>
                                    <img src="/images/linkedin.png" className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"/>
                                </Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <div className="p-4 mt-4">
                        <TypeIt className="dark:text-white text-3xl font-thin mobile:pt-32">About me</TypeIt>
                        <p className="dark:text-white text-xl font-thin mt-3 text-justify">
                        {about.description}
                        </p>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500">
                                <Link href={route('admin.dashboard.about.edit', about.id)}>
                                <AiFillEdit size="20" />
                                </Link>
                            </PrimaryButton>
                    </div>

                </div>
                ))}
        
                <div>
                    <h1 className="dark:text-white text-3xl font-bold text-center">My Skills</h1>
                    <PrimaryButton className="bg-green-500 dark:bg-green-500 ">
                        <Link href={route('prototype.admin.skills')}>
                            <AiFillEdit size="20" />
                        </Link>
                    </PrimaryButton>
                    
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
                    <h1 className="dark:text-white text-3xl font-bold text-center">Education</h1>
                    <div className="flex justify-center items-center py-2">
                        <div className="">
                            <img src="/images/graduate.png" alt="IMG-20211017-123751" border="0" className='w-32 h-32 mx-auto'/>
                            <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                                2018 - 2022
                            </h1>
                            <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                                Bachelor of Computer Science
                            </h1>
                            <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                                Muria Kudus University
                            </h1>
                            
                            
                        </div>
                    </div>
                </div>
                </div>
            }
        </Authenticated>
}