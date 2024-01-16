import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Contact = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () => {};
    return (
        <div>
            <main
                className="d-flex row justify-content-center mb-5"
                style={{ margin: "auto" }}
            >
                <div style={{ width: "35vw" }}>
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
                        Contact
                    </h1>
                    <div
                        className="d-flex flex-direction-row justify-content-between"
                        style={{
                            marginLeft: "-20vw",
                            marginTop: "30px",
                            width: "80vw",
                            padding: "4vh 10vw",
                            boxShadow:
                                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            textAlign: "center",
                            marginBottom: "30px",
                        }}
                    >
                        <div style={{ marginTop: "20px" }}>
                            <div style={{ textAlign: "center" }}>
                                <h5>Address</h5>
                                <div className="d-flex flex-direction-row">
                                    <LocationOnIcon
                                        style={{ color: "#34513f" }}
                                    />
                                    <p style={{ color: "#6a6a6a" }}>
                                        725 5th Ave, New York, NY 10022, USA
                                    </p>
                                </div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <h5>Phones</h5>
                                <center className="d-flex flex-direction-row">
                                    <PhoneIcon style={{ color: "#34513f" }} />
                                    <p style={{ color: "#6a6a6a" }}>
                                        +212 (6) 30 01 25 46
                                    </p>
                                </center>
                                <div className="d-flex flex-direction-row">
                                    <PhoneIcon style={{ color: "#34513f" }} />
                                    <p style={{ color: "#6a6a6a" }}>
                                        +212 (6) 30 01 25 46
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <div className="d-flex flex-direction-row">
                                    <MailOutlineIcon
                                        style={{ color: "#34513f" }}
                                    />
                                    <p style={{ color: "#6a6a6a" }}>
                                        assia.aitlamalem@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h5>Working Hours</h5>
                                <div className="d-flex flex-direction-row">
                                    <AccessTimeIcon
                                        style={{ color: "#34513f" }}
                                    />
                                    <p style={{ color: "#6a6a6a" }}>
                                        Mon-Fri: 10:00 - 18:00
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h5>Follows Us</h5>
                                <div className="d-flex flex-direction-row">
                                    <FacebookOutlinedIcon
                                        style={{ color: "#34513f" }}
                                    />
                                    <InstagramIcon
                                        style={{ color: "#34513f" }}
                                    />
                                    <WhatsAppIcon
                                        style={{ color: "#34513f" }}
                                    />
                                    <YouTubeIcon style={{ color: "#34513f" }} />
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="mt-4 ">
                                <h5>Send Your Question</h5>
                                <label
                                    className="mb-3"
                                    style={{
                                        color: "#000",
                                        maxWidth: "700px",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                    }}
                                    htmlFor=""
                                >
                                    Your name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        color: "#000",
                                        maxWidth: "400px",
                                        fontSize: "0.8rem",
                                        fontWeight: "600",
                                        borderRadius: "0",
                                    }}
                                    className="p-3 form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mt-3 ">
                                <label
                                    className="mb-3"
                                    style={{
                                        color: "#000",
                                        maxWidth: "700px",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                    }}
                                    htmlFor=""
                                >
                                    Your email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    style={{
                                        color: "#000",
                                        maxWidth: "400px",
                                        fontSize: "0.8rem",
                                        fontWeight: "600",
                                        borderRadius: "0",
                                    }}
                                    className="p-3 form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="mt-3 ">
                                <label
                                    className="mb-3"
                                    style={{
                                        color: "#000",
                                        maxWidth: "700px",
                                        fontSize: "1rem",
                                        fontWeight: "500",
                                    }}
                                    htmlFor=""
                                >
                                    Your message *
                                </label>
                                <textarea
                                    type="text"
                                    name="message"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    style={{
                                        color: "#000",
                                        maxWidth: "400px",
                                        fontSize: "0.8rem",
                                        fontWeight: "600",
                                        borderRadius: "0",
                                    }}
                                    className="p-3 form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <button
                                type="button"
                                className="btn my-3"
                                onClick={submitForm}
                                style={{
                                    width: "400px",
                                    margin: 0,
                                    color: "#fff",
                                    background: "#181818",
                                    border: "none",
                                }}
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <iframe
                        title="Google Maps"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        srcDoc={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.959878915452!2d-7.5898434!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4vYOUR_MAP_API_KEY" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`}
                        loading="lazy"
                    />
                </div>
            </main>
        </div>
    );
};
