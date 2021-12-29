import React, { useState, useEffect } from 'react'

const TopScorer = () => {
    const [topScore, setTopScore] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    const loadData =  async () => {
        setHasError(false)
        try {
            const ENDPOINT_MATCH =
              'https://api.football-data.org/v2/competitions/2016/scorers'
            const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
            const options = {
              method: 'GET',
              headers: {
                'X-Auth-Token': apiKey
              }
            }

            const response = await fetch(ENDPOINT_MATCH, options)
            const jsonData = await response.json()
            const info = jsonData
            const topsc = info.scorers
            console.log(info)
            console.log(info.scorers.map((x)=> {
                return (
                    x.team.id
                )
            }))

            setTopScore(topsc)
            setLoading(false)

        } catch (error) {
            // setHasError(true)
        }
    }

    return (
        <div className="text-xs sm:text-base">
            {
                loading ? (
                    <p className="text-center mx-auto text-slate-100">Loading data . . .</p>
                ) : (
                    topScore.map((x, id) => {
                        return(
                        <div key={id} className="flex flex-row py-2 mx-auto w-11/12 sm:w-7/12 md:w-2/5 justify-between border-2 my-2 px-2 rounded-md bg-slate-100">
                            <div>
                                <p className="font-semibold pb-1">{x.player.name}</p>
                                <p>{x.team.name}</p>
                            </div>
                            <div className="flex items-center">
                                {x.numberOfGoals} Goals
                            </div>
                        </div>
                        )
                    })
                )
            }
            {hasError && (
                <p className="text-center mx-auto text-slate-100">
                An error occurred while fetching data, data cannot be loaded, please come
                back later
                </p>
            )}
        </div>
    )
}

export default TopScorer
