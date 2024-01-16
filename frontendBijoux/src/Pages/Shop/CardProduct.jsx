import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    handleAddToCart = () => {
        // Add your "Add to Cart" logic here
        console.log("Product added to cart!");
    };

    render() {
        const { isHovered } = this.state;

        return (
            <div
                className={`cardProduct ${isHovered ? "hovered" : ""}`}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="product d-flex justify-content-between">
                    <span>-40%</span>
                    <h6 className="pt-1 px-1" style={{ color: "#ffffff" }}>
                        Out Of Stock
                    </h6>
                </div>
                <div className="pt-3">
                    <h6>W CARAT AQUAMARINE AND DIAMOND</h6>
                    <div className="d-flex column prix ">
                        <p className="">$90.00</p>
                    </div>
                </div>
                {isHovered && (
                    <Link to="/checkout">
                        <button
                            className="add-to-cart-button btn-cart-add"
                            onClick={this.handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </Link>
                )}
            </div>
        );
    }
}

export default CardProduct;
