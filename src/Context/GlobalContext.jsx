import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });   //Form Context

    const [user, setUser] = useState(null); //Auth Context

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);    


    const [currency, setCurrency] = useState("inr"); //Currency Context

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark")
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <GlobalContext.Provider value={{ formData, setFormData, user, currency, setCurrency, theme, toggleTheme }}>
            {children}
        </GlobalContext.Provider>
    );
} 