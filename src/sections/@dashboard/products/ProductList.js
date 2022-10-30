import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import {useState, useEffect} from "react";
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

export default function ProductList({...other}) {

  const [products,setProducts] = useState([])
  const [changed,setChanged] = useState(false)

  useEffect(()=>{
    // API call to fetch ALL products TODO
    setProducts([{
      name:"Chicken Fried Rice", cover:"/assets/images/products/product_1.png", currentState:"AVAILABLE", itemId:12
    },{
      name:"Pasta", cover:"/assets/images/products/product_2.png", currentState:"AVAILABLE", itemId:12
    }
    ])
  },[changed])

  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} changed={()=>setChanged(c=>!c)}/>
        </Grid>
      ))}
    </Grid>
  );
}
