"use client";
import { usePathname } from "next/navigation"

export default function Nav(){
    const path = usePathname()
    return(
        <nav className="">
            <a className={`px-2 hover:underline hover:underline-offset-8 hover:decoration-green-500 hover:decoration-2 hover:text-green-500 text-[10px] md:text-lg ${path === "/" ? "underline underline-offset-8 decoration-green-500 decoration-2 text-green-600" : ""}`} href="/">Home</a>
            <a className={`px-2 hover:underline hover:underline-offset-8 hover:decoration-green-500 hover:decoration-2 hover:text-green-500 text-[10px] md:text-lg ${path === "/login" ? "underline underline-offset-8 decoration-green-500 decoration-2 text-green-600" : ""}`} href="/login">Log in</a>
            <a className={`px-2 hover:underline hover:underline-offset-8 hover:decoration-green-500 hover:decoration-2 hover:text-green-500 text-[10px] md:text-lg ${path === "/signup" ? "underline underline-offset-8 decoration-green-500 decoration-2 text-green-600" : ""}`}  href="/signup">Sign up</a>
        </nav>
    )
}