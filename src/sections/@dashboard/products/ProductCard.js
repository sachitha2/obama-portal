import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import {useState} from "react";
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

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
    changed: PropTypes.func
};

export default function ShopProductCard({ product, changed }) {
  const { name, cover, currentState, itemId } = product;

    const changeState = (id)=>{
        // API call to change State TODO

        changed();
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

      <Stack spacing={2} sx={{ p: 3 }}>
        <Button variant='contained' onClick={()=>changeState(itemId)}>{currentState==='AVAILABLE'?'Unavailable':'Available'}</Button>
      </Stack>
    </Card>
  );
}
