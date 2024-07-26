import React, {createContext, useEffect} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage"

export const ThemeContext = createContext();

export const ThemeProviderMain = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", "dark")

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};