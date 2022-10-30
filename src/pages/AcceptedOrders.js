import { Helmet } from 'react-helmet-async';
import {useCallback, useEffect, useState} from "react";
// @mui
import { Container, Typography,Grid,Button,Divider } from '@mui/material';

export default function AcceptedOrders() {

  const [data,setData] = useState([]);

  const handleOrder = useCallback((orderId,status)=>{ // assign / prepare
    // TODO handle api call to assign or prepare
    console.log(orderId,status)
  },[])

  useEffect(()=>{
    // API call to fetch data TODO
    setData([{orderId:122,items:[{name:"ddd",qty:2},{name:"ddd2",qty:2}]},{orderId:122,items:[{name:"ddd",qty:2},{name:"ddd2",qty:2}]}])
  },[handleOrder])

  return (
    <>
      <Helmet>
        <title> Dashboard: Accepted Orders </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Accepted Orders
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
                  <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} onClick={()=>handleOrder(d?.orderId,'prepare')}>Prepared</Button>
                  <Button style={{"backgroundColor":"#FF7A00","color":"#FFF","margin":"5px"}} onClick={()=>handleOrder(d?.orderId,'assign')}>Assign</Button>
                </Grid>
              </Grid>
            </div>
        ))}
      </Container>
    </>
  );
}
