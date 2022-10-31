import { Helmet } from 'react-helmet-async';
import {useEffect, useState, useCallback} from 'react';
import { Container, Typography,Grid,Button,Divider } from '@mui/material';
import { getOrderRequests, acceptOrder } from '../services/OrderService';


export default function OrderRequests() {

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
        <title> Dashboard: Order Requests </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Order Requests
        </Typography>
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            Order No
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Items
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Quantity
          </Grid>
          <Grid item xs={3} sm={3} md={3} style={{"display":"none"}}>
            Config
          </Grid>
        </Grid>
        {data.map((d, index) => (
          <div key={index}>
          <Divider/>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              {d?.orderId}
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              {d?.items?.map((i,k)=>(
              <p key={k}>{i?.name}</p>
              ))}
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              {d?.items?.map((i,k)=>(
                  <p key={k}>{i?.qty}</p>
              ))}
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column"}}>
              <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} onClick={()=>handleOrder(d?.orderId,'accept')}>Accept</Button>
              {/* <Button style={{"backgroundColor":"#7E0000","color":"#FFF","margin":"5px"}} onClick={()=>handleOrder(d?.orderId,'reject')}>Reject</Button> */}
            </Grid>
          </Grid>
          </div>
        ))}
        
      </Container>
    </>
  );
}
