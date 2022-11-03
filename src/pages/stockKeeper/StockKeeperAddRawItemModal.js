import React,{useState}  from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {addQuantity} from "../../services/InventoryService";
import {getCookie} from "../../utils/cookies";

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

const StockKeeperAddRawItemModal = ({data,onSave}) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const [amount,setAmount] = useState(data.amount);
    const userId = getCookie('userId');

    const handleSave = ()=>{
        addQuantity(data.itemId,amount,userId).then(()=>{
            handleClose()
            onSave()
        })
    }

    return (
        <div>
            <Grid container padding={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={3} sm={3} md={3}>
                    {data.itemId}
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    {data.itemName}
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    {data.quantity} units
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
                                        {data.itemName}
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} padding={1}>
                                        <TextField
                                            name="date"
                                            type="text"
                                            value={amount}
                                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} padding={1} display="flex" justifyContent="center" alignContent="center" alignItems="center">
                                        <Button style={{ backgroundColor: '#C70606', color: '#FFF', margin: '5px' }} onCanPlay={handleClose}>Cancel</Button>
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

StockKeeperAddRawItemModal.propTypes = {
    data:PropTypes.object,
    onSave: PropTypes.func

};

export default StockKeeperAddRawItemModal;