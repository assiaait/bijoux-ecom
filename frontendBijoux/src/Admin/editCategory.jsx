import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { axiosClient } from "../api/axios";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export default function editCategory() {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    const [categoryInput, setCategory] = useState([]);
    const [successMessage, setSuccessMessage] = useState(null);
    const [open, setOpen] = useState(false);

    const [messageChangedImage, setMessageChangedImage] = useState();
    const { categoryId } = useParams();
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setFormData({ ...formData, image: selectedImage });
        console.log("Image changed:", selectedImage);
        setMessageChangedImage(`Image changed: ${selectedImage.name}`);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    useEffect(() => {
        if (categoryId) {
            axiosClient.get(`/admin/edit-category/${categoryId}`)
                .then((res) => {
                    if (res.data.status === 200) {
                        setCategory(res.data.category);
                    } else if (res.data.status === 404) {
                        swal("Error", res.data.message, "error");
                    }
                })
                .catch((error) => {
                    // Handle any other errors
                    console.error("Error fetching category:", error);
                    swal("Error", "An unexpected error occurred", "error");
                });
        } else {
            // Handle the case where categoryId is undefined
            console.log("categoryId is undefined");
        }
    }, [categoryId]);
    
    const handleInput = (e) => {
        e.persist();
        setCategory({ ...categoryInput, [e.target.name]: e.target.value });
    };
    const updateCategory = (e) => {
        e.preventDefault();
        data = categoryInput;
        axiosClient
            .put(`/admin/update-category/${categoryId}`, data)
            .then((res) => {
                if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                }
            });
    };

    return (
        <form onSubmit={updateCategory}>
            <Box>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                    >
                        {successMessage}
                    </Alert>
                </Snackbar>
                <Grid container spacing={3} paddingLeft={3} mt={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            type="name"
                            label="Title"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            value={categoryInput.name}
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            type="description"
                            label="Description"
                            fullWidth
                            autoComplete="description"
                            variant="standard"
                            value={categoryInput.description}
                            onChange={handleInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            component="label"
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                            sx={{
                                backgroundColor: "#34513F",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#274A37", // Change color on hover if desired
                                },
                            }}
                        >
                            Upload file
                            <VisuallyHiddenInput
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e)}
                            />
                        </Button>
                        <p>{messageChangedImage}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <button
                            type="submit"
                            className="btn my-3"
                            style={{
                                margin: 0,
                                color: "#fff",
                                background: "#181818",
                                border: "none",
                                fontSize: "20px",
                            }}
                        >
                            UPDATE
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}
