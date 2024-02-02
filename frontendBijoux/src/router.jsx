import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import Login from "./Pages/auth/Login.jsx";
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
import Shop from "./Pages/Shop/Shop.jsx";
import { Contact } from "./Pages/Contact/Contact.jsx";
import CheckoutPages from "./Pages/checkoutPages/CheckoutPages.jsx";
import AboutUsPages from "./Pages/AboutUs/AboutUsPages.jsx";
import Checkout from "./Pages/checkoutPages/Checkout.jsx";
import ShoppingCarts from "./Pages/checkoutPages/ShoppingCarts.jsx";
import Orders from "./Admin/Orders.jsx";
import Product from "./Pages/Shop/Product.jsx";
import Register from "./Pages/auth/register.jsx";
import ManageCategories from "./Admin/ManageCategories.jsx";
import CreateCategories from "./Admin/forms/CreateCategories.jsx";
import ListCategories from "./Admin/ListCategories.jsx";
import EditCategory from "./Admin/editCategory.jsx";
export const USER_HOME_ROUTE = "/Home";
export const ROUTE_LOGIN = "/login";
export const CLIENT_HOME_ROUTE = "/clientHome";
export const ADMIN_BASE_ROUTE = "/admin";
export const ADMIN_DASHBOARD_ROUTE = ADMIN_BASE_ROUTE + "/adminDashboard";
export const ADMIN_MANAGE_PRODUCTS_ROUTE = ADMIN_BASE_ROUTE + "/manage-products";
export const ADMIN_MANAGE_CATEGORIES_ROUTE = ADMIN_BASE_ROUTE + "/manage-categories";
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
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/AboutUsPage",
                element: <AboutUsPages />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "/product/:productId",
                element: <Product />,
            },
            {
                path: "/Register",
                element: <Register />,
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
        ],
    },
    {
        element: <ClientLayout />,
        children: [
            {
                path: CLIENT_HOME_ROUTE,
                element: <ClientHome />,
            },
            {
                path: "/cart",
                element: <ShoppingCarts />,
            },

            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/shop",
                element: <Shop />,
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
                path: ADMIN_MANAGE_CATEGORIES_ROUTE,
                element: <ManageCategories />,
            },
            {
                path: "/list-products",
                element: <ListProduct />,
            },
            {
                path: "/create-product",
                element: <CreateProducts />,
            },
            {
                path: "/list-order",
                element: <Orders />,
            },
            {
                path: "/create-category",
                element: <CreateCategories />,
            },
            {
                path: "/list-categories",
                element: <ListCategories />,
            },
            {
                path: "/edit-category/:categoryId",
                element: <EditCategory />,
            },
            {
                path: "/edit-product/:productId",
                element: <EditCategory />,
            },
        ],
    },
]);
