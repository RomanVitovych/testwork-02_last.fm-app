import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './ErrorNotification.module.css';

const ErrorNotification = ({message}) => {
    return (
        <CSSTransition
        in={message}
        timeout={500}
        classNames={styles}
        unmountOnExit >
                    <div className={styles.errorText}>
                        <p>Ooops!!! Something went wrong: {message}</p> 
                    </div>
        </CSSTransition>

    );
};

export default ErrorNotification;