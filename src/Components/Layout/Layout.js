import React from 'react';

import Header from '../Header/Header';

import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.container} >
            <Header />
            <hr className={styles.horizontalLine} />
            {children}
        </div>
    );
};

export default Layout;