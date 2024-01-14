
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ProductApi from "../../services/Api/ProductApi";

export default function CreateProducts() {

    const onSumbit = async (values) => {
        console.log(values);
        await ProductApi.create(values).then((values) => {
            if (values.status === 200) {
                //
            }
        }).catch(({response})=>{
            console.log(response);
        });
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Create Product
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
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
                        onSubmit={onSumbit}
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
        </>
    );
}
