import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function CardBank() {
    const [formData, setFormData] = useState({
        payment: "",
    });

    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Open the dialog when the selected payment method is "Cash on delivery"
        if (value === "cashOnDelivery") {
            handleCloseDialog();
        } else if (value === "checkPayments"){
            handleOpenDialog();
        }else if (value === "payPal"){
            handleOpenDialog();
        }else {
            handleCloseDialog();
        }
    };

    return (
        <form>
            <FormControl sx={{ m: 3 }} variant="standard">
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="freeShipping"
                    name="payment"
                    style={{
                        fontSize: "0.75rem",
                        fontWeight: "400",
                        lineHeight: "1.75",
                        cursor: "pointer",
                        color: "#868686",
                        textAlign: "left",
                    }}
                    value={formData.payment}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="checkPayments"
                        control={<Radio size="small" />}
                        label="Check Payments"
                    />
                    <FormControlLabel
                        value="payPal"
                        control={<Radio size="small" />}
                        label="PayPal"
                    />
                    <FormControlLabel
                        value="cashOnDelivery"
                        control={<Radio size="small" />}
                        label="Cash on delivery"
                    />
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

            <Dialog open={open} onClose={handleCloseDialog}>
                <DialogTitle>Enter Email</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To complete the payment, please enter your email address.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button type="submit" onClick={handleCloseDialog}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}

export default CardBank;
