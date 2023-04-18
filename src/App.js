import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import BeerDetails from './pages/BeerDetails'

function App() {
  return (
    <div className='App'>
    <NavBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/beers'
          element={<Beers />}
        />
        <Route
          path='/beers/:id'
          element={<BeerDetails />}
        />
        <Route
          path='/random-beer'
          element={<RandomBeer />}
        />
        <Route
          path='/new-beer'
          element={<NewBeer />}
        />
      </Routes>
    </div>
  )
}

export default App
