import { useContext } from "react";
import ThemeButton from "../../Components/Button/ThemeButton";
import SettingsIcon from '@mui/icons-material/Settings';
import { GlobalContext } from "../../Context/GlobalContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from "react-router-dom";
import ProfileDropdownButton from "../../Components/Button/ProfileDropdownButton";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

function SettingsPage() {

    const { user } = useContext(GlobalContext);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(GlobalContext);

    return (
        <div className="w-[50vw] mx-auto flex flex-col gap-2">

            <div className="flex items-center justify-center gap-2 m-16">
                <SettingsIcon fontSize="large" className="text-[#3E3E3E]" />
                <h1 className="text-3xl font-black text-center text-[#3E3E3E]">Settings</h1>
            </div>

            <h3 className="text-2xl dark:text-gray-300">{`${user?.displayName}`}</h3>
            <h4 className="text-2xl dark:text-gray-300">{user?.email}</h4>

            <div className="my-3">
                <ProfileDropdownButton
                    buttonText="Add another account"
                    onClick={() => navigate("/register")}
                />
                <ProfileDropdownButton
                    buttonText="Delete account"
                    onClick={() => navigate("/register")}
                />
                <ProfileDropdownButton
                    buttonText="Log out"
                    onClick={() => {
                        signOut(auth);
                        navigate("/");
                    }}
                />
            </div>

            <div className="flex items-center justify-between ">
                <ThemeButton />
                {theme === "dark" ? <DarkModeIcon fontSize="large" /> : <LightModeIcon fontSize="large" />}
            </div>
        </div>
    );
}

export default SettingsPage;