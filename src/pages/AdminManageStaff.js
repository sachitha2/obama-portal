import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography,Grid,Button,Divider,TextField,InputLabel,MenuItem,Select,SelectChangeEvent } from '@mui/material';
import {useCallback, useEffect, useState} from "react";
// components
import { ProductList} from '../sections/@dashboard/products';
// mock
// import PRODUCTS from '../_mock/products';
// ----------------------------------------------------------------------

export default function AdminManageStaff() {
  const [data,setData] = useState([{orderId:122,items:[{name:"ddd",qty:2},{name:"ddd2",qty:2}]},{orderId:122,items:[{name:"ddd",qty:2},{name:"ddd2",qty:2}]}]);
  const [forDate,setForDate] = useState('');
  const [periodFrom,setPeriodFrom] = useState('');
  const [periodTo,setPeriodTo] = useState('');
  const [forMonth, setForMonth] = useState(0);
  const [expenseForDate,setExpenseForDate] = useState('')
  const [expenseForMonth,setExpenseForMonth] = useState('')

  const handleChange = (event) => {
    setForMonth(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title> ADMIN : Manage Staff </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Manage Staff
        </Typography>

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <Button variant='contained'>+ Staff</Button>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#B5986D" }}/>
        <div>
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                  Generate Report For Date
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  <TextField style={{"color":"white"}} name="date" type="date" value={forDate} onChange={e => setForDate(e.target.value)} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
                  <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} >Print</Button>
                  </Grid>
              </Grid>
        </div>
      </Container>
    </>
  );
}
