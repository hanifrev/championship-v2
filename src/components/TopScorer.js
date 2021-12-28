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
            // console.log(topsc)
            // console.log(info.scorers.map((x)=> {
            //     return (
            //         x.numberOfGoals
            //     )
            // }))

            setTopScore(topsc)
            setLoading(false)

        } catch (error) {
            // setHasError(true)
        }
    }

    return (
        <div>
            {
                loading ? (
                    <p className="text-center mx-auto">Loading data . . .</p>
                ) : (
                    topScore.map((x, id) => {
                        return(
                        <div key={id} className="flex flex-row py-2 mx-auto w-11/12 sm:w-7/12 md:w-2/5 justify-between border-2 my-2 px-2 rounded-md bg-slate-100">
                            <div>
                                <p className="font-semibold">{x.player.name}</p>
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
        </div>
    )
}

export default TopScorer
