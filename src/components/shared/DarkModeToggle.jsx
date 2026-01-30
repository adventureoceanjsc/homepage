import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const DarkModeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark"
            aria-label="Toggle dark mode"
        >
            <span className="material-icons">
                {isDark ? 'light_mode' : 'dark_mode'}
            </span>
        </button>
    );
};

export default DarkModeToggle;
