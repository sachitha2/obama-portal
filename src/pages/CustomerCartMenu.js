import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import {useEffect, useState, useCallback} from 'react';
import { Container, Typography,Grid,Button,Divider } from '@mui/material';
import {atom, useAtom} from "jotai";
import { getOrderRequests, acceptOrder } from '../services/OrderService';
import { getAvailableMenuItems } from '../services/MenuService';


export const MYCART = atom([])

export default function CustomerCartMenu() {

  const [data,setData] = useState([]);
  const [menu,setMenu] = useState([]);
  const [category,setCategory] = useState([]);
  const [menuToShow,setMenutoShow] = useState([]);
  const [itemType,setItemType] = useState('ALL')
  const [cart,setCart]=useAtom(MYCART)

  useEffect(()=>{
    // API call to fetch menu data  TODO
    const fetchData = () =>{
      getAvailableMenuItems().then(data =>{
        const out = data.data.map(d=>({id:d.menuId,name:d.menuName,price:parseFloat(d.price),type:d.type,image:d.imageUrl}))
        console.log(out);
        
        setMenu(out);
      })
    }
    fetchData();
    

  },[])

  useEffect(()=>{
    // API call to fetch menu data  TODO
    setCategory([{
      id:1,
      name:"RICE_SPECIALITIES",
    },{
      id:2,
      name:"BEVERAGES",
    },{
      id:3,
      name:"DESSERTS",
    },{
      id:4,
      name:"KOTHTHU",
    }
  ])

  },[])

  useEffect(()=>{
    if(itemType==='ALL') setMenutoShow(menu); else
      setMenutoShow(menu.filter(m=>m.type===itemType))
  },[itemType,menu])

  const handleAddToCart = useCallback((item)=>{
    if(cart.findIndex(i=>i.id===item.id) === -1) {
      setCart(i=>[...i,{...item,qty:1}])
    }else{
        const index = cart.findIndex(i=>i.id===item.id)
        setCart(i=>{
          i[index].qty+=1
          return i
        })
    }
  },[cart, setCart]);

  return (
    <>
      <Helmet>
        <title> Customer - Menu </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Menu - {itemType.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </Typography>
        <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Button onClick={()=>setItemType('ALL')} variant={itemType==='ALL'?"contained":'text'} style={{"margin":"5px"}}>ALL</Button>
          {category.map((cat,i) =>
          <Button key={i} onClick={()=>setItemType(cat.name)} variant={itemType===cat.name?"contained":'text'} style={{"margin":"5px"}}>{cat.name.toLowerCase()
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
              .replace('_',' ')
          }</Button>
          )}
          {/* <Button onClick={()=>setItemType('BEVERAGES')}  variant={itemType==='BEVERAGES'?"contained":'text'}   style={{"margin":"5px"}}>Beverages</Button> */}
          {/* <Button style={{"backgroundColor":"#FF7A00","color":"#FFF","margin":"5px"}}>Dessert</Button> */}
        </Grid>
        <Divider/>
        {menuToShow.map(item=>
        <>
        <div>
          <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={6} sm={6} md={6}>
              <img src={item.image} alt={item.image} />
            </Grid>
            <Grid item xs={6} sm={6} md={6} style={{"display":"flex","flexDirection":"column","padding":"10px","justifyContent":"space-around"}}>
              {item.name}
              <p className="text-small">Rs. {item.price.toFixed(2)}</p>
              <Button onClick={()=>handleAddToCart(item)} style={{"backgroundColor":"#FFF","color":"#000","margin-top":"5px","width":"50px","position":"relative","top":"15px","right":"-100px"}}>+ Add</Button>
              </Grid>
          </Grid>
          </div>
        <Divider/>
        </>
        )}
      </Container>
    </>
  );
}
