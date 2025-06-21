import { useContext } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { GlobalContext } from "../../Context/GlobalContext";
import { Outlet } from "react-router-dom";

function HomeLayout() {

    const { user } = useContext(GlobalContext);

    return (
        <div className="flex min-h-screen dark:text-gray-300 dark:bg-[#1F1F1F]">
            <Sidebar />
            <div className="z-10 w-full">
                <Outlet />
            </div>
        </div>
    );
}

export default HomeLayout;