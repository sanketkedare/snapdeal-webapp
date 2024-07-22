import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginNavbar from '../Components/Login/LoginNavbar';
import { useSelector } from 'react-redux';
import LoginPage from '../Components/Login/LoginPage';

const Login = () => {

  const [showAuth, setShowAuth] = useState(true)
  const Authenticated = useSelector((state)=>state.user.isAuthenticated);
  console.log('Authenticated : ', Authenticated)
  if (!showAuth && Authenticated) {
    return <Navigate to="/" />;
  }


  return (
    <div className='h-screen bg-gradient-to-b from-sky-400 to-black via-blue-800'>
      <LoginNavbar />
      <LoginPage/>
    </div>
  );
}

export default Login;
