import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import FlatwareOutlinedIcon from '@mui/icons-material/FlatwareOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AutoDeleteOutlinedIcon from '@mui/icons-material/AutoDeleteOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SidebarButton from "../Button/SidebarButton";


function Sidebar() {

    const { user } = useContext(GlobalContext);
    const [profileToggle, setProfileToggle] = useState(false);

    const [sidebarWidth, setSidebarWidth] = useState(300);
    const sidebarResizingRef = useRef(false);

    const navigate = useNavigate();

    function handleClick() {
        setProfileToggle(!profileToggle);
    }

    function handleMouseDown() {
        sidebarResizingRef.current = true;
    }

    function handleMouseMove(e) {
        if (!sidebarResizingRef.current) return;
        setSidebarWidth(Math.min(Math.max(300, e.clientX), 500));
    }

    function handleMouseUp() {
        sidebarResizingRef.current = false;
    }

    useEffect(() => {

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

    }, [])


    return (
        <div className="relative w-full dark:text-white dark:bg-black bg-gray-50" style={{ width: `${sidebarWidth}px` }}>

            <div
                onMouseDown={handleMouseDown}
                className="absolute right-0 h-full border-r-4 border-gray-400 hover:cursor-ew-resize">
            </div>

            <div >

                {/* 1st section  */}
                <div className="flex justify-start gap-3 p-2 mx-2 my-1 rounded-md cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-200">
                    <div onClick={handleClick} className="h-7 text-center border-[3px] bg-gray-300 rounded-md w-7">{`${user?.displayName?.charAt(0).toUpperCase()}`}</div>
                    {profileToggle && <ProfileDropdown />}
                    <h4 className="font-bold">{`${user?.displayName}'s Notion`}</h4>
                </div>
                <SidebarButton
                    onClick={() => navigate("/home")}
                    icon={SearchIcon}
                    className="text-gray-600"
                    text="Search"
                />
                <SidebarButton
                    onClick={() => navigate("/home")}
                    icon={HomeIcon}
                    className="text-gray-600"
                    text="Home"
                />
                <SidebarButton
                    onClick={() => navigate("inbox")}
                    icon={MailIcon}
                    className="text-gray-600"
                    text="Inbox"
                />

                {/* 2nd section  */}
                <div
                    className="flex justify-between gap-2 p-2 mx-2 my-1 font-light text-gray-600 rounded-md cursor-pointer dark:text-white dark:hover:bg-gray-700 text-md hover:bg-gray-200 ">
                    <div>Private</div>
                </div>

                <SidebarButton
                    onClick={() => navigate("welcome")}
                    icon={WavingHandOutlinedIcon}
                    className="text-yellow-400 "
                    text="Welcome to Notion!"
                />
                <SidebarButton
                    onClick={() => navigate("todo")}
                    icon={NoteAddOutlinedIcon}
                    className="text-blue-600"
                    text="To-do List"
                />
                <SidebarButton
                    onClick={() => navigate("books")}
                    icon={MenuBookOutlinedIcon}
                    className="text-red-600"
                    text="Reading List"
                />
                <SidebarButton
                    onClick={() => navigate("meals")}
                    icon={FlatwareOutlinedIcon}
                    className="text-green-600"
                    text="Meal Planner"
                />
                <SidebarButton
                    onClick={() => navigate("coins")}
                    icon={CurrencyBitcoinIcon}
                    className="text-yellow-900"
                    text="Crypto Currency"
                />
                <hr className="my-3" />

                {/* 3rd section  */}
                <SidebarButton
                    onClick={() => navigate("settings")}
                    icon={SettingsOutlinedIcon}
                    className="text-gray-600"
                    text="Settings"
                />
                <SidebarButton
                    icon={CategoryOutlinedIcon}
                    className="text-gray-600"
                    text="Templates"
                />
                <SidebarButton
                    onClick={() => navigate("trash")}
                    icon={AutoDeleteOutlinedIcon}
                    className="text-gray-600"
                    text="Trash"
                />

                <div className="absolute bottom-0 flex justify-between w-full h-12 p-2 border-t-2 border-gray-200">
                    <div className="flex gap-3">
                        <CalendarMonthOutlinedIcon className="hover:text-green-600" />
                        <TelegramIcon className="hover:text-blue-300" />
                    </div>
                    <HelpOutlineIcon className="hover:text-red-300" />
                </div>

            </div>

        </div>
    );
}

export default Sidebar;