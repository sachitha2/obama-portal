import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import {Link, useLocation} from 'react-router-dom';
import { Box, Stack, AppBar, Toolbar, IconButton,Button } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const NAV_WIDTH = 150;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {

  const { pathname } = useLocation();

  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Link to="menu-selector-page" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/menu-selector-page'?"contained":'text'}>Menu Selector</Button>
          </Link>
          <Link to="order-requests" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/order-requests'?"contained":'text'}>Order Requests</Button>
          </Link>
          <Link to="accepted-orders" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/accepted-orders'?"contained":'text'}>Accepted Orders</Button>
          </Link>
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
