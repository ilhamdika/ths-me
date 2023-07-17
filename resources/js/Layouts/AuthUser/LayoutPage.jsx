import PrimaryButton from "@/Components/PrimaryButton"
import NavigationBar from "./NavigationBar"
import { usePage } from "@inertiajs/react"
import { useEffect, useState } from "react";
import { set } from "lodash";
import { FiMoon, FiSun } from "react-icons/fi";


export default function LayoutPage ({children}){
    const { props } = usePage();
    const [dark, setDark] = useState(true)

    const changeText = () => {
        setDark('dark')
    }

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

    
    return(
        <>
        <div className="dark:bg-dark">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <NavigationBar
                text={dark ? <FiSun/> : <FiMoon/>}
                click={toggleTheme}
                
                
                />
                {/* <PrimaryButton onClick={toggleTheme}>Dark</PrimaryButton> */}

                {/* Konten */}
                <div>
                    <main className="">
                        {children}
                    </main>
                </div>

            </div>
        </div>
        </>
    )
}