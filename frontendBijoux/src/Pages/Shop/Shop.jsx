import { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CategorySlide from "./CategorySlide";
import AsideCategories from "./AsideCategories";
import ProductApi from "../../services/Api/ProductApi";
import Typography from "@mui/material/Typography";
import { Link, Navigate } from "react-router-dom";
import { axiosClient } from "../../api/axios";
import swal from "sweetalert";

function Shop(props) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
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

        setProduct(products[index]);
    };

    const handleMouseLeave = (index) => {
        setHoveredStates((prev) => {
            const newHoveredStates = [...prev];
            newHoveredStates[index] = false;
            return newHoveredStates;
        });
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
    const fetchProductDetails = async (productId) => {
        try {
            const response = await ProductApi.show(productId);
            setProduct(response.data); // Assuming your API response has a "data" property
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };
    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }
    const handleProductClick = (productId) => {
        // Use the `Link` component to navigate to the product page
        return <Link to={`/product/${productId}`} />;
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
    ];
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
                <CategorySlide />
            </header>
            <main>
                <section>
                    <aside>
                        <AsideCategories />
                    </aside>
                    <article>
                        <div className="d-flex justify-content-between mt-3">
                            <h6 className="mt-2">Showing 1–12 of 29 item(s)</h6>
                            <div className="dropdown">
                                <a
                                    className="btn dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Default Sorting
                                </a>

                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Default Sorting
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sort By Popularity
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sort By Average Rating
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sort By Latest
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sort By Price: Low To High
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sort By Price: High To Low
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row row-cols-3 justify-content-between mt-3 mb-2">
                            <div
                                className="container row row-cols-4 gap-3 justify-content-between"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gridTemplateRows: "repeat(5, 1fr)",
                                    gridGap: "10px",
                                }}
                            >
                                {products.map((product, index) => (
                                    <Link
                                        to={`/product/${product.id}`}
                                        key={product.id}
                                        onClick={() =>
                                            handleProductClick(product.id)
                                        }
                                        style={{
                                            textDecoration: "none",
                                            textTransform: "none",
                                        }}
                                    >
                                        <div
                                            className={`cardProduct ${
                                                hoveredStates[index]
                                                    ? "hovered"
                                                    : ""
                                            }`}
                                            onMouseEnter={() =>
                                                handleMouseEnter(index)
                                            }
                                            onMouseLeave={() =>
                                                handleMouseLeave(index)
                                            }
                                            onClick={() =>
                                                handleProductClick(product.id)
                                            }
                                            item
                                            key={product.id}
                                            style={{
                                                gridArea: `${
                                                    Math.floor(index / 3) + 1
                                                } / ${(index % 3) + 1} / ${
                                                    Math.floor(index / 3) + 2
                                                } / ${(index % 3) + 2}`,
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
                                                        {product.stock ===
                                                            0 && (
                                                            <h6
                                                                className="pt-1 px-1"
                                                                style={{
                                                                    color: "#ffffff",
                                                                }}
                                                            >
                                                                Out Of Stock
                                                            </h6>
                                                        )}
                                                    </div>
                                                    <div className="pt-3">
                                                        <h6>{product.name}</h6>
                                                        <div className="d-flex column prix ">
                                                            <p className="">
                                                                {product.price}{" "}
                                                                MAD
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <Typography variant="body2">
                                                    No Image Available
                                                </Typography>
                                            )}

                                            {hoveredStates[index] &&
                                                (product.stock > 0 ? (
                                                    <Link
                                                        to={`/product/${product.id}`}
                                                    >
                                                        <button
                                                            className="add-to-cart-button btn-cart-add"
                                                            onClick={() =>
                                                                submitAddToCart(
                                                                    product.id
                                                                )
                                                            }
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    <button
                                                        className="add-to-cart-button btn-cart-add"
                                                        disabled={
                                                            product.stock === 0
                                                        }
                                                    >
                                                        {product.stock > 0
                                                            ? "Add to Cart"
                                                            : "Out of Stock"}
                                                    </button>
                                                ))}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Shop;
