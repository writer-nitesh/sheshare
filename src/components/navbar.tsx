'use client'
import { Logo, LogoText } from "./logo";
import { Banner } from "./banner";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Cart } from "./cart";

import { useState } from "react";
export function Navbar() {
    const [openNavbar, setOpenNavbar] = useState(false)
    return (
        <header className="flex flex-col">
            {/* <Banner message="List your property in 3 easy steps - Register" /> */}
            <div className="flex justify-between items-center p-4">
                <div className="lg:hidden">
                    <button
                        onClick={() => setOpenNavbar(!openNavbar)}
                        aria-label="menu"
                    >
                        <HiBars3 className="size-6" />
                    </button>
                </div>
                <Logo />
                <nav className="hidden lg:flex gap-4 font-light uppercase ">
                    <a href="/" className="hover:text-primary">Home</a>
                    <a href="" className="hover:text-primary">Explore</a>
                    <a href="" className="hover:text-primary">Vlogs</a>
                    <a href="" className="hover:text-primary">About Us</a>
                </nav>
                <div className="flex justify-between items-center gap-2">
                    <div className="lg:block hidden">
                        <a
                            href="/register"
                            className="link_btn"
                        >
                            Register Now
                        </a>
                    </div>

                </div>
            </div>

            {
                openNavbar &&
                <div className="fixed top-0 bottom-0 z-20  lg:hidden w-[250px] p-4 shadow-md bg-white flex flex-col gap-4">
                    <div><button onClick={() => setOpenNavbar(!openNavbar)} aria-label="close_menu"><HiXMark className="size-6" /></button></div>
                    <nav className="flex flex-col lg:hidden gap-2 font-light uppercase">
                        <a href="/" className="hover:text-primary">Home</a>
                        <a href="" className="hover:text-primary">Explore</a>
                        <a href="" className="hover:text-primary">Vlogs</a>
                        <a href="" className="hover:text-primary">About Us</a>

                    </nav>
                    <div className="lg:hidden ">
                        <a
                            href="/register"
                            className="block rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white shadow hover:bg-primary/90"
                        >
                            Register
                        </a>
                    </div>
                </div>
            }
        </header>
    )
}
