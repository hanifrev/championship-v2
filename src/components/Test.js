import React, { useState, useEffect } from 'react'

const Test = () => {
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
            // console.log(info)

            setLastMatch(info)
            setLoading(false)

        } catch (error) {
            setHasError(true)
        }
    }

    return (
        <div className="text-6xl">
            
        </div>
    )
}

export default Test
