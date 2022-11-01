import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import MenuSelectorPage from './pages/MenuSelectorPage';
import OrderRequests from './pages/OrderRequests';
import AcceptedOrders from './pages/AcceptedOrders';
import DashboardAppPage from './pages/DashboardAppPage';
import AdminGenerateReports from './pages/AdminGenerateReports';
import AdminManageStaff from './pages/AdminManageStaff';
import AdminManageItems from './pages/AdminManageItems';
import LoginPageCustomerVerify from './pages/LoginPageCustomerVerify';
import LoginPageCustomer from './pages/LoginPageCustomer';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'menu-selector-page', element: <MenuSelectorPage /> },
        { path: 'accepted-orders', element: <AcceptedOrders /> },
        { path: 'order-requests', element: <OrderRequests /> },
        { path: 'admin-generate-reports', element: <AdminGenerateReports /> },
        { path: 'admin-manage-staff', element: <AdminManageStaff/> },
        { path: 'admin-manage-items', element: <AdminManageItems/> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'customer-login',
      element: <LoginPageCustomer/>,
    },
    {
      path: 'customer-login-verify',
      element: <LoginPageCustomerVerify />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
