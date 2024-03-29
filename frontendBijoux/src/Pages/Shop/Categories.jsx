// import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Earring from "../../img/earrings.png";
import Bracelets from "../../img/bracelets.png";
import Rings from "../../img/ring.png";
import Pendants from "../../img/pendant.png";
import Necklages from "../../img/necklage.png";
import { Link } from "react-router-dom";

export default function ColumnsGrid() {
    return (
        <div className=" cardCategorie">
            <div style={{ flexGrow: 1 }}>
                <Grid className="" container spacing={2} columns={16}>
                    <Grid item xs={4}>
                        <div
                            style={{
                                backgroundColor: "#fff",
                                marginRight: "10px",
                                height: "20vh",
                                transition: "all .3s",
                            }}
                        >
                            <h4
                                style={{
                                    color: "#34513F",
                                    fontSize: "18px",
                                    textTransform: "uppercase",
                                    lineHeight: " 26px",
                                    letterSpacing: "2px",
                                    textAlign: "left",
                                    paddingTop: "30px",
                                    paddingBottom: "10px",
                                }}
                            >
                                Discover a world <br /> of jewellery
                            </h4>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <div style={{ height: "20vh" }}>
                                <img
                                    src={Earring}
                                    style={{
                                        paddingTop: "10px",
                                        transition: "all .3s",
                                    }}
                                    width="80"
                                    height="60"
                                    alt=""
                                />
                                <h6
                                    style={{
                                        color: "#34513F",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        letterSpacing: "2px",
                                        marginTop: "25px",
                                    }}
                                >
                                    Earrings
                                </h6>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <div style={{ height: "20vh" }}>
                                <img
                                    src={Necklages}
                                    style={{ paddingTop: "10px" }}
                                    width="80"
                                    height="60"
                                    alt=""
                                />
                                <h6
                                    style={{
                                        color: "#34513F",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        letterSpacing: "2px",
                                        marginTop: "25px",
                                    }}
                                >
                                    Necklages
                                </h6>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <div style={{ height: "20vh" }}>
                                <img
                                    src={Bracelets}
                                    width="80"
                                    height="60"
                                    alt=""
                                />
                                <h6
                                    style={{
                                        color: "#34513F",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        letterSpacing: "2px",
                                        marginTop: "25px",
                                    }}
                                >
                                    Bracelets
                                </h6>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <div style={{ height: "20vh" }}>
                                <img
                                    src={Rings}
                                    width="80"
                                    height="60"
                                    alt=""
                                />
                                <h6
                                    style={{
                                        color: "#34513F",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        letterSpacing: "2px",
                                        marginTop: "25px",
                                    }}
                                >
                                    Rings
                                </h6>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <div style={{ height: "20vh" }}>
                                <img
                                    src={Pendants}
                                    style={{ paddingTop: "10px" }}
                                    width="80"
                                    height="60"
                                    alt=""
                                />
                                <h6
                                    style={{
                                        color: "#34513F",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        letterSpacing: "2px",
                                        marginTop: "25px",
                                    }}
                                >
                                    Pendants
                                </h6>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
