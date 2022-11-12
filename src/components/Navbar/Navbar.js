import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import "./Navbar.css";
import CartModal from "../CartModal/CartModal";
import { useNavigate } from 'react-router-dom'



const Navbar = ({cartList,setCartList,setProductList,setIsLoggedIn}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate()

  const handleOpen = () =>{
    
    if(cartList.length==0) return;

    handleCloseNavMenu();
    setOpen(true);
  } 
  const handleClose = () => setOpen(false);



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signOut = () => {
   
   window.sessionStorage.setItem("isLoggedIn", "false");
   setIsLoggedIn(()=>{
    Boolean(window.sessionStorage.getItem("isLoggedIn"))
   });
   handleCloseUserMenu();
   navigate("/signin");
  }

  return (
    <AppBar position="sticky" elevation={0} sx={{background:"#FFFFFF",padding:"15px 0"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >

<Box  sx={{ display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:"100%"}}>




          <Box>

   
      

          <span style={{ fontWeight: "900", fontSize: "44px", color: "#29282a" }}>E-com<span style={{ color: "#ff4a4a" }}>.</span></span>

          </Box>
       

    
       

          <Box >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <DragHandleIcon sx={{color:"#161616",fontSize:"40px"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
          
            >
              
                <MenuItem  onClick={handleOpen}>
                 <ShoppingCartSharpIcon sx={{color:"#161616"}} /> <Typography sx={{marginLeft:"8px"}} textAlign="center">Cart</Typography>
                </MenuItem>
                
                   <CartModal open={open}  handleClose={handleClose} cartList={cartList} setCartList={setCartList} setProductList={setProductList} />

                <MenuItem  onClick={signOut}>
              <LoginSharpIcon sx={{color:"#161616"}}/>    <Typography sx={{marginLeft:"8px"}} textAlign="center">Sign out</Typography>
                </MenuItem>
            </Menu>
            
          </Box>
</Box>




        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
