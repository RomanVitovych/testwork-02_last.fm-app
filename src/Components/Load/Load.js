import React from 'react';
import Loader from 'react-loader-spinner';

import styles from './Load.module.css';

const Load = () => {
    return (
        <div>
            <Loader 
            className={styles.siteLoader}
            type="ThreeDots" 
            color="#ffffff" 
            height={100} 
            width={100} />
        </div>
    );
};

export default Load;