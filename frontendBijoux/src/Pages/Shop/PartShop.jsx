import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import ProductApi from "../../services/Api/ProductApi";

export default function PartShop(props) {
    const [products, setProducts] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    const [hoveredStates, setHoveredStates] = useState(
        Array(products.length).fill(false)
    );

    const handleMouseEnter = (index) => {
        setHoveredStates((prev) => {
            const newHoveredStates = [...prev];
            newHoveredStates[index] = true;
            return newHoveredStates;
        });
    };

    const handleMouseLeave = (index) => {
        setHoveredStates((prev) => {
            const newHoveredStates = [...prev];
            newHoveredStates[index] = false;
            return newHoveredStates;
        });
    };

    const handleAddToCart = () => {
        console.log("Product added to cart!");
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductApi.All();
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    console.error(
                        "Invalid data structure in the API response:",
                        response
                    );
                    setProducts([]);
                    setHoveredStates([]);
                }
            } catch (error) {
                console.error("Error fetching products:", error.message);
                setProducts([]);
                setHoveredStates([]);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main>
            <div className="">
                <h1 className="partShop">Luxury Jewelry</h1>
                <hr />
                <div className="shop d-flex justify-content-evenly">
                    <Link
                        to="/shop"
                        style={{
                            textDecoration: "none",
                            textTransform: "none",
                        }}
                    >
                        <h4>NEW ARRIVED</h4>
                    </Link>
                    <Link
                        to="/shop"
                        style={{
                            textDecoration: "none",
                            textTransform: "none",
                        }}
                    >
                        <h4>FEATURED</h4>
                    </Link>
                    <Link
                        to="/shop"
                        style={{
                            textDecoration: "none",
                            textTransform: "none",
                        }}
                    >
                        <h4>ON A SALE</h4>
                    </Link>
                </div>
                <hr />
            </div>
            <div
                className="container row row-cols-4 gap-3 justify-content-between"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(5, 1fr)",
                    gridGap: "10px",
                }}
            >
                {products.map((product, index) => (
                    <div
                        className={`cardProduct ${
                            hoveredStates[index] ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        item
                        key={product.id}
                        style={{
                            gridArea: `${Math.floor(index / 4) + 1} / ${
                                (index % 4) + 1
                            } / ${Math.floor(index / 4) + 2} / ${
                                (index % 4) + 2
                            }`,
                            marginLeft: "10px",
                            height: "50vh",
                        }}
                    >
                        {product.image_url ? (
                            <div
                                item
                                key={product.id}
                                xs={12}
                                sm={6}
                                md={4}
                                className="product"
                                component="img"
                                alt={product.name}
                                height="140"
                                style={{
                                    objectFit: "cover",
                                    backgroundImage: `url(${apiUrl}${product.image_url})`,
                                }}
                            >
                                <div className="product cardProduct d-flex justify-content-between">
                                    <span>-40%</span>
                                    <h6
                                        className="pt-1 px-1"
                                        style={{ color: "#ffffff" }}
                                    >
                                        Out Of Stock
                                    </h6>
                                </div>
                                <div className="pt-3">
                                    <h6>{product.name}</h6>
                                    <div className="d-flex column prix ">
                                        <p className="">{product.price} MAD</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Typography variant="body2">
                                No Image Available
                            </Typography>
                        )}

                        {hoveredStates[index] && (
                            <Link to="/checkout">
                                <button
                                    className="add-to-cart-button btn-cart-add"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            
        </main>
    );
}
