import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {getCookie} from "../../utils/cookies";
import {consumeQuantity} from "../../services/InventoryService";

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


const StockKeeperRetriveRawItemModal = ({data,onSave}) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const [amount,setAmount] = useState(data.amount);
    const userId = getCookie('userId');

    const handleSave = ()=>{
        consumeQuantity(data.itemId,amount,userId).then(()=>{
            onSave()
            handleClose()
        })
    }
    const units = (unit)=>{
        switch (unit) {
          case 'KILOS' : return ' Kg';
          case 'LITRES' : return ' L';
          case 'UNITS' : return ' Units';
          default : return 1;
        }
      }

    return (
        <div>
            <Grid container padding={3} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                    {data.itemId}
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    {data.itemName}
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    {data.quantity} {units(data.unit)}
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Button style={{"backgroundColor":"#175A00","color":"#FFF","margin":"5px"}}  onClick={handleOpen}>Retrieve</Button>
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
                                            Retrive Raw Items
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                        Item
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                        {data.itemName}
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                        Retrieving Qty
                                    </Grid>
                                   
                                    <Grid item xs={4} sm={4} md={4} padding={1}>
                                        <TextField
                                            name="date"
                                            type="text"
                                            inputProps={{ style: { color: "black" } }}
                                            value={amount}
                                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={2} md={2} padding={1}>
                                        {units(data.unit)}
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} padding={1} display="flex" justifyContent="center" alignContent="center" alignItems="center">
                                        <Button style={{ backgroundColor: '#C70606', color: '#FFF', margin: '5px' }} onClick={handleClose} >Cancel</Button>
                                        <Button style={{ backgroundColor: '#007E05', color: '#FFF', margin: '5px' }} onClick={handleSave}>Save</Button>

                                    </Grid>
                                </Grid>

                            </>
                        </Box>
                    </Modal>
                    {/* Modal end */}
                </Grid>
            </Grid>
        </div>
    );
};

StockKeeperRetriveRawItemModal.propTypes = {
    data:PropTypes.object,
    onSave: PropTypes.func
};

export default StockKeeperRetriveRawItemModal;