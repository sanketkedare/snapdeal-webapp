/*eslint-disable*/
/**
 * Home Page
 * Contains the Navbar, Front Page and Footer Component.
 * All components are created in Saperate folder in Components directory.
 */

import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import FrontPage from '../Components/FrontPage/FrontPage'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/cartSlice'

const Home = () => 
{
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user);
  const CART_API = process.env.REACT_APP_CART;

  const updateStore = (data) =>
  {
    dispatch(addToCart(...data));
  }

  const getFromDB = async () => {
    const userEmail = currentUser.user.email;
    
    // Use URLSearchParams to append query parameters if needed
    const queryParams = new URLSearchParams({ userEmail });
  
    const response = await fetch(`${CART_API}?${queryParams.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      const jsonResponse = await response.json();
      updateStore(jsonResponse)
      // console.log("Cart From DB:", jsonResponse);
    } else {
      console.error("Failed to fetch cart from DB:", response.statusText);
    }
  };

  const updateDB = async(data) => 
  {
    // POST

    const body = {userEmail : currentUser.user.email , cart : data}
    const response = await fetch(CART_API,  
      {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
    
      const jsonRes = await response.json();

      // console.log(jsonRes);
  };

  useEffect(() => {
    currentUser.isAuthenticated && updateDB(data)
  }, [data]);

  useEffect(() => {
    currentUser.isAuthenticated && getFromDB();
  }, [currentUser]);

  return (
    <div className='bg-[#f0eeee]  overflow-hidden '>
      <NavBar/>
      <FrontPage/>
      <Footer />
    </div>
  )
}

export default Home
