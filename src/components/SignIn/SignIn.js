import { Button, Link } from '@mui/material'
import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const SignIn = ({forgotPasswordHandle,setIsLoggedIn}) => {
   const navigate = useNavigate()

  const[userNameOrEmail,setUserNameOrEmail] = useState("");
  const[password,setPassword] = useState("");



 

  function handleUserNameOrEmail(event){

    setUserNameOrEmail(()=>event.target.value)
 
   }

   function handlePassword(event){

    setPassword(()=>event.target.value)
 
   }


  async function signInUser(){

   let isEmail = userNameOrEmail.includes(".com");
let obj={}
if(isEmail){
obj = {email:userNameOrEmail,password}
}
else{
   obj = {userName:userNameOrEmail,password}

}
   
let res1 = await axios.post("http://localhost:4000/signin",{...obj})

alert(res1.data.message)
if(res1.status==200){
   window.sessionStorage.setItem("isLoggedIn", "true");

   setIsLoggedIn(()=>{
   return window.sessionStorage.getItem("isLoggedIn");

   })
   navigate("/home"); 
}

  }



  return (

    <>
   {/* user name */}
   <div className='input_field_container' style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
   <span style={{ color: "#989797", marginBottom: "10px", fontSize: "14px" }}>Username or Email Address</span>
   <input type="text" className='input_field' value={userNameOrEmail} onChange={handleUserNameOrEmail}  />

</div>
{/* Password */}

<div className='input_field_container' style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
   <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
       <span style={{ color: "#989797", fontSize: "14px" }}>Password</span>
       <Link href="#" sx={{ color: "#0b55f7", textAlign: "right", fontSize: "15px" }} underline="hover" onClick={forgotPasswordHandle}>
           {'Forgot Password?'}
       </Link>

   </span>

   <input  className="input_field" type="password" value={password} onChange={handlePassword} />

</div>


<div style={{ width: "100%" }}>
   <Button variant="contained" sx={{ background: "#1f1f20", color: "#ffffff", textTransform: "none", width: "50%", borderRadius: "8px", height: "50px" }} onClick={signInUser}>Sign in</Button>


</div>
</>
  )
}

export default SignIn