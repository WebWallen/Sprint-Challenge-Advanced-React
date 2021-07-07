import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark mode", initialValue); // similar to useState but gets data from user storage

    useEffect(() => {
        if (darkMode) document.body.classList.add("dark-mode");
        else document.body.classList.remove("dark-mode");
    }, [darkMode])

    return [darkMode, setDarkMode]
}

export default useDarkMode;