import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
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
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;

  return (
    <Card style={{"background":'#000'}}>
      <Typography variant="h5" align='center'>
        Chicken Fried Rice
      </Typography>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <h3 style={{"textAlign":"center"}}>Unavailable</h3>
        {/* {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: '50%',
              right: '50%',
              position: 'absolute',
              width:"100px",
              height:"40px",
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )} */}
        <StyledProductImg alt={name} src={cover} style={{'opacity':'0.3'}}/>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Button variant='contained'>purchase</Button>
        {/* <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link> */}

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={colors} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack> */}
      </Stack>
    </Card>
  );
}
