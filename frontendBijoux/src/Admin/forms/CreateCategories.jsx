import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ProductApi from "../../services/Api/ProductApi";
import { Box } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

export default function CreateCategories() {
    const [successMessage, setSuccessMessage] = useState(null);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: null,
    });
    const [messageChangedImage, setMessageChangedImage]=useState()

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

    const onSubmit = async (event) => {
        event.preventDefault();
        const { name, description, image } = formData;

        console.log("Name:", name);
        console.log("Description:", description);
        // Vérifier que les champs requis sont renseignés
        if (!name || !description) {
            console.error("Les champs 'name' et 'description' sont requis.");
            // Afficher un message d'erreur ou effectuer d'autres actions
            return;
        }

        // Créer l'objet de données à envoyer
        const formDataToSend = new FormData();

        // Append data from the existing formData state
        formDataToSend.append("name", name);
        formDataToSend.append("description", description);
        formDataToSend.append("image", image);

        try {
            // Envoyer la requête avec les données
            const response = await ProductApi.createCategories(formDataToSend);
            console.log(response.data);
            setSuccessMessage("Categories created successfully!");
            setOpen(true);

            setFormData({
                name: "",
                description: "",
                image: "",
            });

            setTimeout(() => {
                setSuccessMessage(null);
                setOpen(false); // Close the Snackbar
            }, 5000);
        } catch (error) {
            if (error.response) {
                console.log(
                    "Réponse du serveur avec des erreurs de validation :",
                    error.response.data.errors
                );
                // Afficher des messages d'erreur à l'utilisateur ou effectuer d'autres actions
            } else {
                console.error(
                    "Erreur inattendue lors de la création du produit :",
                    error.message
                );
            }
        }
    };

    return (
        <form onSubmit={onSubmit}>
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
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
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
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
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
                            <p>
                                {messageChangedImage}
                            </p>
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
                            CREATE
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
}
