import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Load from '../../Components/Load/Load';
import ErrorNotification from '../../Components/ErrorNotification/ErrorNotification';

import tracksApi from '../../services/tracksApi';
import styles from './Home.module.css';

class Home extends Component {
    state = {
        tracks: [],
        isLoading: false,
        error: null,
        message: ''
    };

    componentDidMount() {
        this.setState({isLoading: true});
        tracksApi 
        .fetchTopTracks()
        .then(result => this.setState({tracks: [...result.track]}))
        .catch(error => this.setState({error, message: error.message}))
        .finally(() => this.setState({isLoading: false}));
    };
    
    render() {
        const {tracks, isLoading, error, message} = this.state;;
        const {match, location} = this.props;
        return (
            <div className={styles.container} >
                <h2 className={styles.homeTitle} >Tunes of the week</h2>

                {error && <ErrorNotification message={message} />}

                <ul className={styles.trackPageHeaderList}>
                    <li>Track</li>
                    <li>Artist</li>
                    <li>Title</li>
                    <li>Link</li>
                </ul>

                <hr className={styles.horizontalLine} />

                {isLoading ? <Load /> :
                <ul className={styles.homeList} >
                    {tracks.length > 0 && tracks.map(track => (
                        <li 
                        className={styles.homeListItem}
                        key={track.name} >
                            <p className={styles.track}>{track.name}</p>
                            <Link 
                            to={{
                                pathname: `${match.url}tracks/${track.artist.mbid}`,
                                state: {from: location}}} >
                                <p className={styles.artist}>{track.artist.name}</p>
                            </Link>
                            <img 
                            src={track.image.find(el => el.size === 'medium')['#text']} 
                            alt={track.artist.name}
                             />
                            <a href={track.artist.url} >{track.artist.url}</a>
                        </li>
                    )) }
                </ul>
                }     
            </div>
        );
    }
}

export default Home;