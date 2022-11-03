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

import {useNavigate } from 'react-router-dom';
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

export default function CashierPlaceOrder() {

  const navigate = useNavigate();
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

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [search,setSearch] = useState('')

  const handleChange = (event) => {
    setForMonth(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title> ADMIN : Cashier Place Order</title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Place Order
        </Typography>
        

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={12} md={12} display="flex" justifyContent="space-between">
            <TextField name="Search" label="Customer Mobile Number" value={search} onChange={e => setSearch(e.target.value)} />
            <Button onClick={handleOpen} variant="contained" style={{"borderRadius":"100px","width":"65px","height":"65px","fontSize":"30px"}}>
                  +
            </Button>
          </Grid>
          
          <Grid item xs={3} sm={3} md={3}>
            
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <Grid container padding={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                                    <Grid item xs={12} sm={12} md={12} padding={2}>
                                        <Typography style={{"textAlign":"center"}} id="modal-modal-title" variant="h6" component="h2">
                                          Customer Details
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                      First Name
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                      <TextField
                                              name="date"
                                              type="text"
                                              inputProps={{ style: { color: "black" } }}
                                              // value={amount}
                                              // onChange={(e) => setAmount(parseFloat(e.target.value))}
                                          />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                      Last Name
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                      <TextField
                                            name="date"
                                            type="text"
                                            inputProps={{ style: { color: "black" } }}
                                            // value={amount}
                                            // onChange={(e) => setAmount(parseFloat(e.target.value))}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                      Tel number
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                      <TextField
                                              name="date"
                                              type="text"
                                              inputProps={{ style: { color: "black" } }}
                                              // value={amount}
                                              // onChange={(e) => setAmount(parseFloat(e.target.value))}
                                          />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} padding={1} display="flex" justifyContent="center" alignContent="center" alignItems="center">
                                        <Button style={{ backgroundColor: '#C70606', color: '#FFF', margin: '5px' }} onClick={handleClose}>Cancel</Button>
                                        <Button style={{ backgroundColor: '#007E05', color: '#FFF', margin: '5px' }} onClick={()=> navigate('/dashboard/cashier-menu')}>Order Now</Button>
                                    </Grid>
                                </Grid>
              </Box>
            </Modal>
          </Grid>
        </Grid>
        {/* <Divider sx={{ bgcolor: '#B5986D' }} /> */}
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              Contact No
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Customer Name
            </Grid>
          </Grid>
        </div>

        <Divider sx={{ bgcolor: '#B5986D' }} />
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              071-5591137
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              Sam wilson
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button style={{ backgroundColor: '#175A00', color: '#FFF', margin: '5px' }}>Order Now</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
