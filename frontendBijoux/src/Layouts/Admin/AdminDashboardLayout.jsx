import * as React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { secondaryListItems } from "../../Admin/components/listItems";
import AccountMenu from "../../Admin/components/AccountMenu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../index.css";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import ClientApi from "../../services/Api/Client/ClientApi";
import { ROUTE_LOGIN } from "../../router";
import { ADMIN_MANAGE_PRODUCTS_ROUTE } from "../../router";

//product
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

//product
export default function AdminDashboardLayout() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const {
        authenticated,
        setUser,
        setAuthenticated,
        logout: contextLogout,
    } = useUserContext();
    useEffect(() => {
        if (authenticated === true) {
            setIsLoading(false);
            ClientApi.getUser()
                .then(({ data }) => {
                    setUser(data);
                    setAuthenticated(true);
                })
                .catch((error) => {
                    console.error("Error fetching user:", error);
                    contextLogout();
                });
        } else {
            navigate(ROUTE_LOGIN);
        }
    }, [authenticated]);
    //create products
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar
                        style={{ backgroundColor: "#34513f" }}
                        position="absolute"
                        open={open}
                    >
                        <Toolbar
                            sx={{
                                pr: "24px", // keep right padding when drawer closed
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: "36px",
                                    ...(open && { display: "none" }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Dashboard
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="success">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <AccountMenu />
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <Toolbar
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                px: [1],
                            }}
                        >
                            <Typography
                                component="h1"
                                variant="h6"
                                color="#34513F"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                Administrateur
                            </Typography>
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Toolbar>
                        <Divider />
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon
                                        style={{ color: "#34513f" }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingCartIcon
                                        style={{ color: "#34513f" }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PeopleIcon style={{ color: "#34513f" }} />
                                </ListItemIcon>
                                <ListItemText primary="Customers" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BarChartIcon
                                        style={{ color: "#34513f" }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Reports" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LayersIcon style={{ color: "#34513f" }} />
                                </ListItemIcon>
                                <ListItemText primary="Integrations" />
                            </ListItemButton>
                            <Link to={ADMIN_MANAGE_PRODUCTS_ROUTE} style={{ textDecoration:'none', textTransform:'none', color:'#181818'}}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LocalMallOutlinedIcon
                                            style={{ color: "#34513f" }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText  primary="Create Product" />
                                </ListItemButton>
                            </Link>
                            <Divider sx={{ my: 1 }} />
                            {secondaryListItems}
                        </List>
                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: "100vh",
                            overflow: "auto",
                        }}
                    >
                        <Toolbar />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <Outlet />
                        </Container>
                        <Copyright sx={{ pt: 4, mb: 0 }} />
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}
