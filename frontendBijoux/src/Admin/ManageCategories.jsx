import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid, Typography } from "@mui/material";
import CreateProducts from "./forms/CreateProducts";
import ListProducts from "./ListProduct";
import ListCategories from "./ListCategories";
import CreateCategories from "./forms/CreateCategories";


export default function ManageCategories() {
const [currentView, setCurrentView] = useState("list");
const handleViewChange = (view) => {
    setCurrentView(view);
};
const getButtonStyles = (view) => {
    const baseStyles = {
        color: "#fff",
        borderColor: "#34513F",
    };

    if (currentView === view) {
        return {
            ...baseStyles,
            background: `linear-gradient(to bottom, #34513F, #274A37)`,
        };
    } else {
        return {
            ...baseStyles,
            backgroundColor: "#fff",
            color: "#34513F",
        };
    }
};
    return (
        <>
            <>
                <ButtonGroup
                    color="success"
                    aria-label="medium secondary button group"
                >
                    <Button
                        onClick={() => handleViewChange("list")}
                        variant={
                            currentView === "list" ? "contained" : "outlined"
                        }
                        sx={getButtonStyles("list")}
                    >
                        List Categories
                    </Button>
                    <Button
                        onClick={() => handleViewChange("create")}
                        variant={
                            currentView === "create" ? "contained" : "outlined"
                        }
                        sx={getButtonStyles("create")}
                    >
                        Create Categories
                    </Button>
                </ButtonGroup>
            </>
            <Grid container spacing={3}>
                {currentView === "list" ? <ListCategories /> : <CreateCategories />}
            </Grid>
        </>
    );
}
