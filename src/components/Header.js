import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex flex-col justify-center py-8">
            <h1 className="mx-auto text-center text-xl md:text-4xl font-bold">Welcome to The Championship</h1>
            {/* <Image src="https://news.images.itv.com/image/file/1849785/img.jpg" width={1008} height={389} alt="img"/> */}
            <img src="https://news.images.itv.com/image/file/1849785/img.jpg" alt="img" className="w-full md:w-8/12 mx-auto pt-5" />
        </div>
    )
}

export default Header
