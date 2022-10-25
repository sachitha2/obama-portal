import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography,Grid,Button,Divider } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function OrderRequests() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

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
        {Array.from(Array(6)).map((_, index) => (
          <>
          <Divider/>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              1001
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <p>Chicken Kottu</p>
              <p>Chicken Kottu</p>
              <p>Chicken Kottu</p>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <p>10</p>
              <p>10</p>
              <p>10</p>
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column"}}>
              <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}}>Accept</Button>
              <Button style={{"backgroundColor":"#7E0000","color":"#FFF","margin":"5px"}}>Reject</Button>
            </Grid>
          </Grid>
          </>
        ))}
        
      </Container>
    </>
  );
}
