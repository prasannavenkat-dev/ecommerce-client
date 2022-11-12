import React, { useState } from 'react'
import "./HomePage.css"
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import {productList as list} from "./productList"
const HomePage = ({setIsLoggedIn}) => {

  const [productList, setProductList] = useState([...list]);

  const [cartList, setCartList] = useState([]);

  return (
    <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column"}} >
    <Navbar cartList={cartList} setCartList={setCartList} productList={productList} setProductList={setProductList} setIsLoggedIn={setIsLoggedIn} />
   
   <Products setCartList={setCartList} setProductList={setProductList} productList={productList} />    
    </div>
  )
}

export default HomePage