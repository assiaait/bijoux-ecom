import { Outlet, useNavigate } from "react-router-dom";
import "../index.css";
import Header1 from "../Pages/Home/Header1";
import Header2 from "../Pages/Home/Header2";
import Footer from "../Pages/Home/Footer";
import { useEffect } from "react";
import { CLIENT_HOME_ROUTE } from "../router";
import { useUserContext } from "../context/UserContext";

export default function GuestLayout() {
    const navigate = useNavigate('')
    const context = useUserContext()

    useEffect(()=>{
        if(context.authenticated){
            navigate(CLIENT_HOME_ROUTE)
    }
    });
    return (
        <>
            <header>
                <Header1/>
                <Header2/>
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
