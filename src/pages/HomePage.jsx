import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='text-start '>
      <Link to={'/beers'}>
        <div>
          <img src={require('../../src/assets/beers.png')} alt="beers"/>
          <h1 className='p-2'>All Beers</h1>
          <p className='p-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            arcu augue, porttitor quis arcu ut, hendrerit consequat ante.
            Suspendisse ac augue leo.
          </p>
        </div>
      </Link>
      <Link to={'/random-beer'}>
        <div>
        <img src={require('../../src/assets/random-beer.png')} alt="beers"/>
          <h1 className='p-2'>Random Beer</h1>
          <p className='p-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            arcu augue, porttitor quis arcu ut, hendrerit consequat ante.
            Suspendisse ac augue leo.
          </p>
        </div>
      </Link>
      <Link to={'/new-beer'}>
        <div>
        <img src={require('../../src/assets/new-beer.png')} alt="beers"/>
          <h1 className='p-2'>New Beer</h1>
          <p className='p-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            arcu augue, porttitor quis arcu ut, hendrerit consequat ante.
            Suspendisse ac augue leo.
          </p>
        </div>
      </Link>
    </div>
  )
}

export default HomePage
