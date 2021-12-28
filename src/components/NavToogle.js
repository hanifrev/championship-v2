import React from 'react'
import Link from 'next/link';

const NavToogle = ({ onClose }) => {

    return (
            <div className="list-none toogle" style={{ fontFamily: ['Ubuntu', 'sans-serif'], }}>
                <li className="mx-auto pb-4">
                    <Link href="#">
                        Teams
                    </Link>
                </li>
                <li className="mx-auto pb-4">
                    <Link href="#">
                        Standings
                    </Link>
                </li>
                <li className="mx-auto pb-4">
                    <Link href="#">
                        Stats
                    </Link>
                </li>
                <button onClick={onClose} className="border px-2 py-1 rounded-md active:bg-red-500">close</button>
            </div>
    )
}

export default NavToogle
