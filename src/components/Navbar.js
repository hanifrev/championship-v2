/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link';
import NavToogle from './NavToogle';
import { FaAlignJustify } from "react-icons/fa";

const Navbar = ({ customClass }) => {
    const [show, setShow] = useState(false)

    return (
        <div className={`flex flex-row justify-between py-2 md:py-3 px-4 sm:px-12 md:px-16 lg:px-32 xl:px-96 text-white bg-navbar text-base ${customClass}`} style={{ fontFamily: ['Ubuntu', 'sans-serif'], }}>
            <div>
               <Link href="/">
                    <img src="https://i.imgur.com/QOCYSZl.png" alt="Logo" className="w-8/12" />
                </Link>
            </div>
            
            {/* mobile nav */}
            <div className="flex md:hidden">
                <button onClick={()=> setShow(!show)} ><FaAlignJustify /></button>
            </div>
            {show && <NavToogle onClose={()=> setShow(!show)} />}

            {/* desktop nav */}
            <div className="list-none hidden md:flex justify-evenly w-4/12 items-center font-bold">
                <li>
                    <Link href="/Teams">
                        Teams
                    </Link>
                </li>
                <li>
                    <Link href="/Standings">
                        Standings
                    </Link>
                </li>
                <li>
                    <Link href="/Stats">
                        Stats
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default Navbar
