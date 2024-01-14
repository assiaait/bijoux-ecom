import { Outlet } from "react-router-dom";
import "../index.css";
import Header1 from "../Pages/Home/Header1";
import Header2 from "../Pages/Home/Header2";
import Footer from "../Pages/Home/Footer";

export default function layout() {
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
