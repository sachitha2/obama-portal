import { Helmet } from 'react-helmet-async';
import {useCallback, useEffect, useState} from "react";
// @mui
import { Container, Typography,Grid,Button,Divider,TextField } from '@mui/material';
import { getAcceptedOrders, prepareOrder } from '../../services/OrderService';

export default function StockKeeperRetrieveRawItems() {

  const [data,setData] = useState([]);
  const [search,setSearch] = useState('')

  const handleOrder = useCallback((orderId,status)=>{ // assign / prepare
    // TODO handle api call to assign or prepare
      prepareOrder(orderId);
    // console.log(orderId,status)
    },[])

  useEffect(()=>{
    // API call to fetch data TODO
    const fetchData = () =>{
      getAcceptedOrders().then(data =>{
        const out = data.data.map(d=>({orderId:d.orderId,items:d.menuInstances.map(item => ({name:item.menuName,qty:item.quantity}))}))
        setData(out);
      })
    }
    fetchData();
  },[handleOrder])

  return (
    <>
      <Helmet>
        <title> Stock Keeper </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Retrieve Raw Items
        </Typography>
        <TextField name="Search" label="Search Item" value={search} onChange={e => setSearch(e.target.value)} />
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            Item Id
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Item Name
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Available Qty
          </Grid>
          <Grid item xs={3} sm={3} md={3} style={{"display":"none"}}>
            Config
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#B5986D" }}/>

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            201
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Salt
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            5 kg
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
          <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}}>Retrieve</Button>
          </Grid>
        </Grid>
      </Container>
      

        
    </>
  );
}
