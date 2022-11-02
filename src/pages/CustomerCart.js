import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import {useEffect, useState, useCallback} from 'react';
import { Container, Typography,Grid,Button,Divider } from '@mui/material';
import { getOrderRequests, acceptOrder } from '../services/OrderService';




export default function CustomerCart() {

  const [data,setData] = useState([]);

  const handleOrder = useCallback((orderId,status)=>{ // accept/reject
    // TODO handle api call to reject or accept
    acceptOrder(orderId);
    console.log(orderId,status)
  },[])

  useEffect(()=>{
    // API call to fetch data TODO
    const fetchData = () =>{
      getOrderRequests().then(data =>{
        const out = data.data.map(d=>({orderId:d.orderId,items:d.menuInstances.map(item => ({name:item.menuName,qty:item.quantity}))}))
        setData(out);
      })
    }
    fetchData();
  },[handleOrder])

  return (
    <>
      <Helmet>
        <title> Customer </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          My Cart
        </Typography>
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <p style={{"display":"none"}}>image</p>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Item
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            QTY
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Price
          </Grid>
          {/* <Grid item xs={3} sm={3} md={3} style={{"display":"none"}}>
            Config
          </Grid> */}
        </Grid>
        <Divider/>
          <div>
          
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              <img src="" alt="Item"/>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              item name
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","padding":"2px"}}>
              qty
              <Button style={{"backgroundColor":"#7E0000","color":"#FFF","margin-top":"5px"}}>Delete</Button>
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","padding":"2px"}}>
              price
              <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin-top":"5px"}}>Edit</Button>
              </Grid>
          </Grid>
          </div>
        <Divider/> 
        
      </Container>
    </>
  );
}
