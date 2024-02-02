import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ProductApi from "../services/Api/ProductApi";
import { axiosClient } from "../api/axios";

export default function ListProduct() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        // Fetch product data from your API
        const fetchProducts = async () => {
            try {
                const response = await ProductApi.getAll();
                console.log("Response from API:", response);

                if (response.data && Array.isArray(response.data.data)) {
                    setProducts(response.data.data);
                } else {
                    console.error(
                        "Invalid data structure in the API response:",
                        response
                    );
                    setProducts([]);
                }
            } catch (error) {
                console.error("Error fetching products:", error.message);
                setProducts([]);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axiosClient.get(
                    `${apiUrl}/api/admin/all-category`
                );
                if (response.data.status === 200) {
                    setCategories(response.data.category);
                } else {
                    console.error("Error fetching categories:", response.data);
                    setCategories([]);
                }
            } catch (error) {
                console.error("Error fetching categories:", error.message);
                setCategories([]);
            }
        };

        fetchProducts();
        fetchCategories();
    }, []);
    const getCategoryName = (categoryId) => {
        const category = categories.find((c) => c.id === categoryId);
        return category ? category.name : "Uncategorized";
    };
    const deleteProduct = (e, productId) => {
        e.preventDefault();
    
        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting';
    
        axiosClient.delete(`/admin/delete-product/${productId}`).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success").then(() => {
                    window.location.reload();
                });
                let parentElement = thisClicked.closest("Grid[item]"); 
                if (parentElement) {
                    parentElement.remove();
                }
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                thisClicked.innerText = 'Delete';
            }
        });
    }
    return (
        <>
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    {product.image_url ? (
                                        <CardMedia
                                            component="img"
                                            alt={product.name}
                                            height="140"
                                            src={`${apiUrl}${product.image_url}`}
                                        />
                                    ) : (
                                        <Typography variant="body2">
                                            No Image Available
                                        </Typography>
                                    )}
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {product.name}
                                        </Typography>
                                        <Typography>
                                            {product.description}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            Price: ${product.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            Stock: {product.stock}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            Category:{" "}
                                            {getCategoryName(
                                                product.categoryId
                                            )}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link
                                            to={`/edit-product/${product.id}`}
                                        >
                                            <Button size="small">Edit</Button>
                                        </Link>
                                        <Link>
                                            <Button
                                                size="small"
                                                onClick={(e) => deleteProduct(e, product.id)}
                                            >
                                                Delete
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    );
}
