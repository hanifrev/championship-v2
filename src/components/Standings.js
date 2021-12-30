import React, { useState, useEffect } from 'react'

const Standings = () => {
    const [standing, setStanding] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        loadData()
      }, [])
    
      const loadData = async () => {
        setHasError(false)
    
        try {
          const ENDPOINT_STAND =
            'https://api.football-data.org/v2/competitions/2016/standings?standingType=TOTAL'
          const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
          const options = {
            method: 'GET',
            headers: {
              'X-Auth-Token': apiKey
            }
          }
    
          const response = await fetch(ENDPOINT_STAND, options)
          const jsonData = await response.json()
    
          const info = jsonData.standings[0].table
          // const season = jsonData.season.currentMatchday
          // console.log(info)
          // console.log('test')
          setStanding(info)
          setLoading(false)
        } catch (error) {
          setHasError(true)
        }
      }

    return (
        <div>
            <table className="table-fixed md:w-7/12 max-w-3xl mx-auto rounded-md">
                <thead>
                    <tr className="bg-slate-400 text-sm sm:text-base rounded-md">
                        <th className="w-5%">#</th>
                        <th className="w-2/5 sm:w-2/6">Club</th>
                        <th>G</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody className="text-xss sm:text-base">
                        {
                            loading ? (
                                <p className="text-center mx-auto text-white">Loading data . . . </p>
                            ) : (
                                standing.map((x, id) => {
                                    return(
                                    <tr key={id} className="bg-slate-100 pb-2">
                                        <td className="text-center py-2">{x.position}</td>
                                        <td>
                                            <p>{x.team.name}</p>
                                        </td>
                                        <td className="">
                                            <p className="text-center">{x.playedGames}</p>
                                        </td>
                                        <td className="">
                                            <p className="text-center">{x.won}</p>
                                        </td>
                                        <td className="">
                                            <p className="text-center">{x.draw}</p>
                                        </td>
                                        <td className="">
                                            <p className="text-center">{x.lost}</p>
                                        </td>
                                        <td className="">
                                            <p className="text-center">{x.goalDifference}</p>
                                        </td>
                                        <td className="">
                                            <p className="text-center">
                                                <b>{x.points}</b>
                                            </p>
                                        </td>
                                    </tr>
                                    )
                                })
                            )
                        }
                        {hasError && (
                            <p className="text-center mx-auto">
                            An error occurred while fetching data, data cannot be loaded, please come
                            back later
                            </p>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default Standings
