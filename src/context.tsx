import { createContext, useState } from 'react'

interface ThemeContextInterface {
    isDark: boolean;
    getThemeLocalStorage: () => void;
    handleChangeTheme: (value: boolean) => void;
}

export const themeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

export const ThemeContextProvider = ({ children }: any) => {
    const [isDark, setIsDark] = useState<boolean>(true);

    const getThemeLocalStorage = () => {
        const userTheme = localStorage.getItem("theme");
        if (userTheme == undefined || userTheme == "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.add("light");
            setIsDark(false);
        }
    };

    const handleChangeTheme = (value: boolean) => {
        setIsDark(value);
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
        if (value) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <themeContext.Provider value={{
            isDark,
            getThemeLocalStorage,
            handleChangeTheme
        }}>
            {children}
        </themeContext.Provider>
    )
}
