import SideBar from "./SideBar";
import Topbar from "./Topbar";

export default function Authenticated ({children}){
    return(
        <>
        <div className="flex">
            
            <SideBar />

            <div className="h-screen flex-1 p-7">
                <main>
                    {children}
                </main>
            </div>
        </div>
    
        </>
    )
}