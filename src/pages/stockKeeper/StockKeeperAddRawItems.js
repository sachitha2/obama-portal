import { Helmet } from 'react-helmet-async';
import {useCallback, useEffect, useState} from "react";
// @mui
import { Container, Typography,Grid,Button,Divider,TextField,Modal,Box } from '@mui/material';
import { getAcceptedOrders, prepareOrder } from '../../services/OrderService';



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
  p: 1,
};
export default function StockKeeperAddRawItems() {

  const [data,setData] = useState([]);
  const [search,setSearch] = useState('')

  // Modal start

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal end

  const handleOrder = useCallback((orderId,status)=>{ // assign / prepare
    // TODO handle api call to assign or prepare
      prepareOrder(orderId);
    // console.log(orderId,status)
    },[])

  useEffect(()=>{
    // API call to fetch data TODO
    const fetchData = () =>{
      getAcceptedOrders().then(data =>{
        const out = data.data.map(d=>({orderId:d.orderId,items:d.menuInstances.map(item => ({name:item.menuName,qty:item.quantity}))}))
        setData(out);
      })
    }
    fetchData();
  },[handleOrder])

  return (
    <>
      <Helmet>
        <title> Stock Keeper </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Add Raw Items
        </Typography>
        <TextField name="Search" label="Search Item" value={search} onChange={e => setSearch(e.target.value)} />
        
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            Order No
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Items
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Available Qty
          </Grid>
          <Grid item xs={3} sm={3} md={3} style={{"display":"none"}}>
            Config
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "#B5986D" }}/>

        <Grid container padding={2} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            201
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Salt
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            5 kg
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
          <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} onClick={handleOpen}>Add</Button>
          {/* Modal start */}
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <>
                

                <Grid container padding={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                  <Grid item xs={12} sm={12} md={12} padding={2}>
                    <Typography style={{"textAlign":"center"}} id="modal-modal-title" variant="h6" component="h2">
                    Add a Items
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} padding={1}>
                    Item
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} padding={1}>
                    Added Qty
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} padding={1}>
                    Lunu
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} padding={1}>
                    <TextField
                      name="date"
                      type="text"
                      // value={forDate}
                      // onChange={(e) => setForDate(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} padding={1}>
                    <Button style={{ backgroundColor: '#C70606', color: '#FFF', margin: '5px' }}>Cancel</Button>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} padding={1}>
                    <Button style={{ backgroundColor: '#007E05', color: '#FFF', margin: '5px' }}>Save</Button>
                  </Grid>
                </Grid>
                
              </>
              </Box>
            </Modal>
          {/* Modal end */}
          
          </Grid>
        </Grid>
        
      </Container>
    </>
  );
}
