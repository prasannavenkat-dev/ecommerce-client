import { Box, Grid, Paper } from '@mui/material';

import React, { useState } from 'react'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import "./Products.css"
const Products = ({setCartList,productList, setProductList}) => {
  


     function changeProductQty(id, operator) {


        setProductList((prev) => {

            prev = prev.map((product) => {
                if (product.id == id) {
                    if (operator == "increment") {
                        product.qty <= 9 && (product.qty = +(product.qty) + 1);

                    }
                    else if (operator == "decrement") {
                        product.qty != 0 && (product.qty = +(product.qty) - 1);

                    }
                    else {
                        product.qty = 0;

                    }
                }
                return product
            })


            return prev;
        }
        )
        setCartList((prev) => {
            let arr = productList.filter((product) => (+(product.qty) !== 0))
            return arr;
        });





    }




    return (

        <Box sx={{ flexGrow: 1, marginTop: "0px", marginBottom: "0", overflow: "auto", padding: "24px 0" }}>
            <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 1, sm: 1, md: 12 }} sx={{ marginTop: "0" }} >
                { productList.length && productList.map((product) => (
                    <Grid item xs={1} sm={1} md={3} key={product.id} sx={{ marginTop: "0", display: "flex", justifyContent: "center", textAlign: "center" }} alignItems="center"   >


                        <Card sx={{
                            maxWidth: 345, borderRadius: "30px", maxHeight: 480, width: 450, background: "#ffffff"
                        }}>
                            <CardMedia
                                component="img"
                                height="300"
                                sx={{backgroundSize:"cover"}}

                                image={`${product.img}`}
                                alt={product.name}
                            />
                            <CardContent sx={{ display: "flex", justifyContent: "space-between" ,pb:1}} >
                                <Typography gutterBottom variant="h6" component="span">

                                    {product.name}
                                </Typography>

                                <Typography gutterBottom variant="h6" component="span">
                                   Rs.{product.price}
                                </Typography>

                            </CardContent>

                            <Box sx={{ justifyContent: "center", paddingBottom: "20px" }}>

                                <Box>

                                    {product.qty == 0 ?

                                        <Button onClick={() => changeProductQty(product.id, "increment")} variant="contained" size="small" sx={{ background: "#1f1f20", color: "#ffffff" }} >Add To Cart</Button>
                                        :
                                        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>




                                            <IconButton onClick={() => changeProductQty(product.id, "clear")} aria-label="delete" size="medium" sx={{ color: "red", fontSize: "32px" }}>
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>


                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button onClick={() => changeProductQty(product.id, "decrement")} variant="contained" size="small" sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', background: "#1f1f20", color: "#ffffff" }}>
                                                    <RemoveIcon />
                                                </Button>
                                                <Typography variant='h6' component="span" style={{ margin: "0 10px", fontSize: "18px" }}>
                                                    {product.qty}

                                                </Typography>

                                                <Button onClick={() => changeProductQty(product.id, "increment")} variant="contained" size="small" sx={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', background: "#1f1f20", color: "#ffffff" }}>
                                                    <AddIcon />
                                                </Button>


                                            </Box>



                                        </Box>

                                    }
                                </Box>

                            </Box>
                        </Card>


                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}

export default Products;