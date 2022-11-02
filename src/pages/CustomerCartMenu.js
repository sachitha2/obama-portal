import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import {useEffect, useState, useCallback} from 'react';
import { Container, Typography,Grid,Button,Divider } from '@mui/material';
import { getOrderRequests, acceptOrder } from '../services/OrderService';




export default function CustomerCartMenu() {

  const [data,setData] = useState([]);
  const [itemType,setItemType] = useState('ALL')

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
        <title> Customer - Menu </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Menu - {itemType}
        </Typography>
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Button onClick={()=>setItemType('ALL')} variant={itemType==='ALL'?"contained":'text'} style={{"margin":"5px"}}>ALL</Button>
          <Button onClick={()=>setItemType('RICE')} variant={itemType==='RICE'?"contained":'text'} style={{"margin":"5px"}}>Rice Specialities</Button>
          <Button onClick={()=>setItemType('BEVERAGES')}  variant={itemType==='BEVERAGES'?"contained":'text'}   style={{"margin":"5px"}}>Beverages</Button>
          {/* <Button style={{"backgroundColor":"#FF7A00","color":"#FFF","margin":"5px"}}>Dessert</Button> */}
        </Grid>
        <Divider/>
          <div>
          
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={6} sm={6} md={6}>
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" alt="helloo"/>
            </Grid>
            <Grid item xs={6} sm={6} md={6} style={{"display":"flex","flexDirection":"column","padding":"10px","justifyContent":"space-around"}}>
              Item name here
              <Button style={{"backgroundColor":"#FFF","color":"#000","margin-top":"5px","width":"50px","position":"relative","top":"15px","right":"-100px"}}>+ Add</Button>
              </Grid>
          </Grid>
          </div>
        <Divider/> 

        <div>
          
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={6} sm={6} md={6}>
              <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" alt="helloo"/>
            </Grid>
            <Grid item xs={6} sm={6} md={6} style={{"display":"flex","flexDirection":"column","padding":"10px","justifyContent":"space-around"}}>
              Item name here
              <Button style={{"backgroundColor":"#FFF","color":"#000","margin-top":"5px","width":"50px","position":"relative","top":"15px","right":"-100px"}}>+ Add</Button>
              </Grid>
          </Grid>
          </div>
        <Divider/> 
        
      </Container>
    </>
  );
}
