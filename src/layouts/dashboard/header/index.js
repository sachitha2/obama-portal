import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { Box, Stack, AppBar, Toolbar, IconButton,Button } from '@mui/material';
import { useState, useEffect } from 'react';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import { getCookie, eraseCookie } from '../../../utils/cookies';

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
  const [USER_ROLE, setUserRole] = useState('');
  const { pathname } = useLocation();
  useEffect(() => {
    // KITCHEN_MANAGER ,ADMIN, CUSTOMER, CASHIER,STOCK_KEEPER
    const role = getCookie('role');
    setUserRole(role);
    setUserRole('CASHIER')
  }, [])

  const navigate = useNavigate();

  const logOut = ()=>{
    eraseCookie('role');
    eraseCookie('userId');
    navigate('/login');
  }

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
          direction="column"
          alignItems="flex-end"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Button style={{'width':"100px",'color':"white"}} onClick={logOut}>{USER_ROLE}</Button>
          <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {USER_ROLE === "KITCHEN_MANAGER" ? <>
          <Link to="menu-selector-page" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/menu-selector-page'?"contained":'text'}>Menu Selector</Button>
          </Link>
          <Link to="order-requests" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/order-requests'?"contained":'text'}>Order Requests</Button>
          </Link>
          <Link to="accepted-orders" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/accepted-orders'?"contained":'text'}>Accepted Orders</Button>
          </Link>
          </>
          :
          null
          }

        {USER_ROLE === "ADMIN" ? <>
          <Link to="app" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/app'?"contained":'text'}>Dashboard</Button>
          </Link>
          <Link to="admin-manage-items" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/admin-manage-items'?"contained":'text'}>Manage Items</Button>
          </Link>
          <Link to="admin-manage-staff" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/admin-manage-staff'?"contained":'text'}>Manage Staff</Button>
          </Link>
          <Link to="admin-generate-reports" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/admin-generate-reports'?"contained":'text'}>Generate Reports</Button>
          </Link>
          </>
          :
          null
          }

          {USER_ROLE === "CUSTOMER" ? <>
          CUSTOMER
          </>
          :
          null
          }

          {USER_ROLE === "CASHIER" ? <>
          <Link to="cashier-dashboard" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/cashier-dashboard'?"contained":'text'}>Dashboard</Button>
          </Link>

          <Link to="cashier-place-order" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/cashier-place-order'?"contained":'text'}>Place Order</Button>
          </Link>

          <Link to="admin-generate-reports" style={{"textDecoration":'none'}}>
            <Button variant={pathname==='/dashboard/admin-generate-reports'?"contained":'text'}>Accept Payments</Button>
          </Link>
          </>
          :
          null
          }
          
        </Stack>

        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
