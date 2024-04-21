"use client"
import Image from "next/image"
import Link from "next/link"
import { navLinks } from "@/app/constants"
import { usePathname } from "next/navigation"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { Button } from "../ui/button"


const Sidebar = () => {
    const pathname = usePathname()
    
  return (
    <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
            <Link href="/" className="sidebar-logo">
                <Image src="/logo.png" alt="logo" width={180} height={33}/>
            </Link>
            <SignedIn>
            <nav className="sidebar-nav">
                <ul className="sidebar-nav_elements">
                    {navLinks.slice(0,3).map((link)=> {
                        const isActive = link.route ===pathname
                        return(
                            <li key={link.route} className={`sidebar-nav_element group ${
                                isActive ? "bg-blue-500 text-white": "text-gray-500"
                            }`}>
                                <Link  href={link.route} className="sidebar-link">
                                    <Image 
                                        src={link.icon}
                                        alt="icon"
                                        width={24}
                                        height={24}
                                        className={`${isActive && "brightness-200"}`}
                                    />
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}


                </ul>

            </nav>
            </SignedIn>
            <SignedOut>
                <Button asChild className="button  bg-blue-400 bg-cover">
                    <Link  href='/sign-in'>Sign In</Link>
                </Button>
                <p className="text-center">Don&apos;t have a account? {<Link href='sign-up'><span className="text-blue-300"> Sing Up</span></Link>}</p>
            </SignedOut>

        </div>
    </aside>
  )
}

export default Sidebar