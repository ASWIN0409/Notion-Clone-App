import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import SidebarButton from "../Button/SidebarButton";
import { useNavigate } from "react-router-dom";
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
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TelegramIcon from '@mui/icons-material/Telegram';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ProfileDropdown from "./ProfileDropdown";

function MenuDropdown() {

    const { user } = useContext(GlobalContext);

    const navigate = useNavigate();

    return (
        <div className="dark:hover:bg-[#2F2F2F] dark:text-gray-300 dark:bg-[#262626] hover:bg-gray-100">
            {/* 1st section  */}
            <div className="flex justify-start gap-3 p-2 mx-2 my-2 text-[#2f2f2f] hover:bg-gray-100 rounded-md cursor-pointer dark:hover:bg-[#2F2F2F] dark:text-gray-300 dark:bg-[#262626]">
                <div className="h-7 text-center border-[3px]  text-gray-900 bg-gray-300 rounded-md w-7">{`${user?.displayName?.charAt(0).toUpperCase()}`}</div>
                <h4 className="font-semibold font">{`${user?.displayName}'s Notion`}</h4>
            </div>
            <SidebarButton
                onClick={() => navigate("/home")}
                icon={SearchIcon}
                className="dark:text-gray-300"
                text="Search"
            />
            <SidebarButton
                onClick={() => navigate("/home")}
                icon={HomeIcon}
                className=" dark:text-gray-300"
                text="Home"
            />
            <SidebarButton
                onClick={() => navigate("inbox")}
                icon={MailIcon}
                className="dark:text-gray-300"
                text="Inbox"
            />

            {/* 2nd section  */}
            <div
                className="flex justify-between gap-2 p-2 mx-2 my-1 font-light text-gray-600 rounded-md dark:hover:bg-[#2F2F2F] dark:text-gray-300 dark:bg-[#262626] text-md hover:bg-gray-100 ">
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
                className="text-red-300"
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
            <hr className="invisible my-3" />

            {/* 3rd section  */}
            <SidebarButton
                onClick={() => navigate("settings")}
                icon={SettingsOutlinedIcon}
                className="dark:text-gray-300"
                text="Settings"
            />
            <SidebarButton
                icon={CategoryOutlinedIcon}
                className="dark:text-gray-300"
                text="Templates"
            />
            <SidebarButton
                onClick={() => navigate("trash")}
                icon={AutoDeleteOutlinedIcon}
                className="dark:text-gray-300"
                text="Trash"
            />

            {/* last section */}
            <div className="absolute bottom-0 flex justify-between w-full h-12 p-2 ">
                <div className="flex gap-3">
                    <CalendarMonthOutlinedIcon className="hover:text-green-600" />
                    <TelegramIcon className="hover:text-blue-300" />
                </div>
                <HelpOutlineIcon className="hover:text-red-300" />
            </div>
        </div>
    );
}

export default MenuDropdown;