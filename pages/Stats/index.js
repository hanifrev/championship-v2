import React from 'react'
import Navbar from '../../src/components/Navbar'
import TopScorer from '../../src/components/TopScorer'
import Footer from '../../src/components/Footer'

const index = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-auto text-center font-bold text-lg sm:text-xl md:text-4xl py-3">Top Scorers</div>
            <TopScorer />
            <Footer />
        </div>
    )
}

export default index
