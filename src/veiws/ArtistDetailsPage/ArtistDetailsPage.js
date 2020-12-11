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
        // console.log(artist);
        // console.log(Object.keys(artist).length);
        return (
            <div className={styles.container}>
               <button
               className={styles.buttonGoBack}
               type='button' 
               onClick={this.handleGoBack} >
                   Go back
                </button> 

                {error && <ErrorNotification message={message} />}

                {Object.keys(artist).length <= 0 ? <Load /> : (
                <ul className={styles.artistList}>
                    <li className={styles.artistItem}>

                        <h3 
                        className={styles.artistName}>
                            {artist.name}
                        </h3>

                        <img 
                        className={styles.artistImage}
                        src={artist.image.find(el => el.size === 'large')['#text']} />

                        <ul className={styles.wrapArtistTags}>
                        {artist.tags.tag.map(tag => (
                            <li className={styles.artistTegs} >
                                <a                                 
                                key={tag.name} href={tag.url}>
                                    {tag.name}
                                </a>
                            </li>))}
                        </ul>

                        <p 
                        className={styles.artistBio} >
                            {artist.bio.summary}
                        </p>
                    </li>
                </ul>
                )}
            </div>
        );
    }
}

export default TrackDetailsPage;