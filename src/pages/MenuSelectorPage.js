import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography} from '@mui/material';
// components
import { ProductList} from '../sections/@dashboard/products';
// mock
// import PRODUCTS from '../_mock/products';
// ----------------------------------------------------------------------

export default function ProductsPage() {

  return (
    <>
      <Helmet>
        <title> Dashboard: Menu Selector </title>
      </Helmet>

      <Container>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Menu Selector
        </Typography>
        <ProductList />
      </Container>
    </>
  );
}
