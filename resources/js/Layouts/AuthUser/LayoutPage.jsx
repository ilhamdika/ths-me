import PrimaryButton from "@/Components/PrimaryButton"
import NavigationBar from "./NavigationBar"
import { usePage } from "@inertiajs/react"
import { useEffect } from "react";


export default function LayoutPage ({children}){
    const { props } = usePage();

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
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

    
    return(
        <>
        <div className="bg-white dark:bg-dark">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <NavigationBar
                
                click={toggleTheme}
                
                />
                {/* <PrimaryButton onClick={toggleTheme}>Dark</PrimaryButton> */}

                {/* Konten */}
                <div>
                    <main className="bg-white dark:bg-dark">
                        {children}
                    </main>
                </div>

            </div>
        </div>
        </>
    )
}