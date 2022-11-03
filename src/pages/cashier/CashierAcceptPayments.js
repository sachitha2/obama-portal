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

export default function CashierAcceptPayments() {
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

  const handleChange = (event) => {
    setForMonth(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title> Cashier : Accept Payments</title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Accept Payments
        </Typography>

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <TextField name="Search" label="Enter Order Number" value={search} onChange={e => setSearch(e.target.value)} />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add a Item
                </Typography>
                <TextField
                sx={{ color: '#F0F' }}
                name="date"
                type="text"
                value={forDate}
                onChange={(e) => setForDate(e.target.value)}
              />
              </Box>
            </Modal>
          </Grid>
        </Grid>
        {/* <Divider sx={{ bgcolor: '#B5986D' }} /> */}
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              Order Number
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Customer Name
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Amount
              {/* <Button style={{ backgroundColor: '#175A00', color: '#FFF', margin: '5px' }}>Print</Button> */}
            </Grid>
          </Grid>
        </div>

        <Divider sx={{ bgcolor: '#B5986D' }} />
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              1001
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Sahan Liyanage
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              700.00
            </Grid>
            <Grid item xs={3} sm={3} md={3} >
              <Button style={{ backgroundColor: '#175A00', color: '#FFF', margin: '5px' }}>Accept Payment</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
