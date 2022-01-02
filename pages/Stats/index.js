import React from 'react'
import Navbar from '../../src/components/Navbar'
import TopScorer from '../../src/components/TopScorer'
import Footer from '../../src/components/Footer'
import Head from 'next/head'

const index = () => {
    return (
        <div style={{ fontFamily: ['Ubuntu', 'sans-serif'], }} className="bg-stadium">
            <Head>
                <title>The Championship | Top Scorer</title>
            </Head>
            <div style={{ fontFamily: ['Ubuntu', 'sans-serif'], }} className="bg-opac">
                <Navbar />
                <div className="mx-auto text-center font-bold text-lg sm:text-xl md:text-4xl py-3 text-slate-100">Top Scorer</div>
                <TopScorer />
                <Footer />
            </div>
        </div>
    )
}

export default index
