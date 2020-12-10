import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../../Components/SearchForm/SearchForm';
import Load from '../../Components/Load/Load';
import ErrorNotification from '../../Components/ErrorNotification/ErrorNotification';

import getQueryParams from '../../utils/getQueryParams';
import tracksApi from '../../services/tracksApi';
import styles from './TrackPage.module.css';

class TrackPage extends Component {
    state = {
        tracks: [],
        isLoading: false,
        error: null,
        message: ''
    };

    componentDidMount() {
        const {query} = getQueryParams(this.props.location.search);
        if(query) {
            this.fetchTracks(query);
        };
    };

    componentDidUpdate(prevProps, prevState) {
        const {query: prevQuery} = getQueryParams(prevProps.location.search);
        const {query: nextQuery} = getQueryParams(this.props.location.search);
        if(prevQuery !== nextQuery) {
            this.fetchTracks(nextQuery);
        };
    };

    fetchTracks = query => {
        tracksApi
        .fetchTrackWithQuery(query)
        .then(tracks => this.setState({tracks}))
    }

    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query = ${query}`
        });
        this.fetchTracks(query)
    };

    render() {
        const {tracks, isLoading, error, message} = this.state;
        console.log(tracks);
        const {match, location} = this.props;
        return (
            <div>
                <SearchForm onSubmit={this.handleChangeQuery} />

                {error && <ErrorNotification message={message} />}

                {isLoading ? <Load /> : (
                     <ul className={styles.homeList} >
                     {tracks.length > 0 && tracks.map(track => (
                         <li 
                        //  className={styles.homeListItem}
                         key={track.name} >
                             <p className={styles.track} >Track: {track.name}</p>
                             <Link 
                             to={{
                                 pathname: `${match.url}tracks/${track.artist.mbid}`,
                                 state: {from: location}}} >
                                 <p className={styles.artist} >Artist: {track.artist.name}</p>
                             </Link>
                             <img 
                             src={track.image.find(el => el.size === 'medium')['#text']} 
                             alt={track.artist.name}
                              />
                             <a href={track.artist.url} >{track.artist.url}</a>
                         </li>
                     )) }
                 </ul>
                // <ul>
                //     {tracks.length > 0 && tracks.map(track => (
                //         <li
                //         key={track.artist} >
                //             <p>{tracks.trackmatches.track.artist}</p>
                //             <p>asfasfafa</p>
                //         </li>
                //     ))}
                // </ul>
                )}
            </div>
        );
    }
}

export default TrackPage;

{/* <Link
to={{
    pathname: `${match.url}/${track.id}`,
    state: {from: location}}} >
        {track.name}
</Link> */}