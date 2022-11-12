import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Fade,
    Modal,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import "./CartModal.css";
const CartModal = ({ open, handleClose,cartList,setCartList,setProductList }) => {

    const [totalBill, setTotalBill] = useState(0);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30vw",
        height: "60vh",
        bgcolor: "#FFFFFF",
        borderRadius: "35px",
        boxShadow: 24,
        p: 4,
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column"
    };


    useEffect(() => {
        
        let total=0;
      cartList.forEach((cartItem) => {
        setTotalBill(prev => {

    total+=cartItem.qty * cartItem.price;

            return total;
        })
     })

     if(cartList.length==0){
        handleClose()
     }

    }, [cartList])
    


    function removeCartItem(id){
      
        setCartList(()=>cartList.filter((cartItem)=>cartItem.id!==id));

        setProductList(prev => {
            prev = prev.map(product=>{
                if(product.id == id){
                    product.qty =0 ;
                }
                return product;
            })

            return prev;

        })
        
    }


    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{height:"75%",overflow:"auto"}} >
                       {cartList.map(cartItem=>{

return (

    <Card sx={{ display: "flex",margin:"15px" }} >
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151, height: 151, backgroundSize: "cover" }}
                                    image={`${cartItem.img}`}
                                    alt="Live from space album cover"
                                />

                                <Box sx={{ flexGrow: "1", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    {/* Details */}
                                    <Box sx={{ flex: 0.5, paddingLeft: "15px" }}>
                                        <Typography variant="h5" component="div"  >
                                            {cartItem.name}    
                                            
                                            {cartItem.qty>1 && <span style={{ fontSize: "small", color: "grey",  overflowWrap: "break-word" }}>
                                                x {cartItem.qty}
                                            </span>

                                            }


                                        </Typography>



                                        <Typography variant="h6" component="span" sx={{ color: "grey" }} >
                                           Rs.{cartItem.price}
                                        </Typography>

                                    </Box>

                                    {/* Total Price */}
                                    <Box sx={{ flex: 0.5, display: "flex", alignItems: "center", justifyContent: "space-evenly", alignItems: "center" }}>

                                        <Typography variant="h5" component="span"  >
                                            {(cartItem.price) * (cartItem.qty)}
                                        </Typography>

                                        <IconButton aria-label="delete" size="medium" onClick={()=>removeCartItem(cartItem.id)}>
                                            <ClearIcon fontSize="inherit" sx={{ color: "red" }} />
                                        </IconButton>



                                    </Box>
                                </Box>
                            </Card>


)                   })
                       }
                         



                        </Box>




                        <Divider />

                        {/* Total and Checkout */}
                        <Box sx={{height:"25%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                        
                        <Typography variant="h4" component="div"  sx={{textAlign:"right",padding:"10px"}}>
                               Total RS.{totalBill}
                          </Typography>
                       

                          <Button variant="contained" sx={{ background: "#1f1f20", color: "#ffffff", textTransform: "none",  borderRadius: "8px", height: "50px" }}>
                          Proceed To Checkout                          </Button>

                        </Box>
                      
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default CartModal;
