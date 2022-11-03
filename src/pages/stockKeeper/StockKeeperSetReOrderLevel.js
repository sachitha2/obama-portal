import { Helmet } from 'react-helmet-async';
import {useCallback, useEffect, useState} from "react";
// @mui
import { Container, Typography,Grid,Button,Divider,TextField,Modal,Box } from '@mui/material';
import { getAcceptedOrders, prepareOrder } from '../../services/OrderService';
import StockKeeperAddRawItemModal from "./StockKeeperAddRawItemModal";
import {getAllItems} from "../../services/InventoryService";




export default function StockKeeperSetReOrderLevel() {

  const [data,setData] = useState([]);
  const [search,setSearch] = useState('')
  const [dataToShow,setDataToShow] = useState([]);


  const handleRefresh = useCallback(()=>{ // assign / prepare
  },[])

  useEffect(()=>{
    getAllItems().then(({data}) =>{
      setData(data);
    })
  },[handleRefresh])

  useEffect(()=>{
    if(search==="") setDataToShow(data)
    else{
      setDataToShow(data.filter(i=>i.itemName.contains(search)))
    }
  },[data,search])

  return (
    <>
      <Helmet>
        <title> Stock Keeper </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Set Re-Order Level
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
            Re-Order Level
          </Grid>
          <Grid item xs={3} sm={3} md={3} style={{"display":"none"}}>
            Config
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "#B5986D" }}/>

        {dataToShow.map(d=>
            <StockKeeperAddRawItemModal key={d.itemId} data={d}
                                        onSave={handleRefresh}
            />
        )}
        
      </Container>
    </>
  );
}
