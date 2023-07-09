
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
       <h1>Test</h1>
		</>
    )
}