import PrimaryButton from "@/Components/PrimaryButton"
import NavigationBar from "./NavigationBar"
import { usePage } from "@inertiajs/react"
import { useEffect, useState } from "react";
import { set } from "lodash";


export default function LayoutPage ({children}){
    const { props } = usePage();
    const [dark, setDark] = useState('dark')

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
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      setDark('change dark')
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
        setDark('change light') 
    }
  };

    
    return(
        <>
        <div className="dark:bg-dark">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <NavigationBar
                text={dark}
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