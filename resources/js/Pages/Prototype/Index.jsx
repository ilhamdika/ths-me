import Card from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";
import LayoutPage from "@/Layouts/AuthUser/LayoutPage";
import TypeIt from "typeit-react";
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";


export default function Index (){
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    return<LayoutPage>
        {
            loading ? <div className="flex justify-center items-center h-screen">
                <DotLoader color={'#fff'} loading={loading} size={150} />
            </div> :

            <div>
            {/* Hero Content */}
            <div className="flex justify-center items-center py-36">
                <div className="">
                    <img src="/images/landing.png" alt="IMG-20211017-123751" border="0" className='rounded-full w-64 h-64'/>
                    {/* <h1 className="text-white justify-center items-center flex mt-2">
                        Hi, internet
                    </h1> */}
                    <TypeIt className="text-white justify-center items-center flex text-2xl font-thin mt-2">
                        Ilham Dika Permana
                    </TypeIt>
                    <TypeIt className="text-white justify-center items-center flex text-4xl mt-3 font-medium">
                        Web Developer
                    </TypeIt>
                    <div className="flex justify-center items-center mt-3">
                        <PrimaryButton className="text-white  w-52">
                            About Me
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className="flex flex-col h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto">
                {[1,2,3].map(i=> (
                <Card
                key={i}
                thumbnail={'https://static.vecteezy.com/system/resources/previews/000/330/430/original/vector-pencil-line-black-icon.jpg'}
                title={'Web Developer'}
                description={'Create a website for information, business etc., which can be accessed digitally'}
                />
                ))}
            </div>
            
            
            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3">
                    <div className="">
                        <img src="/images/landing2.png" alt="IMG-20211017-123751" border="0" className='w-auto h-auto'/>
                    </div>
                    <div className="">
                        <p className="text-white mx-8 laptop:py-36 mobile:mt-2 mobile:mx-auto">I am a fresh graduate of S1 Informatics Engineering who is always motivated and able to work together in a team or work individually. Now looking for a position as a web developer. Someone who is thorough, structured, and nimble when doing tasks. Ambitious to learn and grow from the experiences I've had.</p>
                    </div>

            </div>

            <div className="justify-center items-center py-36">
                <h1 className="text-white text-center text-3xl font-semibold">
                    something I want to write about
                </h1>
                <p className="text-white text-center mt-7">
                            “ I also want to continue learning and growing in technical skills related to my work, such as web programming. Web technologies continue to evolve rapidly, and by staying up-to-date and learning, I can take on new challenges in this field. I want to continue to improve my understanding of programming languages, frameworks, and related tools so that I can create innovative and efficient web solutions. Overall, the drive to grow and continually learn is important in achieving success in any field. By maintaining a passion for learning and identifying areas in which I would like to develop, I can improve my skills, gain new knowledge, and reach higher personal and professional goals. “
                </p>
            </div>
    
            </div>
        }
            </LayoutPage>
}