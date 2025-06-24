import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";

function ThemeButton() {

    const { theme, toggleTheme } = useContext(GlobalContext);

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 text-[#595555] rounded-md cursor-pointer bg-gray-200 dark:hover:bg-[#2F2F2F] dark:text-gray-300 dark:bg-[#262626] hover:bg-gray-300"
        >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}

export default ThemeButton;