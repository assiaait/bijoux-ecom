import React, { useEffect, useState } from "react";
import { PhoneAndroid } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Logo from "../../img/Logo-1.png";
import { Link, useLocation } from "react-router-dom";
import ClientApi from "../../services/Api/Client/ClientApi";

function Header2({ cart, setCart }) {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  const fetchCartCount = async () => {
    try {
      const cartResponse = await ClientApi.getCartItemCount();
      setCartCount(cartResponse.data.cart_count);
    } catch (error) {
      console.error("Error fetching cart count:", error.message);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, [location.pathname]);

  return (
    <div>
      <div className="container pt-3 mb-5">
        <div className="d-flex column justify-content-between">
          <div className="row">
            <a
              className="title text-decoration-none mt-4"
              href="tel:+212630012546"
              style={{
                color: "#34513f",
                textAlign: "center",
              }}
            >
              <PhoneAndroid />
              <p className="title pt-1">+212630012546</p>
            </a>
          </div>
          <Link to="/">
            <img src={Logo} width="80" alt="Logo" />
          </Link>
          <div className="d-flex column ">
            <div className="pe-5">
              <Link
                className="title1 text-decoration-none pt-3 "
                style={{
                  color: "#34513f",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FavoriteBorderIcon />
                <p className="title pt-1">WishList</p>
              </Link>
            </div>
            <div>
              <Link
                className="title text-decoration-none pt-3"
                to="/cart"
                style={{
                  color: "#34513f",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ShoppingBagOutlinedIcon />
                <p className="title pt-1">Cart({cartCount})</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
