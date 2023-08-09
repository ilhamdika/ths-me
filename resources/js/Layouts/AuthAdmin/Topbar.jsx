
import { Link } from "@inertiajs/react";
import { useState, useRef } from "react"

export default function Topbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        if(dropdownOpen){
            dropdownTarget.current.classList.remove("hidden");
        }else{
            dropdownTarget.current.classList.add("hidden");
        }
        setDropdownOpen(!dropdownOpen);
    }


    return (
        <>
       <div className="bg-black">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                    </div>
                </div>
                </div>
       </div>
		</>
    )
}