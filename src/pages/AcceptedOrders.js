import { Helmet } from 'react-helmet-async';
import {useCallback, useEffect, useState} from "react";
// @mui
import { Container, Typography,Grid,Button,Divider,TextField,Modal,Box } from '@mui/material';
import { getAcceptedOrders, prepareOrder, getStewards, assignOrderToStew } from '../services/OrderService';


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

export default function AcceptedOrders() {

  const [data,setData] = useState([]);

  // Modal start

  const [open, setOpen] = useState(false);
  const [refresh , setRefresh] = useState(false);
  const [oId, setOId] = useState(0); 
  const handleOpen = () => setOpen(true);
  const [stewardList, setstewardList] = useState([]);
  const handleClose = () => setOpen(false);

  // Modal end

  const handleOrder = useCallback((orderId,status)=>{ // assign / prepare
      if(status === 'assign'){
        setOpen(true)
        setOId(orderId);
        
      }else{
        prepareOrder(orderId);
        setRefresh(!refresh);
      }
    // console.log(orderId,status)
    },[])

    const assignOrder = useCallback((staffId,oId)=>{ 
      assignOrderToStew(staffId,oId);
      alert("Order Assigned");
      setRefresh(!refresh);
      },[])


  useEffect(()=>{
    const fetchData = () =>{
      getAcceptedOrders().then(data =>{

        const out = data.data.map(d=>({orderId:d.orderId,status:d.status,items:d.menuInstances.map(item => ({name:item.name,qty:item.qty}))}))
        setData(out);
        console.log(out);
      })
    }
    fetchData();
    getStewards().then(({data})=>{
      setstewardList(data);
      // console.log(data);      
    }
      );
  },[handleOrder, refresh])

  return (
    <>
      <Helmet>
        <title> Dashboard: Kitchen Manager - Accepted Orders </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Accepted Orders
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
            Action
          </Grid>
        </Grid>
        {data.map((d, index) => (
            <div key={index}>
              <Divider/>
              <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                  {d?.orderId}
                  
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  {d?.items?.map((i,k)=>(
                      <p key={k}>{i?.name}</p>
                  ))}
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  {d?.items?.map((i,k)=>(
                      <p key={k}>{i?.qty}</p>
                  ))}
                </Grid>
                <Grid item xs={3} sm={3} md={3} style={{"display":"flex","flexDirection":"column"}}>
                  {d?.status === "ACCEPTED" ? <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}} onClick={()=>handleOrder(d?.orderId,'prepare')}>Prepared</Button>
                  :<Button style={{"backgroundColor":"#FF7A00","color":"#FFF","margin":"5px"}} onClick={()=>handleOrder(d?.orderId,'assign')}>Assign</Button>}
                  
                
                </Grid>
              </Grid>
            </div>
        ))}

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
                      Assign Steward
                    </Typography>
                  </Grid>
                  {stewardList.map(steward=>
                  <Grid item xs={6} sm={6} md={6} padding={1} display="flex" justifyContent="center" alignContent="center" alignItems="center">
                    <Button style={{"backgroundColor":"#FF7A00","color":"#FFF","margin":"5px"}} onClick={()=>assignOrder(steward.staffId,oId)}>{steward.firstName}-{steward.staffId}</Button>
                  </Grid>
                  )}
                  
                </Grid>
                
              </>
              </Box>
            </Modal>
          {/* Modal end */}      
      </Container>
    </>
  );
}
