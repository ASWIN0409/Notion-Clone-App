import { useState } from "react";
import Button from "../Button/Button";
import NavButton from "../Button/NavButton";
import NotionDropdown from "../Dropdown/NotionDropdown";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 flex items-center justify-between w-full h-16 border-b-2 border-gray-200 md:justify-between bg-gray-50">

            {/* left nav  */}
            <div className="w-[10%] h-full">
                <div className="flex items-center justify-center w-12 h-12 mt-2 ml-4">
                    <img
                        onClick={() => navigate("/")}
                        className="w-full h-full ease-in-out cursor-pointer hover:animate-pulse" src="notion1.png" alt="" />
                </div>
            </div>

            {/* center nav  */}
            <div className="w-[70%] h-full items-center hidden lg:block">
                <ul className="relative flex items-center justify-center w-full h-full gap-4 group">
                    <p
                        className="p-2 text-sm font-thin list-none rounded-md cursor-pointer hover:bg-gray-200 "
                        onClick={() => setIsOpen(!isOpen)}>
                        Notion ▾
                    </p>
                    {
                        isOpen && <NotionDropdown />
                    }
                    <NavButton text="Mail" />
                    <NavButton text="Calendar" />
                    <NavButton text="AI" />
                    <NavButton text="Enterprise" />
                    <NavButton text="Pricing" />
                    <NavButton text="Explore" />
                    <NavButton text="Request a demo" />
                </ul>
            </div>

            {/* right nav  */}
            {
                !toggleMenu &&
                <div className=" lg:hidden flex md:w-[30%] w-full md:justify- justify-start mr-10">
                    <Button
                        className="hidden p-2 font-thin text-blue-500 bg-blue-100 rounded-md md:h-full md:block lg:block hover:bg-blue-200"
                        text="Log In"
                    />
                    <Button text="Get Notion" />
                </div>
            }
            <div className="lg:w-[20%] lg:flex md:w-[30%] w-full hidden md:justify- justify-start lg:h-[70%] mr-10">
                <Button
                    className="hidden p-2 font-thin text-blue-500 bg-blue-100 rounded-md md:h-full md:block lg:block hover:bg-blue-200"
                    text="Log In"
                />
                <Button text="Get Notion" />
            </div>

            {/* small & medium screen navbar/sidebar */}
            <div
                onClick={() => setToggleMenu(!toggleMenu)}
                className="mr-5 lg:hidden rounded-xl">
                <MenuIcon fontSize="large" />
            </div>
            {toggleMenu && <div className="absolute right-0 z-50 flex flex-col w-screen h-screen gap-3 p-2 mx-2 my-1 top-14 bg-blue-50 lg:hidden">
                <NavButton text="Notion" />
                <NavButton text="Mail" />
                <NavButton text="Calendar" />
                <NavButton text="AI" />
                <NavButton text="Enterprise" />
                <NavButton text="Pricing" />
                <NavButton text="Explore" />
                <NavButton text="Request a demo" />
            </div>}
        </header>
    );
}

export default Header;