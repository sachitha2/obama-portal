import { Helmet } from 'react-helmet-async';
// @mui
import {
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Modal,
  Box,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
// components
import { ProductList } from '../../sections/@dashboard/products';
import { getOngoingOrders } from '../../services/OrderService';
// mock
// import PRODUCTS from '../_mock/products';
// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  color: 'black',
  border: '2px solid #000',
  boxShadow: 10,
  p: 4,
};

export default function CashierDashboard() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    const fetchData = () =>{
      getOngoingOrders().then(data =>{

        const out = data.data.map(d=>({orderId:d.orderId,contactNo:d.contactNo,amount:d.amount,status:d.orderStatus}))
        setData(out);
        console.log(out);
      })
    }
    fetchData();
  },[]);

  const [tableBtn,setTableBtn] = useState([
    {
      id:1,
      status:"available"
    },
    {
      id:2,
      status:"unAvailable"
    },
    {
      id:3,
      status:"unAvailable"
    },

    {
      id:4,
      status:"unAvailable"
    },
    {
      id:5,
      status:"available"
    },
    {
      id:6,
      status:"unAvailable"
    },
    {
      id:7,
      status:"unAvailable"
    },

    {
      id:8,
      status:"unAvailable"
    },
])

  
  return (
    <>
      <Helmet>
        <title> Cashier : Dashboard</title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Ongoing Orders
        </Typography>

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={12} md={12} padding={1} spacing={1} display="flex" justifyContent="center" alignContent="center" alignItems="center">
            {
              tableBtn.map((data,index)=>(
                <Button key={index} variant="contained" style={data.status === "available"?{"margin":"5px","backgroundColor":"#175A00"}: {"margin":"5px","backgroundColor":"#C70606"}}>
                  Table <br/>
                  {data.id}
                </Button>
              ))
            }
          </Grid>
        </Grid>
        {/* <Divider sx={{ bgcolor: '#B5986D' }} /> */}
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              Order No
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Contact Number
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              Amount
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              Order Status
            </Grid>
          </Grid>
        </div>

        {/* Sample data start */}
        <Divider sx={{ bgcolor: '#B5986D' }} />
        {data.map((d, index) => (
          <div key={index}>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
            {d?.orderId}
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
            {d?.contactNo}
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {d?.amount}
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {d?.status}
            </Grid>
          </Grid>
        </div>
        ))}
        {/* Sample data end */}
      </Container>
    </>
  );
}
