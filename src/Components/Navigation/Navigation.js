import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../veiws/routes';
import styles from './Navigation.module.css';

const Navigation = () => {
    const { HOME, TRACKS } = routes;
    return (
        <ul className={styles.navigationList} >
            <li className={styles.navigationListItem} >
                <NavLink
                exact
                to={HOME}
                className={styles.link}
                activeClassName={styles.activeLink} >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                exact
                to={TRACKS}
                className={styles.link}
                activeClassName={styles.activeLink} >
                    Tracks
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;