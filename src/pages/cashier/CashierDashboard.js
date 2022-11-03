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
  const [data, setData] = useState([
    {
      orderId: 122,
      items: [
        { name: 'ddd', qty: 2 },
        { name: 'ddd2', qty: 2 },
      ],
    },
    {
      orderId: 122,
      items: [
        { name: 'ddd', qty: 2 },
        { name: 'ddd2', qty: 2 },
      ],
    },
  ]);
  const [forDate, setForDate] = useState('');
  const [periodFrom, setPeriodFrom] = useState('');
  const [periodTo, setPeriodTo] = useState('');
  const [forMonth, setForMonth] = useState(0);
  const [expenseForDate, setExpenseForDate] = useState('');
  const [expenseForMonth, setExpenseForMonth] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [search,setSearch] = useState('')

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

  const handleChange = (event) => {
    setForMonth(event.target.value);
  };
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
                <Button key={index} onClick={handleOpen} variant="contained" style={data.status === "available"?{"margin":"5px","backgroundColor":"#175A00"}: {"margin":"5px","backgroundColor":"#C70606"}}>
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
              Customer Name
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
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              1004
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              sachitha hirushan
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              750
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              Accepted
            </Grid>
          </Grid>
        </div>
        {/* Sample data end */}
      </Container>
    </>
  );
}
