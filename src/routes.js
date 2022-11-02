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
import CashierDashboard from './pages/cashier/CashierDashboard';
import CashierPlaceOrder from './pages/cashier/CashierPlaceOrder';
import CustomerCart from './pages/CustomerCart';
import CustomerCartMenu from './pages/CustomerCartMenu';
import StockKeeperAddRawItems from './pages/stockKeeper/StockKeeperAddRawItems';
import StockKeeperRetrieveRawItems from './pages/stockKeeper/StockKeeperRetrieveRawItems';
import StockKeeperSetReOrderLevel from './pages/stockKeeper/StockKeeperSetReOrderLevel';

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
        { path: 'stock-keeper-add-raw-items', element: <StockKeeperAddRawItems /> },
        { path: 'stock-keeper-set-re-order-level', element: <StockKeeperSetReOrderLevel/> },
        { path: 'stock-keeper-retrieve-raw-items', element: <StockKeeperRetrieveRawItems/> },
        { path: 'order-requests', element: <OrderRequests /> },
        { path: 'customer-cart', element: <CustomerCart /> },
        { path: 'customer-menu', element: <CustomerCartMenu /> },
        { path: 'admin-generate-reports', element: <AdminGenerateReports /> },
        { path: 'admin-manage-staff', element: <AdminManageStaff/> },
        { path: 'admin-manage-items', element: <AdminManageItems/> },
        { path: 'cashier-dashboard', element: <CashierDashboard/> },
        { path: 'cashier-place-order', element: <CashierPlaceOrder/> },
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
        { element: <Navigate to="/login" />, index: true },
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
