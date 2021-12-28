import React, { useState } from 'react'
import Link from 'next/link';
import NavToogle from './NavToogle';

const Navbar = ({ customClass }) => {
    const [show, setShow] = useState(false)

    return (
        <div className={`flex flex-row justify-between py-2 md:py-3 px-4 sm:px-12 md:px-16 lg:px-32 xl:px-96 text-white bg-navbar text-base ${customClass}`} style={{ fontFamily: ['Ubuntu', 'sans-serif'], }}>
            <div>
               <Link href="/">
                    Logo
                </Link>
            </div>
            
            {/* mobile nav */}
            <div className="flex md:hidden">
                <button onClick={()=> setShow(!show)} >=</button>
            </div>
            {show && <NavToogle onClose={()=> setShow(!show)} />}

            {/* desktop nav */}
            <div className="list-none hidden md:flex justify-evenly w-4/12">
                <li>
                    <Link href="#">
                        Teams
                    </Link>
                </li>
                <li>
                    <Link href="#">
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
