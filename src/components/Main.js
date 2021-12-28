import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import LatestMatch from './LatestMatch'

const Main = () => {
    return (
        <div className="">
            <Navbar />
            <div className="main-container">
                <Header />
                <LatestMatch />
            </div>
        </div>
    )
}

export default Main
