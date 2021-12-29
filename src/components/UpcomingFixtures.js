import React, { useState, useEffect } from 'react'

const UpcomingFixtures = () => {
    const [upcomingFixt, setUpcomingFixt] = useState([])
    // const [cmd, setCmd] = useState(0)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
          // const matchUpcoming = `matches?matchday=25`
          const ENDPOINT_SCHEDULED = 'https://api.football-data.org/v2/competitions/2016/'
          const apiKey = 'c324a93dadd041058d92d4fcac1dd530'
          const options = {
            method: 'GET',
            headers: {
              'X-Auth-Token': apiKey
            }
          }
    
          // fetch the currentMatchday first, then add 1
          const response = await fetch(ENDPOINT_SCHEDULED, options)
          const jsonData = await response.json()
          const upMatch = jsonData.currentSeason.currentMatchday + 1
          // PLUS 1 ABOVE TO SHOW THE UPCOMING FIXTURE
          const resUpMD = await fetch(
            `${ENDPOINT_SCHEDULED}/matches?matchday=${upMatch}`,
            options
          )
    
          const jsonUpMD = await resUpMD.json()
          const fixtureMap = jsonUpMD.matches
    
          // const matchdayInfo = jsonUpMD.matchday
    
          // console.log(jsonUpMD.matches[5].homeTeam.name)
          // console.log(fixtureMap)
          // console.log(upMatch)
          // console.log(jsonData)
          // console.log(matchUpcoming)
          // setMdInfo(upMatch)
          setUpcomingFixt(fixtureMap)
          setLoading(false)
        } catch (error) {
          setHasError(true)
        }
      }

    return (
        <div className="border-2 rounded-md w-full md:w-8/12 mx-auto pb-2 sm:px-0 my-4 bg-slate-100">
            <h3 className="text-center font-semibold text-base sm:text-lg pb-0 mb-4 bg-slate-400 rounded-md">Upcoming Fixtures</h3>
            {/* <p className="text-center pb-4 text-sm sm:text-base"></p> */}
            <div>
                {}
                <table className="table-fixed w-full">
                    <thead>
                        <tr>
                        <th></th>
                        <th className="w-6"></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-xss sm:text-base">
                        {
                            loading ? (
                                <p className="text-center mx-auto">Loading data . . . </p>
                            ) : (
                                upcomingFixt.map((x, id) =>(
                                    <tr key={id}>
                                        <td className="text-left pb-1 pl-3">{x.homeTeam.name}</td>
                                        <td className="text-center">vs</td>
                                        <td className="text-right pr-3">{x.awayTeam.name}</td>
                                    </tr>
                                ))
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
        </div>
    )
}

export default UpcomingFixtures
