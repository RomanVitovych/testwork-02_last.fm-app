import React, { Component } from 'react';

import Load from '../../Components/Load/Load';
import ErrorNotification from '../../Components/ErrorNotification/ErrorNotification';


import routes from '../routes';
import tracksApi from '../../services/tracksApi';
import styles from './ArtistDetailsPage.module.css';

class TrackDetailsPage extends Component {
    state = {
        artist: {},
        isLoading: false,
        error: null,
        message: ''
    };

    componentDidMount() {
        this.setState({isLoading: true});
        tracksApi
        .fetchArtistDetails(this.props.match.params.trackId)
        .then(response => this.setState({artist: response}))
        .catch(error => this.setState({error, message: error.message}))
        .finally(() => this.setState({isLoading: false}));
    };
    

    handleGoBack = () => {
        const {state} = this.props.location;
        if(state && state.from) {
            return this.props.history.push(state.from)
        };
        this.props.history.push(routes.tracks);
    };

    render() {
        const {artist, error, message} = this.state;
        console.log(artist);
        return (
            <>
               <button
               className={styles.buttonGoBack}
               type='button' 
               onClick={this.handleGoBack} >
                   Go back
                </button> 

                {error && <ErrorNotification message={message} />}

                {!artist ? <Load /> :
                <ul>
                    <li>
                        <h3>{artist.name}</h3>
                        {/* <img src={artist.image.find(el => el.size === 'large')['#text']} /> */}
                        {/* {tags.map(tag)<a></a>} */}
                        {/* <p>{artist.bio.summary}</p> */}
                    </li>
                </ul>
                }
            </>
        );
    }
}

export default TrackDetailsPage;