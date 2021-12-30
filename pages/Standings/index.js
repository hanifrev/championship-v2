import React from 'react'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import Head from 'next/head'
import Standings from '../../src/components/Standings'

const index = () => {
    return (
        <div className="bg-stadium">
            <Head>
                <title>The Championship | Standings</title>
            </Head>
            <div className="bg-opac">
                <Navbar />
                <div className="mx-auto text-center font-bold text-lg sm:text-xl md:text-4xl py-3 text-slate-100">Standings</div>
                <Standings />
                <Footer />
            </div>
        </div>
    )
}

export default index
