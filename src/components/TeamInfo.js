import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const TeamInfo = () => {
    const [displayTeam, setDisplayTeam] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const refreshPage = () => {
        window.location.reload()
    }

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        setHasError(false)

        try {
            const ENDPOINT_TEAMS = 'https://api.football-data.org/v2/competitions/2016/teams'
            const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
            const options = {
              method: 'GET',
              headers: {
                'X-Auth-Token': apiKey
              }
            }
      
            const response = await fetch(ENDPOINT_TEAMS, options)
            const jsonData = await response.json()
      
            const info = jsonData.teams
            console.log(info[9])
            setDisplayTeam(info)
            setLoading(false)
          } catch (error) {
            setHasError(true)
          }
    }

    return (
        <div>
            <div>
                {loading ? (
                    <p>Loading Data . . .</p>
                ) : (
                    displayTeam.map((x) => {
                        return (
                            <div key={x.id}>
                                <div  className="flex flex-row mx-auto justify-center text-left py-4">
                                    <div className="flex items-center ">
                                        <img src={x.crestUrl.replace(/^http:\/\//i, 'https://')} className="w-20" />
                                    </div>
                                    <div className="w-3/12 pl-4">
                                        <p>{x.name}</p>
                                        <p>{x.venue}</p>
                                        <Link href={x.website}>{x.website}</Link>
                                        <div className="pt-2">
                                            <Link href="https://google.com">TEAM INFO</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
                {hasError && (
                    <p className="">
                        An error occurred while fetching data, data cannot be loaded, please come back
                        later
                    </p>
                    )}
            </div>
        </div>
    )
}

export default TeamInfo
