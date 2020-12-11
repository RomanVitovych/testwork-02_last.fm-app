import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imagePath from '../../image/error-404.png';

import routes from '../routes';
import styles from './NotFound.module.css';

class NotFound extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={imagePath} alt="no image" width='200'  />
                <h2 className={styles.errorTitle} >Error</h2>
                <p className={styles.errorText}>Ooops!!! 
                    <Link
                    className={styles.errorLink} 
                    to={routes.HOME} > Link </Link> to the main page!
                </p>
            </div>
        );
    }
}

export default NotFound;