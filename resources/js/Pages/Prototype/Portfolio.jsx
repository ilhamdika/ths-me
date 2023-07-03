import CardPortfolio from "@/Components/CardPortfolio"
import LayoutPage from "@/Layouts/AuthUser/LayoutPage"
import { useState, useEffect } from "react"
import { DotLoader } from "react-spinners"
import TypeIt from "typeit-react"


export default function Portfolio (){
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return<LayoutPage>
        {
            loading ? <div className="flex justify-center items-center h-screen">
                <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
            </div> :
        <div className="pt-22 mobile:pt-10">
            <TypeIt className="dark:text-white justify-center text-center items-center flex text-4xl my-10 font-medium mobile:">
                Portfolio</TypeIt>
                <h1 className="dark:text-white justify-center text-center items-center flex text-xl my-10 font-light">This is the result of my work</h1>
         <div className="grid grid-cols-3 laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1">
                {[1,2,3,4,5,6,7].map(i=> (
                <CardPortfolio className={'bg-slate-900'}
                key={i}
                thumbnail={'https://static.vecteezy.com/system/resources/previews/000/330/430/original/vector-pencil-line-black-icon.jpg'}
                title={'Web Developer'}
                description={'Create a website for information, business etc., which can be accessed digitally'}
                
                />
                ))}
            </div>
        </div>
        }
    </LayoutPage>
}