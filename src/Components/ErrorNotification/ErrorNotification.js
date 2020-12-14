import React from 'react';

import styles from './ErrorNotification.module.css';

const ErrorNotification = ({message}) => {
    return (
        <div className={styles.errorText}>
            <p>Ooops!!! Something went wrong: {message}</p> 
        </div>
    );
};


export default ErrorNotification;