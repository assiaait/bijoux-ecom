import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleAddToCart = () => {
        // Add your "Add to Cart" logic here
        console.log("Product added to cart!");
    };

    return (
        <div
            className={`cardProduct ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="product d-flex justify-content-between">
                <span>-40%</span>
                <h6 className="pt-1 px-1" style={{ color: "#ffffff" }}>
                    Out to stock
                </h6>
            </div>
            <div className="pt-3">
                <h6>{product.name}</h6>
                <div className="d-flex column prix ">
                    <p className="">${product.price}</p>
                </div>
            </div>
            {isHovered && (
                <Link to="/checkout">
                    <button
                        className="add-to-cart-button btn-cart-add"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </Link>
            )}
        </div>
    );
};

export default CardProduct;
