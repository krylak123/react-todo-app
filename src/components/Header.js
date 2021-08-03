import React, { useState } from 'react';

import sunIcon from '../images/icon-sun.svg';
import moonIcon from '../images/icon-moon.svg';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggleMode = () => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        setIsDarkMode((prevValue) => !prevValue);
    };

    return (
        <header className='header'>
            <h1 className='header__title'>TODO</h1>
            <div className='header__toggle-wrap'>
                <img
                    onClick={handleToggleMode}
                    src={isDarkMode ? sunIcon : moonIcon}
                    alt='sun icon - dark mode turn off'
                    className='header__toggle'
                />
            </div>
        </header>
    );
};

export default Header;
