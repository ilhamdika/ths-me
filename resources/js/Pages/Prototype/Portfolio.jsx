import CardPortfolio from "@/Components/CardPortfolio"
import LayoutPage from "@/Layouts/LayoutPage"
import { useState, useEffect } from "react"
import { DotLoader } from "react-spinners"


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
                <DotLoader color={'#fff'} loading={loading} size={150} />
            </div> :
        <div className="pt-32">
            <h1 className="text-white justify-center text-center items-center flex text-4xl my-10 font-medium">
                This is the result of my work</h1>
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