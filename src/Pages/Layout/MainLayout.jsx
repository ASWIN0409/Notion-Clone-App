import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function MainLayout() {
    return (
        <>
            <Header />
            <main className="w-[90vw] mx-auto h-full">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;