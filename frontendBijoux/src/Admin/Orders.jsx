import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./components/Title";
import OrderApi from "../services/Api/OrderApi";
import { format } from 'date-fns';
export default function Orders() {
    const [orders, setOrders] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await OrderApi.getAllOrders();
                console.log("Response from API:", response);

                if (response.status === 200 && Array.isArray(response.data)) {
                    setOrders(response.data);
                } else {
                    console.error(
                        "Invalid data structure in the API response:",
                        response
                    );
                    setOrders([]);
                }
            } catch (error) {
                console.error("Error fetching orders:", error.message);
                setOrders([]);
            }
        };

        fetchOrders();
    }, []);
    return (
        <>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Ship To</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right">Sale Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            {/* Map order properties to table cells */}
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{format(new Date(order.created_at), 'dd/MM/yyyy')}</TableCell>
                            <TableCell>
                                {order.firstname} {order.lastname}
                            </TableCell>
                            <TableCell>{order.state_contry}</TableCell>
                            <TableCell>{order.payment_mode}</TableCell>
                            <TableCell align="right">{`${order.total_amount} Mad`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={{}} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </>
    );
}
