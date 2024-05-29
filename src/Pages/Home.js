import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import FrontPage from '../Components/FrontPage/FrontPage'

const Home = () => 
{
  return (
    <div className='bg-[#f0eeee]'>
      <NavBar/>
      <FrontPage/>
      <Footer />
    </div>
  )
}

export default Home
