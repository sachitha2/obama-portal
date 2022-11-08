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
import { acceptPayment, getAssignedOrders } from '../../services/OrderService';
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

export default function CashierAcceptPayments() {
  const [data, setData] = useState([
    
  ]);

  const handlePayments = useCallback((orderId,status)=>{ // assign / prepare
  
    acceptPayment(orderId);
  },[])

  useEffect(()=>{
    const fetchData = () =>{
      getAssignedOrders().then(data =>{

        const out = data.data.map(d=>({orderId:d.orderId,contact:d.contactNo,amount:d.amount}))
        setData(out);
        console.log(out);
      })
    }
    fetchData();
  },[handlePayments]);

  return (
    <>
      <Helmet>
        <title> Cashier : Accept Payments</title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Accept Payments
        </Typography>
        {/* <Divider sx={{ bgcolor: '#B5986D' }} /> */}
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              Order Number
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Contact Number
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Amount
              {/* <Button style={{ backgroundColor: '#175A00', color: '#FFF', margin: '5px' }}>Print</Button> */}
            </Grid>
          </Grid>
        </div>

        <Divider sx={{ bgcolor: '#B5986D' }} />
        {data.map((d, index) => (
            <div key={index}>
              <Divider />
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                  {d?.orderId}

                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  {d?.contact}
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  Rs. {d?.amount}.00
                </Grid>
                <Grid item xs={3} sm={3} md={3} >
                  <Button style={{ backgroundColor: '#175A00', color: '#FFF', margin: '5px' }} onClick={() => handlePayments(d?.orderId)}>Accept Payment</Button>
                </Grid>
              </Grid>
            </div>
            ))}
        
      </Container>
    </>
  );
}
