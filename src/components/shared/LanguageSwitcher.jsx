import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'vi' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark"
            aria-label="Toggle language"
        >
            <span className="material-icons text-lg">language</span>
            <span className="uppercase font-bold">{i18n.language}</span>
        </button>
    );
};

export default LanguageSwitcher;
