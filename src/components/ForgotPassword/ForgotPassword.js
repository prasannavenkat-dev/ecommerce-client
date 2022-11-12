import { Button } from '@mui/material'
import React,{useState} from 'react'
import axios from "axios";

const ForgotPassword = () => {

   const[email,setEmail] = useState("");


  function handleEmail(event){

   setEmail(()=>event.target.value)

  }

  async function requestPassword(){
console.log(email,"Sda");
   
let res1 = await axios.post("https://eccomerce-server12.herokuapp.com/forgotpassword",{email})
alert(res1.data.message)


  }

 

  return (
<>

   {/* user name */}
   <div className='input_field_container' style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
   <span style={{ color: "#989797", marginBottom: "10px", fontSize: "14px" }}>  Email Address</span>
   <input type="text" className='input_field' onChange={handleEmail} value={email}  />



</div>



<div style={{ width: "100%" }}>
   <Button variant="contained" sx={{ background: "#1f1f20", color: "#ffffff", textTransform: "none", width: "50%", borderRadius: "8px", height: "50px" }} onClick={requestPassword}>Get New Password</Button>


</div>

</>
    )
}

export default ForgotPassword