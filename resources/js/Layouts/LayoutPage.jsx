import NavigationBar from "./AuthUser/NavigationBar";

export default function LayoutPage ({children}){
    return(
        <>
        <div className="bg-black">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <NavigationBar/>

                {/* Konten */}
                <div>
                    <main className="bg-black">
                        {children}
                    </main>
                </div>

            </div>
        </div>
        </>
    )
}