import { useEffect, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import CardBank from "./CardBank";
import { axiosClient } from "../../api/axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import OrderApi from "../../services/Api/OrderApi";

function Checkout() {
    const [successMessage, setSuccessMessage] = useState(null);
    const [cart, setCart] = useState([]);
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    var totalCartPrice = 0;
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        companyname: "",
        streetaddress: "",
        streetaddressoptional: "",
        city: "",
        state_contry: "",
        zip: "",
        phone: "",
        email: "",
        ordernotes: "",
    });
    const [shippingType, setShippingType] = useState("flat");

    // Update the state when the user selects a shipping option
    const handleShippingTypeChange = (event) => {
        setShippingType(event.target.value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const {
                firstname,
                lastname,
                companyname,
                streetaddress,
                streetaddressoptional,
                city,
                state_contry,
                zip,
                phone,
                email,
                ordernotes,
                shipping_type,
            } = formData;

            // Create FormData object and append data
            const formDataToSend = new FormData();
            formDataToSend.append("firstname", firstname);
            formDataToSend.append("lastname", lastname);
            formDataToSend.append("companyname", companyname);
            formDataToSend.append("streetaddress", streetaddress);
            formDataToSend.append(
                "streetaddressoptional",
                streetaddressoptional
            );
            formDataToSend.append("city", city);
            formDataToSend.append("state_contry", state_contry);
            formDataToSend.append("zip", zip);
            formDataToSend.append("phone", phone);
            formDataToSend.append("email", email);
            formDataToSend.append("ordernotes", ordernotes);
            formDataToSend.append("shipping_type", shippingType);

            // Make API call
            const response = await axiosClient.post(
                "/client/place-order",
                formDataToSend
            );

            if (response.data.status === 200) {
                swal(
                    "Order placed successfully",
                    response.data.message,
                    "success"
                );

                // Reset form data
                setFormData({
                    firstname: "",
                    lastname: "",
                    companyname: "",
                    streetaddress: "",
                    streetaddressoptional: "",
                    city: "",
                    state_contry: "",
                    zip: "",
                    phone: "",
                    email: "",
                    ordernotes: "",
                    shipping_type: "",
                });

                // Optionally, you can set success message here or redirect to another page.
            } else if (response.data.status === 422) {
                swal("All fields are mandatory", "", "error");
            } else {
                swal(
                    "Failed to place order",
                    response.data.message || "Unknown error",
                    "error"
                );
            }
        } catch (error) {
            console.error("Error submitting order:", error);
            swal("Error", "Failed to place order. Please try again.", "error");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            let isMounted = true;
            try {
                const res = await axiosClient.get("/client/cart");
                if (isMounted) {
                    if (
                        res.data &&
                        res.data.hasOwnProperty("status") &&
                        res.data.hasOwnProperty("cart")
                    ) {
                        if (res.data.status === 200) {
                            setCart(res.data.cart);
                        } else if (res.data.status === 401) {
                            const errorMessage =
                                res.data.message || "Unauthorized";
                            swal("Warning", errorMessage, "error");
                        } else {
                            console.error("Invalid response format:", res);
                        }
                    } else {
                        console.error("Invalid response format:", res);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                isMounted && (isMounted = false);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            style={{ width: "100vw", paddingLeft: "5vw", paddingBottom: "5vh" }}
        >
            <h1
                style={{
                    textAlign: "center",
                    paddingRight: "5vw",
                    fontSize: "34px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    letterSpacing: "0.04em",
                }}
            >
                Checkout
            </h1>
            <div className="d-flex">
                <div
                    className="d-flex me-5 justify-content-center align-items-center"
                    style={{
                        width: "42vw",
                        height: "10vh",
                        background: "#F2F2F2",
                        textAlign: "center",
                        color: "#181818",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                    }}
                >
                    <PermIdentityIcon />
                    <p className="pt-3 px-2" style={{ color: "#868686" }}>
                        RETURNING CUSTOMER?{" "}
                    </p>
                    <Link style={{ color: "#181818", textDecoration: "none" }}>
                        {" "}
                        CLICK HERE TO LOGIN{" "}
                    </Link>
                </div>
                <div
                    className="d-flex ms-5 justify-content-center align-items-center"
                    style={{
                        width: "42vw",
                        height: "10vh",
                        background: "#F2F2F2",
                        textAlign: "center",
                        color: "#181818",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "600",
                    }}
                >
                    <ConfirmationNumberOutlinedIcon />
                    <p className="pt-3 px-2" style={{ color: "#868686" }}>
                        HAVE A COUPON?{" "}
                    </p>
                    <Link
                        href="#"
                        style={{ color: "#181818", textDecoration: "none" }}
                    >
                        {" "}
                        CLICK HERE TO ENTER YOUR CODE{" "}
                    </Link>
                </div>
            </div>
            <div className="d-flex mt-5">
                <div className="articleCheckout" style={{ width: "55vw" }}>
                    <h3
                        style={{
                            fontSize: "24px",
                            fontWeight: "500",
                            lineHeight: "1.2",
                            color: "#000",
                        }}
                    >
                        Billing details
                    </h3>
                    <FormGroup>
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            First name{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            required
                            id="firstname"
                            name="firstname"
                            type="name"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            value={formData.firstname}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    firstname: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Last name{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            id="lastname"
                            variant="standard"
                            name="lastname"
                            fullWidth
                            autoComplete="given-name"
                            type="name"
                            value={formData.lastname}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    lastname: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Company name (optional)
                        </label>
                        <TextField
                            id="companyname"
                            variant="standard"
                            name="companyname"
                            type="text"
                            fullWidth
                            autoComplete="given-name"
                            value={formData.companyname}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    companyname: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Country / Region{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 750 }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                >
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.label} ({option.code}) +
                                    {option.phone}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password", // disable autocomplete and autofill
                                    }}
                                    variant="standard"
                                />
                            )}
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Street address{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            className="mt-4"
                            id="streetaddress"
                            variant="standard"
                            placeholder="House number and street name"
                            name="streetaddress"
                            type="text"
                            fullWidth
                            autoComplete="given-name"
                            value={formData.streetaddress}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    streetaddress: e.target.value,
                                })
                            }
                        />
                        <TextField
                            className="mt-5"
                            id="streetaddressoptional"
                            variant="standard"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            name="streetaddressoptional"
                            type="text"
                            value={formData.streetaddressoptional}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    streetaddressoptional: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Town / City{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            id="standard-hidden-label-normal"
                            variant="standard"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    city: e.target.value,
                                })
                            }
                        />

                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            State / County{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            id="standard-hidden-label-normal"
                            variant="standard"
                            name="state_contry"
                            type="text"
                            value={formData.state_contry}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    state_contry: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Postcode / ZIP{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            id="standard-hidden-label-normal"
                            variant="standard"
                            name="zip"
                            type="text"
                            value={formData.zip}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    zip: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Phone{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            id="standard-hidden-label-normal"
                            variant="standard"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Email address{" "}
                            <span
                                style={{
                                    borderBottom: "1px dotted #ff0000",
                                    color: "#ff0000",
                                }}
                            >
                                *{" "}
                            </span>
                        </label>
                        <TextField
                            id="standard-hidden-label-normal"
                            variant="standard"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        <label
                            className="mt-5"
                            htmlFor="firstName"
                            style={{ fontWeight: "700" }}
                        >
                            Order notes (optional)
                        </label>
                        <textarea
                            className="mt-4"
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            id="standard-hidden-label-normal"
                            variant="standard"
                            style={{
                                border: "0",
                                borderBottom: "1px solid #181818",
                                outline: "none",
                            }}
                            name="ordernotes"
                            type="text"
                            value={formData.ordernotes}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    ordernotes: e.target.value,
                                })
                            }
                        ></textarea>
                    </FormGroup>
                </div>
                <div
                    className="asideCheckout ms-5 px-5"
                    style={{
                        width: "30vw",
                        border: "2px solid #181818",
                        height: "180vh",
                    }}
                >
                    <h3
                        className="mt-3"
                        style={{
                            fontSize: "26px",
                            color: "#000",
                            fontWeight: 400,
                            fontFamily: "Uchen Regular",
                            lineHeight: "1.75",
                        }}
                    >
                        Product
                    </h3>
                    {cart.map((item, idx) => {
                        totalCartPrice += item.product.price * item.product_qty;

                        return (
                            <div
                                className="d-flex justify-content-between mt-5"
                                key={idx}
                            >
                                <div className="d-flex column">
                                    <img
                                        src={`${apiUrl}${item.product.image_url}`}
                                        width="55"
                                        height="55"
                                        style={{ border: "1px solid #e8e8e8" }}
                                        alt=""
                                    />
                                    <div
                                        style={{
                                            paddingLeft: "10px",
                                            color: "#000",
                                            textTransform: "uppercase",
                                            wordBreak: "break-word",
                                            fontSize: "12px",
                                        }}
                                    >
                                        <p>{item.product.name}</p>
                                        <strong>
                                            QTY : {item.product_qty}
                                        </strong>
                                    </div>
                                </div>
                                <p
                                    style={{
                                        fontFamily: "Uchen Regular",
                                        fontSize: "0.75rem",
                                        fontWeight: "500",
                                        lineHeight: "1.75",
                                        color: "#868686",
                                        textAlign: "left",
                                    }}
                                >
                                    {item.product.price * item.product_qty} MAD
                                </p>
                            </div>
                        );
                    })}

                    <hr className="mt-5 mb-4" />
                    <div className="d-flex justify-content-between">
                        <p
                            style={{
                                fontWeight: "600",
                                lineHeight: " 1.2",
                                color: "#000",
                                fontSize: "14px",
                            }}
                        >
                            Subtotal
                        </p>
                        <p
                            style={{
                                fontFamily: "Uchen Regular",
                                fontSize: "1rem",
                                fontWeight: "500",
                                lineHeight: "1.75",
                                color: "#868686",
                                textAlign: "left",
                            }}
                        >
                            {totalCartPrice} MAD
                        </p>
                    </div>
                    <hr className="mt-3 mb-4" />
                    <div className="d-flex justify-content-between">
                        <p
                            style={{
                                fontWeight: "600",
                                lineHeight: " 1.2",
                                color: "#000",
                                fontSize: "14px",
                            }}
                        >
                            Shipping
                        </p>
                        <div>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="freeShipping"
                                name="radio-buttons-group"
                                style={{
                                    fontSize: "0.75rem",
                                    fontWeight: "400",
                                    lineHeight: "1.75",
                                    cursor: "pointer",
                                    color: "#868686",
                                    textAlign: "left",
                                }}
                                value={shippingType}
                                onChange={handleShippingTypeChange}
                            >
                                <FormControlLabel
                                    value="free"
                                    control={
                                        <Radio
                                            size="small"
                                            sx={{
                                                color: "#181818",
                                                "&.Mui-checked": {
                                                    color: "#181818",
                                                },
                                            }}
                                        />
                                    }
                                    label="Free Shipping"
                                />
                                <FormControlLabel
                                    value="flat"
                                    control={
                                        <Radio
                                            size="small"
                                            sx={{
                                                color: "#181818",
                                                "&.Mui-checked": {
                                                    color: "#181818",
                                                },
                                            }}
                                        />
                                    }
                                    label="Flat Rate"
                                />
                            </RadioGroup>
                        </div>
                    </div>
                    <hr className="mt-3 mb-4" />
                    <div className="d-flex justify-content-between">
                        <p
                            style={{
                                fontWeight: "600",
                                lineHeight: " 1.2",
                                color: "#000",
                                fontSize: "14px",
                            }}
                        >
                            Total
                        </p>
                        <p
                            style={{
                                fontFamily: "Uchen Regular",
                                fontSize: "1rem",
                                fontWeight: "400",
                                lineHeight: "1.75",
                                color: "#868686",
                                textAlign: "left",
                            }}
                        >
                            {totalCartPrice} MAD
                        </p>
                    </div>
                    <div
                        style={{
                            padding: "20px",
                            border: "1px solid #d9d9d9",
                            marginBottom: "30px",
                        }}
                    >
                        <CardBank className="mt-3" />
                    </div>
                    <button
                        style={{
                            color: "#fff",
                            background: "#000",
                            fontsize: "14px",
                            textTransform: "uppercase",
                            padding: " 0 50px",
                            lineHeight: "70px",
                            cursor: "pointer",
                            border: "0",
                            width: "100%",
                            fontWeight: "400",
                            letterSpacing: ".1em",
                        }}
                        onClick={onSubmit}
                    >
                        Place order
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Checkout;
const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
        code: "AE",
        label: "United Arab Emirates",
        phone: "971",
    },
    { code: "AF", label: "Afghanistan", phone: "93" },
    {
        code: "AG",
        label: "Antigua and Barbuda",
        phone: "1-268",
    },
    { code: "AI", label: "Anguilla", phone: "1-264" },
    { code: "AL", label: "Albania", phone: "355" },
    { code: "AM", label: "Armenia", phone: "374" },
    { code: "AO", label: "Angola", phone: "244" },
    { code: "AQ", label: "Antarctica", phone: "672" },
    { code: "AR", label: "Argentina", phone: "54" },
    { code: "AS", label: "American Samoa", phone: "1-684" },
    { code: "AT", label: "Austria", phone: "43" },
    {
        code: "AU",
        label: "Australia",
        phone: "61",
        suggested: true,
    },
    { code: "AW", label: "Aruba", phone: "297" },
    { code: "AX", label: "Alland Islands", phone: "358" },
    { code: "AZ", label: "Azerbaijan", phone: "994" },
    {
        code: "BA",
        label: "Bosnia and Herzegovina",
        phone: "387",
    },
    { code: "BB", label: "Barbados", phone: "1-246" },
    { code: "BD", label: "Bangladesh", phone: "880" },
    { code: "BE", label: "Belgium", phone: "32" },
    { code: "BF", label: "Burkina Faso", phone: "226" },
    { code: "BG", label: "Bulgaria", phone: "359" },
    { code: "BH", label: "Bahrain", phone: "973" },
    { code: "BI", label: "Burundi", phone: "257" },
    { code: "BJ", label: "Benin", phone: "229" },
    { code: "BL", label: "Saint Barthelemy", phone: "590" },
    { code: "BM", label: "Bermuda", phone: "1-441" },
    { code: "BN", label: "Brunei Darussalam", phone: "673" },
    { code: "BO", label: "Bolivia", phone: "591" },
    { code: "BR", label: "Brazil", phone: "55" },
    { code: "BS", label: "Bahamas", phone: "1-242" },
    { code: "BT", label: "Bhutan", phone: "975" },
    { code: "BV", label: "Bouvet Island", phone: "47" },
    { code: "BW", label: "Botswana", phone: "267" },
    { code: "BY", label: "Belarus", phone: "375" },
    { code: "BZ", label: "Belize", phone: "501" },
    {
        code: "CA",
        label: "Canada",
        phone: "1",
        suggested: true,
    },
    {
        code: "CC",
        label: "Cocos (Keeling) Islands",
        phone: "61",
    },
    {
        code: "CD",
        label: "Congo, Democratic Republic of the",
        phone: "243",
    },
    {
        code: "CF",
        label: "Central African Republic",
        phone: "236",
    },
    {
        code: "CG",
        label: "Congo, Republic of the",
        phone: "242",
    },
    { code: "CH", label: "Switzerland", phone: "41" },
    { code: "CI", label: "Cote d'Ivoire", phone: "225" },
    { code: "CK", label: "Cook Islands", phone: "682" },
    { code: "CL", label: "Chile", phone: "56" },
    { code: "CM", label: "Cameroon", phone: "237" },
    { code: "CN", label: "China", phone: "86" },
    { code: "CO", label: "Colombia", phone: "57" },
    { code: "CR", label: "Costa Rica", phone: "506" },
    { code: "CU", label: "Cuba", phone: "53" },
    { code: "CV", label: "Cape Verde", phone: "238" },
    { code: "CW", label: "Curacao", phone: "599" },
    { code: "CX", label: "Christmas Island", phone: "61" },
    { code: "CY", label: "Cyprus", phone: "357" },
    { code: "CZ", label: "Czech Republic", phone: "420" },
    {
        code: "DE",
        label: "Germany",
        phone: "49",
        suggested: true,
    },
    { code: "DJ", label: "Djibouti", phone: "253" },
    { code: "DK", label: "Denmark", phone: "45" },
    { code: "DM", label: "Dominica", phone: "1-767" },
    {
        code: "DO",
        label: "Dominican Republic",
        phone: "1-809",
    },
    { code: "DZ", label: "Algeria", phone: "213" },
    { code: "EC", label: "Ecuador", phone: "593" },
    { code: "EE", label: "Estonia", phone: "372" },
    { code: "EG", label: "Egypt", phone: "20" },
    { code: "EH", label: "Western Sahara", phone: "212" },
    { code: "ER", label: "Eritrea", phone: "291" },
    { code: "ES", label: "Spain", phone: "34" },
    { code: "ET", label: "Ethiopia", phone: "251" },
    { code: "FI", label: "Finland", phone: "358" },
    { code: "FJ", label: "Fiji", phone: "679" },
    {
        code: "FK",
        label: "Falkland Islands (Malvinas)",
        phone: "500",
    },
    {
        code: "FM",
        label: "Micronesia, Federated States of",
        phone: "691",
    },
    { code: "FO", label: "Faroe Islands", phone: "298" },
    {
        code: "FR",
        label: "France",
        phone: "33",
        suggested: true,
    },
    { code: "GA", label: "Gabon", phone: "241" },
    { code: "GB", label: "United Kingdom", phone: "44" },
    { code: "GD", label: "Grenada", phone: "1-473" },
    { code: "GE", label: "Georgia", phone: "995" },
    { code: "GF", label: "French Guiana", phone: "594" },
    { code: "GG", label: "Guernsey", phone: "44" },
    { code: "GH", label: "Ghana", phone: "233" },
    { code: "GI", label: "Gibraltar", phone: "350" },
    { code: "GL", label: "Greenland", phone: "299" },
    { code: "GM", label: "Gambia", phone: "220" },
    { code: "GN", label: "Guinea", phone: "224" },
    { code: "GP", label: "Guadeloupe", phone: "590" },
    { code: "GQ", label: "Equatorial Guinea", phone: "240" },
    { code: "GR", label: "Greece", phone: "30" },
    {
        code: "GS",
        label: "South Georgia and the South Sandwich Islands",
        phone: "500",
    },
    { code: "GT", label: "Guatemala", phone: "502" },
    { code: "GU", label: "Guam", phone: "1-671" },
    { code: "GW", label: "Guinea-Bissau", phone: "245" },
    { code: "GY", label: "Guyana", phone: "592" },
    { code: "HK", label: "Hong Kong", phone: "852" },
    {
        code: "HM",
        label: "Heard Island and McDonald Islands",
        phone: "672",
    },
    { code: "HN", label: "Honduras", phone: "504" },
    { code: "HR", label: "Croatia", phone: "385" },
    { code: "HT", label: "Haiti", phone: "509" },
    { code: "HU", label: "Hungary", phone: "36" },
    { code: "ID", label: "Indonesia", phone: "62" },
    { code: "IE", label: "Ireland", phone: "353" },
    { code: "IL", label: "Israel", phone: "972" },
    { code: "IM", label: "Isle of Man", phone: "44" },
    { code: "IN", label: "India", phone: "91" },
    {
        code: "IO",
        label: "British Indian Ocean Territory",
        phone: "246",
    },
    { code: "IQ", label: "Iraq", phone: "964" },
    {
        code: "IR",
        label: "Iran, Islamic Republic of",
        phone: "98",
    },
    { code: "IS", label: "Iceland", phone: "354" },
    { code: "IT", label: "Italy", phone: "39" },
    { code: "JE", label: "Jersey", phone: "44" },
    { code: "JM", label: "Jamaica", phone: "1-876" },
    { code: "JO", label: "Jordan", phone: "962" },
    {
        code: "JP",
        label: "Japan",
        phone: "81",
        suggested: true,
    },
    { code: "KE", label: "Kenya", phone: "254" },
    { code: "KG", label: "Kyrgyzstan", phone: "996" },
    { code: "KH", label: "Cambodia", phone: "855" },
    { code: "KI", label: "Kiribati", phone: "686" },
    { code: "KM", label: "Comoros", phone: "269" },
    {
        code: "KN",
        label: "Saint Kitts and Nevis",
        phone: "1-869",
    },
    {
        code: "KP",
        label: "Korea, Democratic People's Republic of",
        phone: "850",
    },
    { code: "KR", label: "Korea, Republic of", phone: "82" },
    { code: "KW", label: "Kuwait", phone: "965" },
    { code: "KY", label: "Cayman Islands", phone: "1-345" },
    { code: "KZ", label: "Kazakhstan", phone: "7" },
    {
        code: "LA",
        label: "Lao People's Democratic Republic",
        phone: "856",
    },
    { code: "LB", label: "Lebanon", phone: "961" },
    { code: "LC", label: "Saint Lucia", phone: "1-758" },
    { code: "LI", label: "Liechtenstein", phone: "423" },
    { code: "LK", label: "Sri Lanka", phone: "94" },
    { code: "LR", label: "Liberia", phone: "231" },
    { code: "LS", label: "Lesotho", phone: "266" },
    { code: "LT", label: "Lithuania", phone: "370" },
    { code: "LU", label: "Luxembourg", phone: "352" },
    { code: "LV", label: "Latvia", phone: "371" },
    { code: "LY", label: "Libya", phone: "218" },
    { code: "MA", label: "Morocco", phone: "212" },
    { code: "MC", label: "Monaco", phone: "377" },
    {
        code: "MD",
        label: "Moldova, Republic of",
        phone: "373",
    },
    { code: "ME", label: "Montenegro", phone: "382" },
    {
        code: "MF",
        label: "Saint Martin (French part)",
        phone: "590",
    },
    { code: "MG", label: "Madagascar", phone: "261" },
    { code: "MH", label: "Marshall Islands", phone: "692" },
    {
        code: "MK",
        label: "Macedonia, the Former Yugoslav Republic of",
        phone: "389",
    },
    { code: "ML", label: "Mali", phone: "223" },
    { code: "MM", label: "Myanmar", phone: "95" },
    { code: "MN", label: "Mongolia", phone: "976" },
    { code: "MO", label: "Macao", phone: "853" },
    {
        code: "MP",
        label: "Northern Mariana Islands",
        phone: "1-670",
    },
    { code: "MQ", label: "Martinique", phone: "596" },
    { code: "MR", label: "Mauritania", phone: "222" },
    { code: "MS", label: "Montserrat", phone: "1-664" },
    { code: "MT", label: "Malta", phone: "356" },
    { code: "MU", label: "Mauritius", phone: "230" },
    { code: "MV", label: "Maldives", phone: "960" },
    { code: "MW", label: "Malawi", phone: "265" },
    { code: "MX", label: "Mexico", phone: "52" },
    { code: "MY", label: "Malaysia", phone: "60" },
    { code: "MZ", label: "Mozambique", phone: "258" },
    { code: "NA", label: "Namibia", phone: "264" },
    { code: "NC", label: "New Caledonia", phone: "687" },
    { code: "NE", label: "Niger", phone: "227" },
    { code: "NF", label: "Norfolk Island", phone: "672" },
    { code: "NG", label: "Nigeria", phone: "234" },
    { code: "NI", label: "Nicaragua", phone: "505" },
    { code: "NL", label: "Netherlands", phone: "31" },
    { code: "NO", label: "Norway", phone: "47" },
    { code: "NP", label: "Nepal", phone: "977" },
    { code: "NR", label: "Nauru", phone: "674" },
    { code: "NU", label: "Niue", phone: "683" },
    { code: "NZ", label: "New Zealand", phone: "64" },
    { code: "OM", label: "Oman", phone: "968" },
    { code: "PA", label: "Panama", phone: "507" },
    { code: "PE", label: "Peru", phone: "51" },
    { code: "PF", label: "French Polynesia", phone: "689" },
    { code: "PG", label: "Papua New Guinea", phone: "675" },
    { code: "PH", label: "Philippines", phone: "63" },
    { code: "PK", label: "Pakistan", phone: "92" },
    { code: "PL", label: "Poland", phone: "48" },
    {
        code: "PM",
        label: "Saint Pierre and Miquelon",
        phone: "508",
    },
    { code: "PN", label: "Pitcairn", phone: "870" },
    { code: "PR", label: "Puerto Rico", phone: "1" },
    {
        code: "PS",
        label: "Palestine, State of",
        phone: "970",
    },
    { code: "PT", label: "Portugal", phone: "351" },
    { code: "PW", label: "Palau", phone: "680" },
    { code: "PY", label: "Paraguay", phone: "595" },
    { code: "QA", label: "Qatar", phone: "974" },
    { code: "RE", label: "Reunion", phone: "262" },
    { code: "RO", label: "Romania", phone: "40" },
    { code: "RS", label: "Serbia", phone: "381" },
    { code: "RU", label: "Russian Federation", phone: "7" },
    { code: "RW", label: "Rwanda", phone: "250" },
    { code: "SA", label: "Saudi Arabia", phone: "966" },
    { code: "SB", label: "Solomon Islands", phone: "677" },
    { code: "SC", label: "Seychelles", phone: "248" },
    { code: "SD", label: "Sudan", phone: "249" },
    { code: "SE", label: "Sweden", phone: "46" },
    { code: "SG", label: "Singapore", phone: "65" },
    { code: "SH", label: "Saint Helena", phone: "290" },
    { code: "SI", label: "Slovenia", phone: "386" },
    {
        code: "SJ",
        label: "Svalbard and Jan Mayen",
        phone: "47",
    },
    { code: "SK", label: "Slovakia", phone: "421" },
    { code: "SL", label: "Sierra Leone", phone: "232" },
    { code: "SM", label: "San Marino", phone: "378" },
    { code: "SN", label: "Senegal", phone: "221" },
    { code: "SO", label: "Somalia", phone: "252" },
    { code: "SR", label: "Suriname", phone: "597" },
    { code: "SS", label: "South Sudan", phone: "211" },
    {
        code: "ST",
        label: "Sao Tome and Principe",
        phone: "239",
    },
    { code: "SV", label: "El Salvador", phone: "503" },
    {
        code: "SX",
        label: "Sint Maarten (Dutch part)",
        phone: "1-721",
    },
    {
        code: "SY",
        label: "Syrian Arab Republic",
        phone: "963",
    },
    { code: "SZ", label: "Swaziland", phone: "268" },
    {
        code: "TC",
        label: "Turks and Caicos Islands",
        phone: "1-649",
    },
    { code: "TD", label: "Chad", phone: "235" },
    {
        code: "TF",
        label: "French Southern Territories",
        phone: "262",
    },
    { code: "TG", label: "Togo", phone: "228" },
    { code: "TH", label: "Thailand", phone: "66" },
    { code: "TJ", label: "Tajikistan", phone: "992" },
    { code: "TK", label: "Tokelau", phone: "690" },
    { code: "TL", label: "Timor-Leste", phone: "670" },
    { code: "TM", label: "Turkmenistan", phone: "993" },
    { code: "TN", label: "Tunisia", phone: "216" },
    { code: "TO", label: "Tonga", phone: "676" },
    { code: "TR", label: "Turkey", phone: "90" },
    {
        code: "TT",
        label: "Trinidad and Tobago",
        phone: "1-868",
    },
    { code: "TV", label: "Tuvalu", phone: "688" },
    {
        code: "TW",
        label: "Taiwan, Province of China",
        phone: "886",
    },
    {
        code: "TZ",
        label: "United Republic of Tanzania",
        phone: "255",
    },
    { code: "UA", label: "Ukraine", phone: "380" },
    { code: "UG", label: "Uganda", phone: "256" },
    {
        code: "US",
        label: "United States",
        phone: "1",
        suggested: true,
    },
    { code: "UY", label: "Uruguay", phone: "598" },
    { code: "UZ", label: "Uzbekistan", phone: "998" },
    {
        code: "VA",
        label: "Holy See (Vatican City State)",
        phone: "379",
    },
    {
        code: "VC",
        label: "Saint Vincent and the Grenadines",
        phone: "1-784",
    },
    { code: "VE", label: "Venezuela", phone: "58" },
    {
        code: "VG",
        label: "British Virgin Islands",
        phone: "1-284",
    },
    {
        code: "VI",
        label: "US Virgin Islands",
        phone: "1-340",
    },
    { code: "VN", label: "Vietnam", phone: "84" },
    { code: "VU", label: "Vanuatu", phone: "678" },
    { code: "WF", label: "Wallis and Futuna", phone: "681" },
    { code: "WS", label: "Samoa", phone: "685" },
    { code: "XK", label: "Kosovo", phone: "383" },
    { code: "YE", label: "Yemen", phone: "967" },
    { code: "YT", label: "Mayotte", phone: "262" },
    { code: "ZA", label: "South Africa", phone: "27" },
    { code: "ZM", label: "Zambia", phone: "260" },
    { code: "ZW", label: "Zimbabwe", phone: "263" },
];
