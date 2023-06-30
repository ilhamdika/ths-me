import Authenticated from "@/Layouts/AuthAdmin/Index"
import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";


export default function index () {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    return(
        <Authenticated>
              {
                loading ? <div className="flex justify-center items-center h-screen">
                    <DotLoader color={'#161616'} loading={loading} size={150} />
                </div> :
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl font-bold">Welcome to Admin Dashboard</h1>
            </div>
                }
        </Authenticated>
    )
}