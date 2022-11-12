import './App.css';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import {useState,useEffect} from "react"
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { Redirect } from "react-router-dom";

function ProtectedRoute({isLoggedIn,children}){
  console.log("hola",isLoggedIn);
if(!isLoggedIn){
  return <Navigate to="/" replace />
}
  return children
}


function App() {

  const [isLoggedIn,setIsLoggedIn] =useState(false);

useEffect(() => {
  window.sessionStorage.setItem("isLoggedin", "false");
  setIsLoggedIn(()=>{
  return window.sessionStorage.getItem("isLoggedIn")
   });
   
}, [])


  return (
    <div className="App">

<Routes>
<Route path="/" element= {isLoggedIn ?<Navigate to="/home" replace /> :<Navigate to="/signin" replace />} />


        <Route path="signin" element={isLoggedIn ?<Navigate to="/home" replace /> :<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="home" element={<ProtectedRoute isLoggedIn={isLoggedIn}> <HomePage setIsLoggedIn={setIsLoggedIn}/> </ProtectedRoute> } />
        <Route path="*" element={isLoggedIn ?<Navigate to="/home" replace /> :<Navigate to="/signin" replace />} />

      </Routes>



    </div>
  );
}

export default App;
