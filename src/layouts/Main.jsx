import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import TopBar from "../pages/Shared/TopBar";
import Footer from "../pages/Shared/Footer";



const Main = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <div>
            {isHomePage && <TopBar />}
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;