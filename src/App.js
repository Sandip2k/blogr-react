import "./App.scss";
import DesignedFuture from "./components/DesignedFuture/DesignedFuture";
import BlogrFrontPage from "./components/BlogrFrontPage/BlogrFrontPage";
import SOTA from "./components/SOTA/SOTA";
import LaptopPart from "./components/LaptopPart/LaptopPart";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <BlogrFrontPage />
            <DesignedFuture />
            <SOTA />
            <LaptopPart />
            <Footer />
        </>
    );
}

export default App;
