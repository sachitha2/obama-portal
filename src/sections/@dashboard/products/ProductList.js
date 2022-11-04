// @mui
import { Grid } from '@mui/material';
import {useState, useEffect} from "react";
import { getMenuItems } from '../../../services/MenuService';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

export default function ProductList({...other}) {

  const [products,setProducts] = useState([])
  const [changed,setChanged] = useState(false)

  useEffect(()=>{
    // API call to fetch ALL products
    const fetchData = () =>{
      getMenuItems().then(data =>{
        const out = data.data.map(d=>({name:d.menuName,cover:d.imageUrl,currentState:d.availability,itemId:d.menuId}))
        setProducts(out);
      })
    }
    fetchData();
  },[changed])

  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} hideButton={other.hideButton} changed={()=>setChanged(c=>!c)}/>
        </Grid>
      ))}
    </Grid>
  );
}
