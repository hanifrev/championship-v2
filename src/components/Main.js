import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import LatestMatch from './LatestMatch'
import UpcomingFixtures from './UpcomingFixtures'
import Footer from './Footer'

const Main = () => {
    return (
        <div className="">
            <Navbar />
            <div className="main-container">
                <Header />
                <LatestMatch />
                <UpcomingFixtures />
                <Footer />
            </div>
        </div>
    )
}

export default Main
