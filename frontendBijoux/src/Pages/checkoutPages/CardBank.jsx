import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

export default function CardBank() {
    const [formData, setFormData] = React.useState({
        payment: " ",
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form>
            <FormControl sx={{ m: 3 }} variant="standard">
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleChange}
                    style={{ fontWeight: "600", color: "#181818" }}
                    defaultValue=""
                >
                    {/* Your RadioButtons go here */}
                </RadioGroup>
                <FormHelperText
                    style={{
                        fontFamily: "Uchen Regular",
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        lineHeight: "1.75",
                        color: "#868686",
                        textAlign: "left",
                    }}
                >
                    {formData.payment}
                </FormHelperText>
            </FormControl>
        </form>
    );
}
