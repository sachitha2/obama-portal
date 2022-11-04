import {useState,useEffect} from 'react'

import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { getCountsReport, getPopulaMenu } from '../services/ReportService';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  const [stat,setStat] = useState({totalCustomerCount:7140,todayNewCustomerCount:2120,todayOrderCount:1200,pendingOrderCount:200})

    const [reorderList,setReorderList] = useState(
      [...Array(5)].map((_, index) => ({
          id: faker.datatype.uuid(),
          title: "Onion",
          image: `/assets/images/covers/cover_${index + 1}.jpg`,
          postedAt: 'randon',
      }))
  )

  const [popularMenu,setPopularMenu] = useState([
      { label: 'Fried Rice', value: 4344 },
      { label: 'Pasta', value: 5435 },
      { label: 'Kottu', value: 1443 },
      { label: 'Pizza', value: 4443 },
  ])


    useEffect(()=>{
      getCountsReport().then(({data})=>{ 
            setStat(data)
        })

        getPopulaMenu().then(({data})=>{ 
          setPopularMenu(data)
        })

        // caller().then(({data})=>{ // TODO
        //     setPopularMenu(data)
        // })

        // caller().then(({data})=>{ // TODO
        //     setReorderList(data)
        // })

    },[])



  return (
    <>
      <Helmet>
        <title> Dashboard | Obama Foods </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Customers" total={stat.totalCustomerCount  === 0 ? 'Empty':stat.totalCustomerCount} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Today New Customers" total={stat.todayNewCustomerCount === 0 ? 'No New Customers':stat.todayNewCustomerCount} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Today Orders" total={stat.todayOrderCount === 0 ? 'No Orders Yet':stat.todayOrderCount} color="warning" icon={'ant-design:windows-filled'} />
            
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pending Orders" total={stat.pendingOrderCount === 0 ? 'No Pending Orders':stat.pendingOrderCount} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
              <AppNewsUpdate
                  title="Reorder Requests"
                  list={reorderList}
                  style={{"color":"black"}}
              />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Popular Menu"
              chartData={popularMenu}
              style={{"color":"black"}}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


        </Grid>
      </Container>
    </>
  );
}
