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
import axios from "axios"; // Import Axios

export default function ListCategories() {
    const [categories, setCategories] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        // Fetch product data from your API
        const fetchCategories = async () => {
            try {
                const response = await ProductApi.getAllCategories();
                console.log("Response from API:", response);

                if (response.data && Array.isArray(response.data.data)) {
                    setCategories(response.data.data);
                } else {
                    console.error(
                        "Invalid data structure in the API response:",
                        response
                    );
                    setCategories([]);
                }
            } catch (error) {
                console.error("Error fetching products:", error.message);
                setCategories([]);
            }
        };

        fetchCategories();
    }, []);

    return (
        <>
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {categories.map((category) => (
                            <Grid item key={category.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    {category.image_url ? (
                                        <CardMedia
                                            component="img"
                                            alt={category.name}
                                            height="140"
                                            src={`${apiUrl}${category.image_url}`}
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
                                            {category.name}
                                        </Typography>
                                        <Typography>
                                            {category.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={`/edit-category/${category.id}`}>
                                            <Button size="small">Edit</Button>
                                        </Link>
                                        <Link>
                                            <Button size="small">Delete</Button>
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
