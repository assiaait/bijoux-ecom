import React, { Component } from "react";
import CardProduct from "./CardProduct.jsx";
import { Link } from "react-router-dom";

class PartShop extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="">
                    <h1 className="partShop">Luxury Jewelry</h1>
                    <hr />
                    <div className="shop d-flex justify-content-evenly">
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <h4>NEW ARRIVED</h4>
                        </Link>
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <h4>FEATURED</h4>
                        </Link>
                        <Link
                            to="/shop"
                            style={{
                                textDecoration: "none",
                                textTransform: "none",
                            }}
                        >
                            <h4>ON A SALE</h4>
                        </Link>
                    </div>
                    <hr />
                    <div className="container row row-cols-4 gap-3 justify-content-around listProduct">
                        <CardProduct className="col" />
                        <CardProduct className="col" />
                        <CardProduct className="col" />
                        <CardProduct className="col" />
                        <CardProduct className="col" />
                        <CardProduct className="col" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default PartShop;
