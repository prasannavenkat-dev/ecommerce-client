import { Button } from '@mui/material'
import React ,{useState} from 'react'
import axios from "axios"

const SignUp = () => {

  const[email,setEmail] = useState("");
  const[userName,setUserName] = useState("");
  const[password,setPassword] = useState("");



  function handleEmail(event){

   setEmail(()=>event.target.value)

  }

  function handleUserName(event){

    setUserName(()=>event.target.value)
 
   }

   function handlePassword(event){

    setPassword(()=>event.target.value)
 
   }

  async function signUpUser(){
   
let res1 = await axios.post("https://eccomerce-server12.herokuapp.com/signup",{email,userName,password})
alert(res1.data.message)
  }



  return (
    <>
{/* Email */}

           {/* user name */}
           <div className='input_field_container' style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
   <span style={{ color: "#989797", marginBottom: "10px", fontSize: "14px" }}> Email Address</span>
   <input type="email" className='input_field' value={email} onChange={handleEmail}  />

</div>

           {/* user name */}
   <div className='input_field_container' style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
   <span style={{ color: "#989797", marginBottom: "10px", fontSize: "14px" }}>Username</span>
   <input type="text" className='input_field' value={userName} onChange={handleUserName} />

</div>
{/* Password */}

<div className='input_field_container' style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
   <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
       <span style={{ color: "#989797", fontSize: "14px" }}>Password</span>
       {/* <Link href="#" sx={{ color: "#0b55f7", textAlign: "right", fontSize: "15px" }} underline="hover">
           {'Forgot Password?'}
       </Link> */}

   </span>

   <input  className="input_field" type="password" value={password} onChange={handlePassword} />

</div>


<div style={{ width: "100%" }}>
   <Button variant="contained"  sx={{ background: "#1f1f20", color: "#ffffff", textTransform: "none", width: "50%", borderRadius: "8px", height: "50px" }} onClick={signUpUser} >Sign up</Button>


</div>
    </>
  )
}

export default SignUp