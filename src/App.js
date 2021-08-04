import "./App.scss";
import DesignedFuture from "./components/DesignedFuture/DesignedFuture";
import BlogrFrontPage from "./components/BlogrFrontPage/BlogrFrontPage";
import SOTA from "./components/SOTA/SOTA";
import LaptopPart from "./components/LaptopPart/LaptopPart";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import BlogrFrontMobile from "./components/MobileComponents/BlogrFrontPage/BlogrFrontMobile";
import Future from "./components/MobileComponents/Future/Future";
import Laptop from "./components/MobileComponents/Laptop/Laptop";
import FooterMobile from "./components/MobileComponents/Footer/Footer";
import SOTAMobile from "./components/MobileComponents/SOTA/SOTA";

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    let isMobile = width <= 800;
    return (
        <>
            {!isMobile ? (
                <>
                    <BlogrFrontPage />
                    <DesignedFuture />
                    <SOTA />
                    <LaptopPart />
                    <Footer />
                </>
            ) : (
                <>
                    <BlogrFrontMobile />
                    <Future />
                    <SOTAMobile></SOTAMobile>
                    <Laptop />
                    <FooterMobile />
                </>
            )}
        </>
    );
}

export default App;
