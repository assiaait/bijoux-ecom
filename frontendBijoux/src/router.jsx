import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import Login from "./Pages/auth/Login.jsx";
import SingUp from "./Pages/register.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ClientHome from "./Pages/Home/clientHome.jsx";
import Layout from "./Layouts/layout.jsx";
import GuestLayout from "./Layouts/GuestLayout.jsx";
import AdminDashboardLayout from "./Layouts/Admin/AdminDashboardLayout.jsx";
import ClientLayout from "./Layouts/Client/ClientLayout.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import ManageProducts from "./Admin/ManageProducts.jsx";
import CreateProducts from "./Admin/forms/CreateProducts.jsx";
import ListProduct from "./Admin/ListProduct.jsx";
export const USER_HOME_ROUTE = "/Home";
export const ROUTE_LOGIN = "/login";
export const CLIENT_HOME_ROUTE = "/clientHome";
export const ADMIN_BASE_ROUTE = "/admin";
export const ADMIN_DASHBOARD_ROUTE = ADMIN_BASE_ROUTE + "/adminDashboard";
export const ADMIN_MANAGE_PRODUCTS_ROUTE = ADMIN_BASE_ROUTE + "/manage-products";
export const router = createBrowserRouter([
    {
        //partie visiteurs
        element: <Layout />,
        children: [
            {
                path: USER_HOME_ROUTE,
                element: <Home />,
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        //Partie Client
        element: <GuestLayout />,
        children: [
            {
                path: ROUTE_LOGIN,
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SingUp />,
            },
        ],
    },
    {
        element: <ClientLayout />,
        children: [
            {
                path: CLIENT_HOME_ROUTE,
                element: <ClientHome />,
            },
        ],
    },
    {
        element: <AdminDashboardLayout />,
        children: [
            {
                path: ADMIN_DASHBOARD_ROUTE,
                element: <AdminDashboard />,
            },
            {
                path: ADMIN_MANAGE_PRODUCTS_ROUTE,
                element: <ManageProducts />,
            },
            {
                path: "/list-products",
                element: <ListProduct />,
            },
            {
                path: "/create-product",
                element: <CreateProducts />,
            },
        ],
    },
]);