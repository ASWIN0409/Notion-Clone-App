import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function ThemeButton() {

    const { theme, toggleTheme } = useContext(GlobalContext);

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-300 rounded dark:text-white dark:hover:bg-[#2f2f2f] dark:bg-[#3e3e3e]"
        >
            {theme === "light" ? "dark" : "light"}
        </button>
    );
}

export default ThemeButton;