import React, { useState } from 'react';
import "./LoginForm.css";

import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const LoginForm = ({setIsLoggedIn}) => {
const [signIn, setSignIn] = useState(true);
const [signUp, setSignUp] = useState(false);


function signInHandle(event){

    event.preventDefault();
    setSignUp(false);
    setSignIn(true);
}

function signUpHandle(event){

    event.preventDefault();
    setSignUp(true);
    setSignIn(false);
}

function forgotPasswordHandle(event){

    event.preventDefault();
    setSignUp(false);
    setSignIn(false);
}

    return (
        <div className='login_form_container'>

{/* Ecom brand */}

            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "900", fontSize: "24px", color: "#29282a" }}>E-com<span style={{ color: "#ff4a4a" }}>.</span></span>

          {

            signIn ?   <Link href="#" sx={{ color: "#0b55f7", textAlign: "right", fontSize: "15px" }} underline="hover" onClick={signUpHandle}>
                    {'No account?'}<br />{'Signup'}
                </Link>

                :

                <Link href="#" style={{ color: "#0b55f7", textAlign: "right", fontSize: "15px" }} underline="hover" onClick={signInHandle}>
                    {'Already Have Account?'}<br />{'Signin'}
                </Link>

            } 
            </div>

{/*sign in header  */}

            <div  className="header_text_container">
                <span className='header_text'>Sign in</span>
            </div>

{/* sign in with google */}

            <div className='sign_in_google_container' style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button variant="contained" sx={{ background: "#ffffff", background: "#3f7bf0", textTransform: 'none', borderRadius: "8px", height: "50px", flex: "1", marginRight: "13px" }} startIcon={<GoogleIcon fontSize='large' />}>
                    Sign in With Google
                </Button>


                <Button variant="contained" sx={{ background: "#fbd4fb", textTransform: 'none', borderRadius: "8px", height: "50px", fontSize: "20px", px: 1 }}>
                    &#127936;
                </Button>



            </div>

     {signIn && <SignIn forgotPasswordHandle={forgotPasswordHandle} setIsLoggedIn={setIsLoggedIn} />}

        {signUp && <SignUp/>}
{!signIn && !signUp && <ForgotPassword/>}

        </div>
    )
}

export default LoginForm