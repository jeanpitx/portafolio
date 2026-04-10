import { useLang } from '../context';

export const ToggleLang = () => {
    const { lang, handleChangeLang } = useLang();

    return (
        <div className="flex items-center gap-1 text-sm font-semibold font-Poppins select-none">
            <button
                onClick={() => handleChangeLang('es')}
                className={`px-2 py-0.5 rounded transition-colors duration-200 ${
                    lang === 'es'
                        ? 'bg-gradient-to-br from-indigo-500 to-pink-500 text-white'
                        : 'text-textSecondary hover:text-textPrimary'
                }`}
            >
                ES
            </button>
            <span className="text-textSecondary">|</span>
            <button
                onClick={() => handleChangeLang('en')}
                className={`px-2 py-0.5 rounded transition-colors duration-200 ${
                    lang === 'en'
                        ? 'bg-gradient-to-br from-indigo-500 to-pink-500 text-white'
                        : 'text-textSecondary hover:text-textPrimary'
                }`}
            >
                EN
            </button>
        </div>
    );
};
