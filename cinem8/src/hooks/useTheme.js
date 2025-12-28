import { useState, useEffect } from "react";

const useTheme = () => {
    // initialize state by checking local storage or defaulting to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';

        const root = window.document.documentElement;
        if (savedTheme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        return savedTheme;
    });

    // effect to apply theme to the document body and update local storage
    useEffect(() => {
        const root =  window.document.documentElement;
        const isDark = theme === 'dark';

        // remove old theme and add new one
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);

        // save theme preference to local storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // toggle function
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme, isDarkMode: theme === 'dark' };
};

export default useTheme;