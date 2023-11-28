'use client'
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation'


import {PATHS} from "@/constants";
import {BarsIcon, TimesIcon} from "@/icons";

export function Navbar() {


    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)


    const NAVIGATION_CONFIG = [
        {
            name: "Blog",
            path: PATHS.BLOG,
        },
        {
            name: "Projects",
            path: PATHS.PROJECTS,
        },
        {
            name: "About Our Platform",
            path: PATHS.ABOUT_PLATFORM,
        },
        {
            name: "Contact",
            path: PATHS.CONTACT,
        },
    ];

    const renderNav = (isMobile = false) => (
        <ul
            style={{
                transition: '.4s ease'
            }}
            className={`${isOpen ? 'left-[0px]' : '-left-[400px]'} fixed h-screen max-w-[350px] bg-white z-30 pt-[30px] px-[1rem] bottom-0 w-full  lg:py-0 lg:h-min lg:static lg:flex lg:w-max lg:max-w-max lg:items-center gap-[8px]`}>
            {isMobile && (
                <li className={'mb-[80px] flex items-center justify-between'}>
                    <h1 className="text-[18px] text-[#1A1A1A] font-[600]">
                        TechTapestry
                    </h1>

                    <button type={'button'} onClick={() => setIsOpen(false)}>
                        <TimesIcon/>
                    </button>
                </li>

            )}
            {NAVIGATION_CONFIG.map((navCon, index) => (
                <li
                    key={index}
                    className={`text-[15px] mt-[14px] px-[15px] py-[7px] rounded-[10px] cursor-pointer  transition ${pathname === navCon.path ? 'bg-violet-700 text-white shadow-xl' : ''}  hover:bg-violet-600 hover:shadow-2xl hover:text-white active:bg-violet-700`}
                >
                    <Link href={navCon.path} scroll={false}>
                        {navCon.name}
                    </Link>
                </li>
            ))}
        </ul>

    )

    return (
        <>
            <div className="container px-[1rem] w-full mx-auto py-[30px] flex items-center justify-between"
                 data-aos={'fade-down'}>
                <h1 className="text-[18px] sm:text-[20px] text-[#1A1A1A] font-[600]">
                    TechTapestry
                </h1>
                <button type={'button'} className={'lg:hidden'} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <TimesIcon/> : <BarsIcon/>}
                </button>
                <div className={'2xl:block hidden'}>
                    {renderNav()}
                </div>
            </div>
            <div className={'2xl:hidden block'}>
                {renderNav(true)}
            </div>
        </>

    );
}
