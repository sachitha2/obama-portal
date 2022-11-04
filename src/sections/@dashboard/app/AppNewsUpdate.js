// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';

// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 1, pr: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2} >
            <Box sx={{ minWidth: 150, flexGrow: 1 }}>
            <Typography color="black" variant="subtitle2" underline="hover" noWrap>
              Item Id
            </Typography>
          </Box>
          <Box sx={{ minWidth: 150, flexGrow: 1 }}>
            <Typography color="black" variant="subtitle2" underline="hover" noWrap>
              Item Name
            </Typography>
          </Box>
          <Box sx={{ minWidth: 150, flexGrow: 1 }}>
            <Typography color="black" variant="subtitle2" underline="hover" noWrap>
              Refil Amount
            </Typography>
          </Box>
          <Box sx={{ minWidth: 150, flexGrow: 1 }}>
            <Typography color="black" variant="subtitle2" underline="hover" noWrap>
              Available Quantity          
            </Typography>
          </Box>
          <Box sx={{ minWidth: 150, flexGrow: 1 }}>
            <Typography color="black" variant="subtitle2" underline="hover" noWrap>
              Unit         
            </Typography>
          </Box>
          </Stack>
          {list.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.shape({
    itemId: PropTypes.string,
    itemName: PropTypes.string,
    levelAdd: PropTypes.number,
    availQty:PropTypes.number,
    units:PropTypes.string,
  }),
};


function NewsItem({ news }) {
  const { itemId, itemName, levelAdd, availQty, units } = news;

  return (
    
          
    <Stack direction="row" alignItems="center" spacing={2} >
      {/* <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} /> */}

      <Box sx={{ minWidth: 150, flexGrow: 1 }}>
        <Typography color="black" variant="subtitle2" underline="hover" noWrap>
          {itemId}
        </Typography>
      </Box>
      <Box sx={{ minWidth: 150, flexGrow: 1 }}>
        <Typography color="black" variant="subtitle2" underline="hover" noWrap>
          {itemName}
        </Typography>
      </Box>
      
      <Box sx={{ minWidth: 150, flexGrow: 1 }}>
        <Typography color="black" variant="subtitle2" underline="hover" noWrap>
          {levelAdd}
        </Typography>
      </Box>
      <Box sx={{ minWidth: 150, flexGrow: 1 }}>
        <Typography color="black" variant="subtitle2" underline="hover" noWrap>
          {availQty}          
        </Typography>
      </Box>
      <Box sx={{ minWidth: 150, flexGrow: 1 }}>
        <Typography color="black" variant="subtitle2" underline="hover" noWrap>
          {units}
        </Typography>
      </Box>

      {/* <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {itemName}
      </Typography> */}
    </Stack>
  );
}
