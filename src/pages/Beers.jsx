import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Beer from '../components/Beer'

const Beers = () => {
  const [beers, setBeers] = useState(null)

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      setBeers(res.data)
      console.log(res.data)
    })
  }, [])

  return <>{beers && beers.map((beer) => <Beer beer={beer} />)}</>
}

export default Beers
