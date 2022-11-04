import PropTypes from 'prop-types';
// @mui
import { Box, Card, Typography, Stack,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { setAvailability } from '../../../services/MenuService';
// utils
// components

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
    changed: PropTypes.func,
      hideButton:PropTypes.bool,
};

export default function ShopProductCard({ product, changed, hideButton }) {
  const { name, cover, currentState, itemId } = product;

    const changeState = (id)=>{
        // API call to change State
        setAvailability(id).then(()=>changed());        
    }

  return (
    <Card style={{"background":'#000'}}>
      <Typography variant="h5" align='center'>
          {name}
      </Typography>

      <Box sx={{ pt: '100%', position: 'relative' }}>
        <h3 style={{"textAlign":"center"}}>{currentState==='AVAILABLE'?'Available':'Unavailable'}</h3>
        <StyledProductImg alt={name} src={cover} style={{'opacity':'0.3'}}/>
      </Box>

      {!hideButton && <Stack spacing={2} sx={{ p: 3 }}>
        <Button variant={currentState==='AVAILABLE'?'contained':'outlined'} onClick={()=>changeState(itemId)}>{currentState==='AVAILABLE'?'Unavailable':'Available'}</Button>
      </Stack>}
    </Card>
  );
}
