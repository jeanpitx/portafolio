import { createContext, useState, useContext } from 'react'
import { ESPANOL } from './assets/content'
import { INGLES, UI_ES } from './assets/content.en'

// ─── Theme context ────────────────────────────────────────────────────────────
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

// ─── Language context ─────────────────────────────────────────────────────────
const CONTENT_ES = { ...ESPANOL, ui: UI_ES };
const CONTENT_EN = { ...INGLES };

type Lang = 'es' | 'en';
type SiteContent = typeof CONTENT_EN;

interface LangContextInterface {
    lang: Lang;
    content: SiteContent;
    handleChangeLang: (l: Lang) => void;
}

export const langContext = createContext<LangContextInterface>({} as LangContextInterface);

const detectLang = (): Lang => {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
    return navigator.language.startsWith('en') ? 'en' : 'es';
};

export const LangContextProvider = ({ children }: any) => {
    const [lang, setLang] = useState<Lang>(detectLang);

    const handleChangeLang = (l: Lang) => {
        setLang(l);
        localStorage.setItem('lang', l);
    };

    const content: SiteContent = lang === 'en' ? CONTENT_EN : (CONTENT_ES as SiteContent);

    return (
        <langContext.Provider value={{ lang, content, handleChangeLang }}>
            {children}
        </langContext.Provider>
    );
};

export const useLang = () => useContext(langContext);
