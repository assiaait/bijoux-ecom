import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid, Typography } from "@mui/material";
import CreateProducts from "./forms/CreateProducts";
import ListProducts from "./ListProduct";


export default function ManageProducts() {
const [currentView, setCurrentView] = useState("list");
const handleViewChange = (view) => {
    setCurrentView(view);
};
    return (
        <>
            <>
                <ButtonGroup
                    color="secondary"
                    aria-label="medium secondary button group"
                >
                    <Button
                        onClick={() => handleViewChange("list")}
                        variant={
                            currentView === "list" ? "contained" : "outlined"
                        }
                    >
                        List Products
                    </Button>
                    <Button
                        onClick={() => handleViewChange("create")}
                        variant={
                            currentView === "create" ? "contained" : "outlined"
                        }
                    >
                        Create Products
                    </Button>
                </ButtonGroup>
            </>
            <Typography variant="h6" gutterBottom>
                {currentView === "list" ? "List Products" : "Create Product"}
            </Typography>
            <Grid container spacing={3}>
                {currentView === "list" ? <ListProducts /> : <CreateProducts />}
            </Grid>
        </>
    );
}
