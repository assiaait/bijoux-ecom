import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CardProduct from "./CardProduct";
import Boucle from "../../img/boucle.jpg";
import { Rating } from "@mui/material";
import Counter from "./Counter";
import Collapsing from "./Collapsing";
import ProductApi from "../../services/Api/ProductApi";
import { axiosClient } from "../../api/axios";
import swal from "sweetalert";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}


function Product() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); 
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    const { productId } = useParams();
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                console.log(
                    "Fetching product details for productId:",
                    productId
                );
                const response = await ProductApi.show(productId);
                console.log("Product Details:", response.data);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        // Call fetchProductDetails with the productId from the route parameters
        fetchProductDetails();
    }, [productId]);
    const handleDecrement = () => {
        if (quantity>1) {
            setQuantity(prevCount => prevCount - 1);
        }
    };
    const handleIncrement = () => {
        if (quantity<10) {
            setQuantity(prevCount => prevCount + 1);
        }
    };
    
    const submitAddToCart = async (e) => {
        e.preventDefault();
        console.log("Product ID:", product.id);
        const data = {
            product_id: product.id,
            product_qty: quantity,
        };

        await axiosClient
            .post(`${apiUrl}/api/client/add-to-cart`, data)
            .then((res) => {
                if (res.data.status === 201) {
                    swal("Success", res.data.message, "success");
                } else if (res.data.status === 409) {
                    swal("Success", res.data.message, "success");
                } else if (res.data.status === 401) {
                    swal("Error", res.data.message, "error");
                } else if (res.data.status === 404) {
                    swal("Warning", res.data.message, "warning");
                }
            });
    };

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Shop
        </Link>,
        <Link
            underline="hover"
            key="3"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Wedding & Bridal
        </Link>,
    ];
    if (product) {
        breadcrumbs.push(
            <Typography key="4" color="text.primary">
                {product.name}
            </Typography>
        );
    }

    return (
        <>
            <header>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                    style={{
                        backgroundColor: "#d6e8da",
                        padding: "10px 40px",
                        color: "#34513F",
                    }}
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </header>
            <main>
                <div className="sectionProduct d-flex ">
                    <div className="asideProduct">
                        {product && (
                            <img
                                src={`${apiUrl}${product.image_url}`}
                                alt={product.name}
                            />
                        )}
                    </div>
                    {product && (
                        <div className="articleProduct mt-4">
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <h4>{product.price} MAD</h4>
                            <div className="d-flex ">
                                <Rating
                                    name="half-rating"
                                    defaultValue={2.5}
                                    precision={1}
                                />
                                <span
                                    className="ms-2 mt-1"
                                    style={{
                                        fontSize: "13px",
                                        color: "#A7A7A7",
                                    }}
                                >
                                    CUSTOMER REVIEW
                                </span>
                            </div>
                            <div className="mt-3 d-flex">
                                <div
                                    className="d-flex justify-content-around align-items-center"
                                    style={{
                                        border: "2px solid #34513F",
                                        width: "8vw",
                                        height: "8vh",
                                        cursor: "pointer",
                                    }}
                                >
                                    <span
                                        onClick={handleDecrement}
                                        style={{
                                            fontSize: "30px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        -
                                    </span>
                                    <h6
                                        className="mt-2"
                                        style={{ fontSize: "20px" }}
                                    >
                                        {quantity}
                                    </h6>
                                    <span
                                        onClick={handleIncrement}
                                        style={{
                                            fontSize: "25px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        +
                                    </span>
                                </div>
                                {product.stock ? (
                                    <button
                                        className="ms-5"
                                        style={{
                                            width: "20vw",
                                            border: "none",
                                            backgroundColor: "#34513F",
                                            color: "#fff",
                                            cursor: "pointer",
                                            fontSize: "18px",
                                            textTransform: "uppercase",
                                            lineHeight: "50px",
                                            fontWeight: "600",
                                        }}
                                        onClick={submitAddToCart}
                                    >
                                        ADD TO CART
                                    </button>
                                ) : (
                                    <div
                                        className="ms-5"
                                        style={{
                                            width: "20vw",
                                            color: "#fff",
                                            fontSize: "18px",
                                            textTransform: "uppercase",
                                            lineHeight: "50px",
                                            fontWeight: "600",
                                            backgroundColor: "gray",
                                            textAlign: "center",
                                            cursor: "not-allowed",
                                        }}
                                    >
                                        OUT OF STOCK
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <Collapsing />
                </div>
                <div className="mt-5 mb-5">
                    <h1
                        style={{
                            textAlign: "center",
                            fontSize: "28px",
                            lineSeight: "32px",
                            letterSpacing: "0.02em",
                            marginBottom: "60px",
                            fontWeight: "400",
                        }}
                    >
                        Related Products
                    </h1>
                    <div
                        id="carouselExampleControlsNoTouching"
                        className="carousel slide "
                        data-bs-touch="false"
                        data-bs-interval="false"
                    >
                        <div className="carousel-inner mb-5">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className="">
                                        <CardProduct className="col" />
                                    </div>
                                    <div className=" ms-5">
                                        <CardProduct className="col" />
                                    </div>
                                    <div className="ms-5">
                                        <CardProduct className="col" />
                                    </div>
                                    <div className="ms-5">
                                        <CardProduct className="col" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="">
                                        <CardProduct className="col" />
                                    </div>
                                    <div className="ms-5">
                                        <CardProduct className="col" />
                                    </div>
                                    <div className="ms-5">
                                        <CardProduct className="col" />
                                    </div>
                                    <div className="ms-5">
                                        <CardProduct className="col" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev btnPrev"
                            type="button"
                            data-bs-target="#carouselExampleControlsNoTouching"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next btnNext"
                            type="button"
                            data-bs-target="#carouselExampleControlsNoTouching"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Product;
