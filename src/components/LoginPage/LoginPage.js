import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import "./LoginPage.css"
import HomePage from '../HomePage/HomePage';

const LoginPage = ({setIsLoggedIn}) => {




  return (
    <>
  <div className='login_page_container' style={{backgroundImage:'url("img/bg-image.jpg")'}}>

<LoginForm setIsLoggedIn={setIsLoggedIn} />

</div>


    </>
  
  )
}

export default LoginPage;