import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography,Grid,Button,Divider,TextField,InputLabel,MenuItem,Select,SelectChangeEvent } from '@mui/material';
import {useCallback, useEffect, useState} from "react";
// components
import { ProductList} from '../sections/@dashboard/products';
// mock
// import PRODUCTS from '../_mock/products';
// ----------------------------------------------------------------------

export default function AdminGenerateReports() {
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
        <title> ADMIN : Generate Reports </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Generate Reports
        </Typography>

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <h3>Sales Reports</h3>
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
        <div>
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                  Generate Report For Period
                </Grid>
              </Grid>
        </div>
        <div>
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3} style={{"display":"flex","alignItems":"center"}}>
                  From <TextField style={{"color":"white"}} name="date" type="date" value={periodFrom} onChange={e => setPeriodFrom(e.target.value)} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} style={{"display":"flex","alignItems":"center"}}>
                  To <TextField style={{"color":"white"}} name="date" type="date" value={periodTo} onChange={e => setPeriodTo(e.target.value)} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
                  <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} >Print</Button>
                  </Grid>
              </Grid>
        </div>
        <div>
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                  Generate Report For Month
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                <InputLabel id="label-for-month">Month</InputLabel>
                <Select
                  labelId="label-for-month"
                  id="id-for-month"
                  value={forMonth}
                  label="Month"
                  onChange={handleChange}
                >
                  <MenuItem style={{"color":"black"}} value={0}>Select Month</MenuItem>
                  <MenuItem style={{"color":"black"}} value={1}>January</MenuItem>
                  <MenuItem style={{"color":"black"}} value={2}>February</MenuItem>
                  <MenuItem style={{"color":"black"}} value={3}>March</MenuItem>
                  <MenuItem style={{"color":"black"}} value={4}>April</MenuItem>
                  <MenuItem style={{"color":"black"}} value={5}>May</MenuItem>
                  <MenuItem style={{"color":"black"}} value={6}>June</MenuItem>
                  <MenuItem style={{"color":"black"}} value={7}>July</MenuItem>
                  <MenuItem style={{"color":"black"}} value={8}>August</MenuItem>
                  <MenuItem style={{"color":"black"}} value={9}>September</MenuItem>
                  <MenuItem style={{"color":"black"}} value={10}>October</MenuItem>
                  <MenuItem style={{"color":"black"}} value={11}>November</MenuItem>
                  <MenuItem style={{"color":"black"}} value={12}>December</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
                  <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} >Print</Button>
                  </Grid>
              </Grid>
        </div>

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <h3>Stores And Expences</h3>
          </Grid>
        </Grid>
        <Divider sx={{ bgcolor: "#B5986D" }}/>
        <div>
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                  Generate Stores Report For Date
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  <TextField style={{"color":"white"}} name="date" type="date" value={expenseForDate} onChange={e => setExpenseForDate(e.target.value)} />
                </Grid>
                <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
                  <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} >Print</Button>
                  </Grid>
              </Grid>
        </div>

        <div>
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                  Generate Expence Report For Month
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                <InputLabel id="label-for-month">Month</InputLabel>
                <Select
                  labelId="label-for-month"
                  id="id-for-month"
                  value={forMonth}
                  label="Month"
                  onChange={handleChange}
                >
                  <MenuItem style={{"color":"black"}} value={0}>Select Month</MenuItem>
                  <MenuItem style={{"color":"black"}} value={1}>January</MenuItem>
                  <MenuItem style={{"color":"black"}} value={2}>February</MenuItem>
                  <MenuItem style={{"color":"black"}} value={3}>March</MenuItem>
                  <MenuItem style={{"color":"black"}} value={4}>April</MenuItem>
                  <MenuItem style={{"color":"black"}} value={5}>May</MenuItem>
                  <MenuItem style={{"color":"black"}} value={6}>June</MenuItem>
                  <MenuItem style={{"color":"black"}} value={7}>July</MenuItem>
                  <MenuItem style={{"color":"black"}} value={8}>August</MenuItem>
                  <MenuItem style={{"color":"black"}} value={9}>September</MenuItem>
                  <MenuItem style={{"color":"black"}} value={10}>October</MenuItem>
                  <MenuItem style={{"color":"black"}} value={11}>November</MenuItem>
                  <MenuItem style={{"color":"black"}} value={12}>December</MenuItem>
                </Select>
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
