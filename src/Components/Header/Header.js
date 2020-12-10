import React from 'react';

import Navigation from '../Navigation/Navigation';

import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.siteHeader} >
            <h1 className={styles.siteLogo} >Last.fm</h1>
            <Navigation />
        </header>
    );
};

export default Header;