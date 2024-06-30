import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginNavbar from '../Components/Login/LoginNavbar';
import Authentication from '../Components/Authentication/Authentication';
import { useSelector } from 'react-redux';

const Login = () => {

  const [showAuth, setShowAuth] = useState(true)
  const Authenticated = useSelector((state)=>state.user.isAuthenticated);
  console.log(Authenticated)
  
  if (!showAuth && Authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className='bg-sky-200'>
      <LoginNavbar />
      <Authentication setShowAuth= {setShowAuth} />
    </div>
  );
}

export default Login;
