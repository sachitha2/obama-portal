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

export default function CashierMenu() {
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

  const handleChange = (event) => {
    setForMonth(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title> Cashier :  Menu</title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
           Menu
        </Typography>

        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <Button onClick={handleOpen} variant="contained">
              + Item
            </Button>
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
        <Divider sx={{ bgcolor: '#B5986D' }} />
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              Generate Report For Date
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <TextField
                style={{ color: 'white' }}
                name="date"
                type="date"
                value={forDate}
                onChange={(e) => setForDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button style={{ backgroundColor: '#175A00', color: '#FFF', margin: '5px' }}>Print</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
