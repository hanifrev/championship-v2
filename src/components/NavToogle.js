import React from 'react'
import Link from 'next/link';

const NavToogle = ({ onClose }) => {

    return (
            <div className="list-none toogle font-bold" style={{ fontFamily: ['Ubuntu', 'sans-serif'], }}>
                <li className="mx-auto pb-4">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="mx-auto pb-4">
                    <Link href="/Teams">
                        Teams
                    </Link>
                </li>
                <li className="mx-auto pb-4">
                    <Link href="/Standings">
                        Standings
                    </Link>
                </li>
                <li className="mx-auto pb-4">
                    <Link href="/Stats">
                        Stats
                    </Link>
                </li>
                <button onClick={onClose} className="border px-2 py-1 rounded-md bg-slate-800 active:bg-red-500">C L O S E</button>
            </div>
    )
}

export default NavToogle
