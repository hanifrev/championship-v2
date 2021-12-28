import React, { useState, useEffect } from 'react'

const LatestMatch = () => {
    const [lastMatch, setLastMatch] = useState([])
    const [cmd, setCmd] = useState(0)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    const loadData =  async () => {
        setHasError(false)
        try {
            const ENDPOINT_MATCH =
              'https://api.football-data.org/v2/competitions/2016/matches?status=FINISHED '
            const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
            const options = {
              method: 'GET',
              headers: {
                'X-Auth-Token': apiKey
              }
            }

            const response = await fetch(ENDPOINT_MATCH, options)
            const jsonData = await response.json()
            const info = jsonData.matches
            // console.log(info[0].awayTeam.name)

            setLastMatch(info)
            setLoading(false)

        } catch (error) {
            setHasError(true)
        }
    }

    useEffect(() => {
        matchDay()
    }, [])

    const matchDay = async () => {
        try {
          const ENDPOINT_SEASONMD =
            'https://api.football-data.org/v2/competitions/2016/standings'
          const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
          const options = {
            method: 'GET',
            headers: {
              'X-Auth-Token': apiKey
            }
          }
          // SEASON CURRENT MATCHDAY
          const resCurMD = await fetch(ENDPOINT_SEASONMD, options)
          const mdData = await resCurMD.json()
          const infoMD = mdData.season.currentMatchday - 1
        //   console.log(infoMD)
          setCmd(infoMD)
        } catch (error) {
          setHasError(true)
        }
      }

      const theMD = cmd


    return (
        <div className="border-2 rounded-md w-full md:w-8/12 mx-auto pb-2 sm:px-2">
            <h3 className="text-center font-semibold text-base sm:text-lg">Latest Match</h3>
            <p className="text-center pb-4 text-sm sm:text-base">Matchday {cmd}</p>
            <div>
                {}
                <table className="table-fixed w-full">
                    <thead>
                        <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-xs sm:text-base">
                        {
                            loading ? (
                                <h6>Loading data . . . </h6>
                            ) : (
                                lastMatch.filter((md) => md.matchday === theMD).map((x) =>(
                                    <tr key={x.id}>
                                        <td className="text-left pb-1">{x.homeTeam.name}</td>
                                        <td className="text-center">{x.score.fullTime.homeTeam}-{x.score.fullTime.awayTeam}</td>
                                        <td className="text-right">{x.awayTeam.name}</td>
                                    </tr>
                                ))
                            )
                        }
                        {hasError && (
                            <h6 className="loadings">
                            An error occurred while fetching data, data cannot be loaded, please come
                            back later
                            </h6>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LatestMatch
