import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import Head from 'next/head'
import TeamInfo from '../../src/components/TeamInfo'

const index = () => {
    return (
        <div style={{ fontFamily: ['Ubuntu', 'sans-serif'], }} className="bg-stadium">
            <Head>
                <title>The Championship | Teams</title>
            </Head>
            <div style={{ fontFamily: ['Ubuntu', 'sans-serif'], }} className="bg-opac">
                <Navbar />
                <div className="mx-auto text-center font-bold text-lg sm:text-xl md:text-4xl py-3 text-slate-100">Teams</div>
                <TeamInfo />
                <Footer />
            </div>
        </div>
    )
}

export default index
