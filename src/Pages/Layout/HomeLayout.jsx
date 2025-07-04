import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Outlet } from "react-router-dom";
import DesktopSidebar from "../../Components/Sidebar/DesktopSidebar/DesktopSidebar";

function HomeLayout() {

    const { user } = useContext(GlobalContext);

    return (
        <div className="flex min-h-screen dark:text-gray-300 text-[#3e3e3e] dark:bg-[#1F1F1F]">
            <DesktopSidebar />
            <div className="z-10 w-full">
                <Outlet />
            </div>
        </div>
    );
}

export default HomeLayout;