import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ProductApi from "../../services/Api/ProductApi";
import { Box } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function CreateProducts() {
    const [successMessage, setSuccessMessage] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const stock = event.target.elements.stock.value;
        const description = event.target.elements.description.value;

        // Vérifier que les champs requis sont renseignés
        if (!name || !description) {
            console.error("Les champs 'name' et 'description' sont requis.");
            // Afficher un message d'erreur ou effectuer d'autres actions
            return;
        }

        // Créer l'objet de données à envoyer
        const data = {
            name,
            price,
            stock,
            description,
        };

        try {
            // Envoyer la requête avec les données
            const response = await ProductApi.create(data);
            console.log(response.data);
            setSuccessMessage("Product created successfully!");
            setOpen(true);
            setTimeout(() => {
                setSuccessMessage(null);
                setOpen(false); // Close the Snackbar
            }, 5000);
            event.target.reset();
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
    // const onSumbit = async (values) => {
    //     await ProductApi.create(values)
    //         .then(({ status, data }) => {
    //             if (status === 200) {
    //                 console.log(data);
    //             }
    //         })
    //         .catch(({ response }) => {
    //             console.log(response);
    //         });
    // };

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
                <Grid container spacing={3} m={3}>
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
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="price"
                            name="price"
                            type="price"
                            label="price"
                            fullWidth
                            autoComplete="given price"
                            variant="standard"
                            inputProps={{
                                type: "number",
                                pattern: "[0-9]*",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="stock"
                            name="stock"
                            type="stock"
                            label="Stock"
                            fullWidth
                            autoComplete="given stock"
                            variant="standard"
                            inputProps={{
                                type: "number",
                                pattern: "[0-9]*",
                            }}
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
                        />
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
