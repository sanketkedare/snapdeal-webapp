import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import FrontPage from '../Components/FrontPage/FrontPage'
import { useLocation } from 'react-router-dom'

const Home = () => 
{
  const {pathname} = useLocation()

  return (
    <div className='bg-[#f0eeee]'>
      <NavBar/>
      <FrontPage/>
      <Footer />
    </div>
  )
}

export default Home
