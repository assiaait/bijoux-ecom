import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../index.css";
import Header2 from "../../Pages/Home/Header2";
import Footer from "../../Pages/Home/Footer";
import { useEffect, useState } from "react";
// import { axiosClient } from "../../api/axios";
import { useUserContext } from "../../context/UserContext";
import ClientApi from "../../services/Api/Client/ClientApi";
import { ROUTE_LOGIN } from "../../router";

export default function ClientLayout() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const {
        authenticated,
        setUser,
        setAuthenticated,
        logout: contextLogout,
        user,
    } = useUserContext();
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (authenticated === true) {
            setIsLoading(false)
            ClientApi.getUser()
                .then(({ data }) => {
                    setUser(data);
                    setAuthenticated(true);
                    setCart(data.cart || []);
                })
                .catch((error) => {
                    console.error("Error fetching user:", error);
                    contextLogout();
                });
        } else {
            navigate(ROUTE_LOGIN);
        }
    },[authenticated]);
    const logout = async () => {
        ClientApi.logout().then(() => {
            contextLogout();
            navigate(ROUTE_LOGIN);
        });
    };
    return (
        <>
            <header>
                <div>
                    <div>
                        <div className="d-flex justify-content-between px-5 py-3">
                            <h5 className="title">Welcome TO Shop Jewelry</h5>
                            <ul className="d-flex justify-content-evenly list title">
                                <li>
                                    <Link className="title" to="">
                                        {" "}
                                        Stores{" "}
                                    </Link>
                                </li>
                                <li className="li">
                                    <Link className="title" to="">
                                        Contact
                                    </Link>{" "}
                                </li>
                                <li className="title" onClick={logout}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                </div>
                <Header2 cart={cart} />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
