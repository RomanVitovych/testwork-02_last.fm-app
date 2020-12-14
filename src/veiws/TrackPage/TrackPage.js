import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import SearchForm from '../../Components/SearchForm/SearchForm';
import Load from '../../Components/Load/Load';
import ErrorNotification from '../../Components/ErrorNotification/ErrorNotification';

import getQueryParams from '../../utils/getQueryParams';
import tracksApi from '../../services/tracksApi';
import styles from './TrackPage.module.css';

class TrackPage extends Component {
    state = {
        tracks: [],
        // isLoading: false,
        // error: false,
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
        const {tracks} = this.state;
        const {isLoading, error} = this.props;
        console.log(isLoading);
        return (
            <div className={styles.container}>

                <SearchForm onSubmit={this.handleChangeQuery} />

                {error && <ErrorNotification message={error} />}

                <ul className={styles.trackPageHeaderList}>
                    <li className={styles.listNumbers}>#</li>
                    <li className={styles.listName}>Track</li>
                    <li className={styles.listName}>Artist</li>
                </ul>

                <hr className={styles.horisontalLineTrackPage} />

                {isLoading ? <Load /> :
                    <TransitionGroup
                    component='ul'
                    className={styles.trackPageList}>
                    {tracks.length > 0 && tracks.map(track => (
                        <CSSTransition
                        key={track.name}
                        timeout={500}
                        classNames={styles} >

                        <li 
                        className={styles.trackPageItem}
                        key={track.name} >
                            <p 
                            className={styles.symbol} >
                                &#10003;
                            </p>
                            <p 
                            className={styles.trackPageName}>
                                {track.name}
                            </p>
                            <p 
                            className={styles.trackPageName}>
                                {track.artist}
                            </p>
                        </li>
                        </CSSTransition>
                    )) }
                    </TransitionGroup>
                }                 
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    isLoading: state.musicInfo.loader,
    error: state.musicInfo.error,
});

export default connect(mapStateToProps, null)(TrackPage);

