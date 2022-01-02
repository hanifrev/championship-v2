/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
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
        <div style={{ fontFamily: ['Ubuntu', 'sans-serif'], }} className="bg-stadium">
            <Head>
                <title>{clName} | The Championship </title>
            </Head>
            <div style={{ fontFamily: ['Ubuntu', 'sans-serif'], }} className="bg-opac">
                <Navbar />
                <div className="mx-auto text-center font-bold text-lg sm:text-xl md:text-3xl pt-3 pb-5 text-white">{clName}</div>
                <div>
                  {loading ? (
                    <p className="text-center mx-auto text-white">Loading Data . . .</p>
                  ) : (
                    <div>
                      <div className="mx-auto flex flex-col justify-center bg-white w-80 sm:w-96 lg:w-33rem rounded-md">
                        <div className="flex flex-col text-center py-4">
                          <img src={detail.crestUrl} alt="logo" className="w-28 mx-auto pt-3 pb-6" />
                          <p>{detail.venue}</p>
                          <p className="italic">{detail.address}</p>
                          <a href={detail.website} className="text-blue-600" target="_blank" rel="noreferrer">{detail.website}</a>
                        </div>
                        
                      </div>
                      <div className="mx-auto flex flex-col justify-center bg-white w-80 sm:w-96 lg:w-33rem rounded-md mt-4">
                        <p className="text-xl text-center font-bold py-4">{detail.shortName}'s Squad</p>
                        {/* goalkeeper */}
                        <div className="text-center pb-4">
                          <p className="font-bold">Goalkeeper</p>
                          {player.filter((pos) => pos.position === 'Goalkeeper')
                            .map((x) => (
                              <p key={x.id} className="py-1">{x.name}</p>
                            ))
                          }
                        </div>

                        {/* defender */}
                        <div className="text-center pb-4">
                          <p className="font-bold">Defender</p>
                          {player.filter((pos) => pos.position === 'Defender')
                            .map((x) => (
                              <p key={x.id} className="py-1">{x.name}</p>
                            ))
                          }
                        </div>

                        {/* midfielder */}
                        <div className="text-center pb-4">
                          <p className="font-bold">Midfielder</p>
                          {player.filter((pos) => pos.position === 'Midfielder')
                            .map((x) => (
                              <p key={x.id} className="py-1">{x.name}</p>
                            ))
                          }
                        </div>

                        {/* forward */}
                        <div className="text-center pb-4">
                          <p className="font-bold">Attacker</p>
                          {player.filter((pos) => pos.position === 'Attacker')
                            .map((x) => (
                              <p key={x.id} className="py-1">{x.name}</p>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )}
                  {hasError && (
                    <p className="text-center mx-auto text-white">
                        An error occurred while fetching data, data cannot be loaded, please come back
                        later
                    </p>
                    )}
                </div>
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