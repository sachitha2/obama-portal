import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Stack, AppBar, Toolbar, IconButton,Button } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const NAV_WIDTH = 150;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;
// KITCHEN_MANAGER , ADMIN
window.sessionStorage.setItem("USER_ROLE", "ADMIN");
const USER_ROLE = window.sessionStorage.getItem("USER_ROLE");

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
          <Button style={{'width':"100px",'color':"white"}}>{USER_ROLE}</Button>
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
            <Button variant="contained">Menu Selector</Button>
          </Link>
          <Link to="order-requests" style={{"textDecoration":'none'}}>
            <Button variant="text">Order Requests</Button>
          </Link>
          <Link to="accepted-orders" style={{"textDecoration":'none'}}>
            <Button variant="text">Accepted Orders</Button>
          </Link>
          </>
          :
          null
          }

        {USER_ROLE === "ADMIN" ? <>
          <Link to="admin-dashboard" style={{"textDecoration":'none'}}>
            <Button variant="contained">Dashboard</Button>
          </Link>
          <Link to="admin-generate-reports" style={{"textDecoration":'none'}}>
            <Button variant="text">Generate Reports</Button>
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
