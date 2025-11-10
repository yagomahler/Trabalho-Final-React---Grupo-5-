import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null);

export function DarkModeProvider({ children }) {
    const [darkThemeIsActive, setDarkThemeIsActive] = useState(false);

    function handleTheme() {
        const newThemeValue = !darkThemeIsActive; 
        setDarkThemeIsActive(newThemeValue);
        localStorage.setItem("theme", JSON.stringify(newThemeValue));
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme !== null) {
            setDarkThemeIsActive(JSON.parse(savedTheme));
        }
    }, []);

    useEffect(() => {
        const rootStyle = document.documentElement.style;
        if (darkThemeIsActive) {
            rootStyle.setProperty('--background-color', 'var(--preto-primario)');
            rootStyle.setProperty('--font-color', 'var(--branco-primario)');
            rootStyle.setProperty('--card-bg', '#333333');
            rootStyle.setProperty('--header-bg', 'var(--preto-primario)');
        } else {
            rootStyle.setProperty('--background-color', 'var(--cinza-claro-bg)');
            rootStyle.setProperty('--font-color', 'var(--preto-primario)');
            rootStyle.setProperty('--card-bg', 'var(--branco-primario)');
            rootStyle.setProperty('--header-bg', 'var(--cinza-header-footer)');
        }
    }, [darkThemeIsActive])


    return (
        <DarkModeContext.Provider value={{ darkThemeIsActive, handleTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}
