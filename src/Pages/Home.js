/**
 * Home Page
 * Contains the Navbar, Front Page and Footer Component.
 * All components are created in Saperate folder in Components directory.
 */

import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import FrontPage from '../Components/FrontPage/FrontPage'

const Home = () => 
{
  return (
    <div className='bg-[#f0eeee]  overflow-hidden '>
      <NavBar/>
      <FrontPage/>
      <Footer />
    </div>
  )
}

export default Home
