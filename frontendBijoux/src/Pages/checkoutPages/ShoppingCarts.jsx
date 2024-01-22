import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CancelIcon from "@mui/icons-material/Cancel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { axiosClient } from "../../api/axios";
import swal from "sweetalert";
import Header2 from "../Home/Header2";
import { Link } from "react-router-dom";

function ShoppingCarts() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    var totalCartPrice = 0;
    useEffect(() => {
        const fetchData = async () => {
            let isMounted = true;
            try {
                const res = await axiosClient.get("/client/cart");
                if (isMounted) {
                    if (
                        res.data &&
                        res.data.hasOwnProperty("status") &&
                        res.data.hasOwnProperty("cart")
                    ) {
                        if (res.data.status === 200) {
                            setCart(res.data.cart);
                        } else if (res.data.status === 401) {
                            const errorMessage =
                                res.data.message || "Unauthorized";
                            swal("Warning", errorMessage, "error");
                        } else {
                            console.error("Invalid response format:", res);
                        }
                    } else {
                        console.error("Invalid response format:", res);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                isMounted && (isMounted = false);
            }
        };

        fetchData();
    }, []);

    const handleDecrement = (cart_id) => {
        setCart((cart) =>
            cart.map((item) =>
                cart_id === item.id
                    ? {
                          ...item,
                          product_qty: Math.max(item.product_qty - 1, 0),
                      }
                    : item
            )
        );
        updateCartQuantity(cart_id, "dec");
    };
    const handleIncrement = (cart_id) => {
        setCart((cart) =>
            cart.map((item) =>
                cart_id === item.id
                    ? {
                          ...item,
                          product_qty: Math.min(item.product_qty + 1, 10),
                      }
                    : item
            )
        );
        updateCartQuantity(cart_id, "inc");
    };

    function updateCartQuantity(cart_id, scope) {
        axiosClient
            .put(`/client/cart-updatequantity/${cart_id}/${scope}`)
            .then((res) => {
                if (res.data.status === 200) {
                    // swal("Success", res.data.message, "success");
                }
            });
    }

    const deleteCartItem = (e, cart_id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Removing";

        axiosClient.delete(`/client/delete-cartitem/${cart_id}`).then((res) => {
            if (res.data.status === 200) {
                swal("Success", "Cart item removed successfully", "success");
                thisClicked.closest("tr").remove(); // Fix: Use 'tr' instead of 'TableRow'
            } else if (res.data.status === 404) {
                swal("Error", "Cart item not found", "error");
                thisClicked.innerText = "Remove";
            }
        });
    };

    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    paddingRight: "5vw",
                    fontSize: "34px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    letterSpacing: "0.04em",
                }}
            >
                Shopping Cart
            </h1>
            <section style={{ width: "100vw", padding: "3vw" }}>
                <article style={{ width: "60vw", height: "100vh" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            fontSize: "17px",
                                            color: "#000",
                                            fontFamily: "Uchen Regular",
                                        }}
                                    >
                                        Product
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{
                                            fontSize: "17px",
                                            color: "#000",
                                            fontFamily: "Uchen Regular",
                                        }}
                                    >
                                        Price
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{
                                            fontSize: "17px",
                                            color: "#000",
                                            fontFamily: "Uchen Regular",
                                        }}
                                    >
                                        Quantity
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{
                                            fontSize: "17px",
                                            color: "#000",
                                            fontFamily: "Uchen Regular",
                                        }}
                                    >
                                        Subtotal
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((item, idx) => {
                                    totalCartPrice +=
                                        item.product.price * item.product_qty;
                                    return (
                                        <TableRow
                                            key={idx}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    { border: 0 },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                style={{
                                                    fontSize: "14px",
                                                    lineHeight: "14px",
                                                    fontWeight: "400",
                                                    color: "#868686",
                                                }}
                                            >
                                                {/* <img src={`../src/img/${row.img}`} alt="" style={{width:'80px',height:'80px',marginRight:'20px'}} /> */}
                                                <img
                                                    src={`${apiUrl}${item.product.image_url}`}
                                                    alt=""
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        marginRight: "20px",
                                                    }}
                                                />
                                                {item.product.name}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {item.product.price} MAD
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{
                                                    position: "relative",
                                                    left: "30px",
                                                }}
                                            >
                                                <div
                                                    className="d-flex justify-content-around align-items-center p-1"
                                                    style={{
                                                        border: "2px solid #a7a7a7",
                                                        width: "6vw",
                                                        height: "4vh",
                                                        cursor: "pointer",
                                                        borderRadius: "20px",
                                                    }}
                                                >
                                                    <span
                                                        onClick={() =>
                                                            handleDecrement(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </span>
                                                    <h6 className="mt-2">
                                                        {item.product_qty}
                                                    </h6>
                                                    <span
                                                        onClick={() =>
                                                            handleIncrement(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{
                                                    fontSize: "12px",
                                                    color: "#000",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {item.product.price *
                                                    item.product_qty}{" "}
                                                MAD
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                style={{ cursor: "pointer" }}
                                            >
                                                <CancelIcon
                                                    style={{ color: "#34513F" }}
                                                    onClick={(e) =>
                                                        deleteCartItem(
                                                            e,
                                                            item.id
                                                        )
                                                    }
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                <TableRow>
                                    <TableCell align="right">
                                        <div class="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Coupon code"
                                                aria-label="Coupon code"
                                                aria-describedby="button-addon2"
                                            />
                                            <button
                                                className="px-4 py-3"
                                                type="button"
                                                id="button-addon2"
                                                style={{
                                                    background: "#000",
                                                    textTransform: "uppercase",
                                                    color: "#fff",
                                                    fontSize: "11px",
                                                    borderRadius: "0",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Apply coupon
                                            </button>
                                        </div>
                                    </TableCell>
                                    <TableCell style={{}}>
                                        <Link
                                            href="#"
                                            style={{
                                                color: "#181818",
                                                textDecoration: "none",
                                                cursor: "pointer",
                                                width: "30vw",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Continue Shopping
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <button
                                            type="submit"
                                            name="updateCart"
                                            style={{
                                                position: "relative",
                                                left: "100px",
                                                bottom: "10px",
                                                width: "10vw",
                                                height: "8vh",
                                                background: "#000",
                                                textTransform: "uppercase",
                                                color: "#fff",
                                                fontSize: "11px",
                                                borderRadius: "0",
                                                cursor: "pointer",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Update Cart
                                        </button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </article>
                <aside
                    style={{
                        width: "30vw",
                        height: "100vh",
                        marginLeft: "20px",
                    }}
                >
                    <TableContainer
                        component={Paper}
                        style={{ borderRdius: "0" }}
                    >
                        <Table sx={{ minWidth: 200 }} aria-label="simple table">
                            <TableHead style={{ background: "#E9E9E9" }}>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            fontSize: "17px",
                                            color: "#000",
                                            fontFamily: "Uchen Regular",
                                        }}
                                    >
                                        Cart totals
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    className="bg-light"
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>SubTotal</TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            fontSize: "14px",
                                            lineHeight: "14px",
                                            fontWeight: "400",
                                            color: "#868686",
                                        }}
                                    >
                                        {totalCartPrice} MAD
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    className="bg-light"
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>Shipping</TableCell>
                                    <TableCell>
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="freeShipping"
                                                name="radio-buttons-group"
                                            >
                                                <FormControlLabel
                                                    value="freeShipping"
                                                    control={
                                                        <Radio
                                                            sx={{
                                                                color: "#181818",
                                                                "&.Mui-checked":
                                                                    {
                                                                        color: "#181818",
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Free Shipping"
                                                />
                                                <FormControlLabel
                                                    value="flatRate"
                                                    control={
                                                        <Radio
                                                            sx={{
                                                                color: "#181818",
                                                                "&.Mui-checked":
                                                                    {
                                                                        color: "#181818",
                                                                    },
                                                            }}
                                                        />
                                                    }
                                                    label="Flat Rate"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                                <TableRow className="bg-light">
                                    <TableCell>Total</TableCell>
                                    <TableCell>{totalCartPrice} MAD</TableCell>
                                </TableRow>
                                <TableRow>
                                    <Link to="/checkout">
                                        <button
                                            className="px-4 m-2"
                                            style={{
                                                height: "8vh",
                                                background: "#000",
                                                textTransform: "uppercase",
                                                color: "#fff",
                                                fontSize: "11px",
                                                borderRadius: "0",
                                                cursor: "pointer",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            PROCEED TO CHECKOUT
                                        </button>
                                    </Link>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </aside>
            </section>
        </>
    );
}

export default ShoppingCarts;
