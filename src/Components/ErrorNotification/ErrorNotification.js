import React from 'react';

import styles from './ErrorNotification.module.css';

const ErrorNotification = ({message}) => {
    return (
        <>
           <p className={styles.errorText} >Ooops!!! Something went wrong: {message}</p> 
        </>
    );
};

export default ErrorNotification;