import React from 'react'
import HomeIcon from '../assets/home.png'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && (
        <div
          className='bg-info'
          style={{ height: '80px' }}
        >
          <Link to={'/'}>
            <img
              style={{ width: '80px', color: 'white', padding: '1em', filter: 'invert(1)' }}
              src={HomeIcon}
              alt='home'
            />
          </Link>
        </div>
      )}
    </>
  )
}

export default NavBar
