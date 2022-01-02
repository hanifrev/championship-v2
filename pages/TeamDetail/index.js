import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
import { useRouter } from 'next/router'

const Detail = ({id}) => {
    // const router = useRouter()
    // const {id} = router.query
    // console.log(id);

    const [detail, setDetail] = useState([])
    const [clName, setClName] = useState([])
    const [player, setPlayer] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        loadData()
      }, [])

      const loadData = async () => {
        setHasError(false)
    
        try {
          const ENDPOINT_CLUB = 'https://api.football-data.org/v2/teams/'
          const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
          const options = {
            method: 'GET',
            headers: {
              'X-Auth-Token': apiKey
            }
          }
          const response = await fetch(`${ENDPOINT_CLUB}/${id}`, options)
          const jsonData = await response.json()
    
          const info = jsonData
          // console.log(idParam)
          // console.log(response)
          console.log(info)
          setClName(info.name)
          setPlayer(info.squad)
          setDetail(info)
          setLoading(false)
        } catch (error) {
          setHasError(true)
        }
      }  

    return (
        <div className="bg-stadium">
            <Head>
                <title>{clName} | The Championship </title>
            </Head>
            <div className="bg-opac">
                <Navbar />
                <div className="mx-auto text-center font-bold text-lg sm:text-xl md:text-4xl py-3 text-slate-100">{clName}</div>

                <Footer />
            </div>
        </div>
    )
}

export default Detail

Detail.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}