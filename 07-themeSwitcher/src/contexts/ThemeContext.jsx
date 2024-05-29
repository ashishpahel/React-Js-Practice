import React, { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const lightTheme = () => {
        setTheme("light")
    }

    const darkTheme = () => {
        setTheme("dark")
    }

    const value = {
        theme,
        lightTheme,
        darkTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}