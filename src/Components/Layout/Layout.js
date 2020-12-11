import React from 'react';

import Header from '../Header/Header';

import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.mainWrap} >
            <Header />
            <hr className={styles.horizontalLine} />
            {children}
        </div>
    );
};

export default Layout;