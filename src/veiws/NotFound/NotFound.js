import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imagePath from '../../image/error-404.png';

import routes from '../routes';

class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={imagePath} alt="no image" width='100'  />
                <h2>Error</h2>
                <p>Whooops!!! <Link to={routes.home} >Link</Link> to the main page!</p>
            </div>
        );
    }
}

export default NotFound;