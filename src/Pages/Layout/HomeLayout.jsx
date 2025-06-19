import { useContext } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { GlobalContext } from "../../Context/GlobalContext";
import { Outlet } from "react-router-dom";

function HomeLayout() {

    const { user } = useContext(GlobalContext);

    return (
        <div className="flex min-h-screen dark:text-white dark:bg-black">
            <Sidebar />
            <div className="z-0 w-full">
                <Outlet />
            </div>
        </div>
    );
}

export default HomeLayout;