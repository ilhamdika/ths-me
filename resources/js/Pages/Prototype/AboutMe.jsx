import LayoutPage from "@/Layouts/LayoutPage";
import { Link } from "@inertiajs/react";

export default function AboutMe() {
    return<LayoutPage>
        <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 py-32">
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
            <div className="p-4">
                <h1 className="text-white text-3xl font-thin">About me</h1>
                <p className="text-white text-xl font-thin mt-3">
                I am a fresh graduate of S1 Informatics Engineering who is always motivated and able to work together in a team or work individually. Now looking for a position as a web developer. Someone who is thorough, structured, and nimble when doing tasks. Ambitious to learn and grow from the experiences I've had.
                </p>
            </div>
        </div>

        <div>
            <h1 className="text-white text-3xl font-thin text-center">My Skills</h1>
            <div className="flex flex-row">
                <img src="/images/html.png" className="w-20 h-20 mx-3 my-2"/>
            </div>
        </div>
    </LayoutPage>
}