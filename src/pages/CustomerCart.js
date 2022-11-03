import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import {useEffect, useState, useCallback} from 'react';
import { Container, Typography,Grid,Button,Divider } from '@mui/material';
import {useAtom} from "jotai";
import { useNavigate } from 'react-router-dom';
import { getOrderRequests, acceptOrder, placeOrder, addMenuInstance } from '../services/OrderService';
import {MYCART} from "./CustomerCartMenu";
import EditBtn from "./EditBtn";
import { getCookie } from '../utils/cookies';





export default function CustomerCart() {

  const [data,setData] = useState([]);
  const [cart,setCart]=useAtom(MYCART)
  const [total, settotal] = useState(0);

  const navigate = useNavigate();
  const userId = getCookie('userId');

  const handleOrder = useCallback((orderId,status)=>{ // accept/reject
    // TODO handle api call to reject or accept
    acceptOrder(orderId);
    console.log(orderId,status)
  },[])

  useEffect(()=>{
    // API call to fetch data TODO
    const fetchData = () =>{
      getOrderRequests().then(data =>{
        const out = data.data.map(d=>({orderId:d.orderId,items:d.menuInstances.map(item => ({name:item.menuName,qty:item.quantity}))}))
        setData(out);
      })
    }
    fetchData();
  },[handleOrder])

  useEffect(() => {
    let t=0;
    cart.map(e=>{t+=e.price*e.qty; return 0;});
    console.log(t);
    
    settotal(t);
  }, [cart])

  const handleDelete = useCallback((item)=>{
    setCart(c=>c.filter(i=>i.id!==item))
  },[setCart, cart])

  const handleEdit = useCallback((id, qty)=>{
    const index = cart.findIndex(i=>i.id===id)
    setCart(i=>{
      i[index].qty=qty
      return i
    })
    console.log(cart)
  },[setCart, cart])


  const handleSubmit = useCallback(()=>{
      
      placeOrder(total,userId).then(({data})=>
          addMenuInstance(userId,data.orderId,cart).then((res)=>
          console.log(res)
          ))
          alert("Order Placed Successfully");
          navigate('/dashboard/customer-menu');
  },[cart])

  return (
    <>
      <Helmet>
        <title> Customer </title>
      </Helmet>
      
      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          My Cart
        </Typography>
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3}>
            <p style={{"display":"none"}}>image</p>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Item
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            QTY
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            Price
          </Grid>
          {/* <Grid item xs={3} sm={3} md={3} style={{"display":"none"}}>
            Config
          </Grid> */}
        </Grid>
        <Divider/>

        {cart.map((item=>
        <>
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
              <img src={item.image} alt="Item"/>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              {item.name}
            </Grid>
              <EditBtn id={item.id} onChange={(i,v)=>handleEdit(i,v)} qty={item.qty}  price={item.price} handleDelete={(t)=>handleDelete(t)}/>
          </Grid>
          </div>
        <Divider/>
        </>))}
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}>
             Sub Total 
             </Grid>
             <Grid item xs={3} sm={3} md={3}>
             {total}
             </Grid>
        </Grid>
        
        <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin-top":"5px"}} onClick={()=>handleSubmit()}>
         Submit
        </Button>
      </Container>
    </>
  );
}
