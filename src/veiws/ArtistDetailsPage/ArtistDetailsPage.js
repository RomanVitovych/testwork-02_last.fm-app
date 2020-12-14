import React, { Component } from 'react';
import { connect } from 'react-redux';

import Load from '../../Components/Load/Load';
import ErrorNotification from '../../Components/ErrorNotification/ErrorNotification';

import routes from '../routes';
import tracksApi from '../../services/tracksApi';
import traksActions from '../../redux/tracks/traksActions';
import styles from './ArtistDetailsPage.module.css';

class TrackDetailsPage extends Component {
    state = {
        artist: {},
        // isLoading: false,
        // error: false,
        message: ''
    };

    componentDidMount() {
        this.props.loaderStatus(true);
        tracksApi
        .fetchArtistDetails(this.props.match.params.trackId)
        .then(response => this.setState({artist: response}))
        .catch(error => this.props.errorStatus(error.message))
        .finally(() => this.props.loaderStatus(false));
    };
    

    handleGoBack = () => {
        const {state} = this.props.location;
        if(state && state.from) {
            return this.props.history.push(state.from)
        };
        this.props.history.push(routes.tracks);
    };

    render() {
        const {artist} = this.state;
        // console.log(artist);
        // console.log(Object.keys(artist).length);
        const {error} = this.props;
        return (
            <div className={styles.container}>
               <button
               className={styles.buttonGoBack}
               type='button' 
               onClick={this.handleGoBack} >
                   Go back
                </button> 

                {error && <ErrorNotification message={error} />}

                {Object.keys(artist).length <= 0 ? <Load /> : (
                <ul className={styles.artistList}>
                    <li className={styles.artistItem}>

                        <h3 
                        className={styles.artistName}>
                            {artist.name}
                        </h3>

                        <img 
                        className={styles.artistImage}
                        src={artist.image.find(el => el.size === 'large')['#text']}
                        alt={artist.name} />

                        <ul className={styles.wrapArtistTags}>
                        {artist.tags.tag.map(tag => (
                            <li className={styles.artistTegs} key={tag.name}>
                                <a                                 
                                 href={tag.url}>
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

const mapStateToProps = (state) => ({
    isLoading: state.musicInfo.loader,
    error: state.musicInfo.error,
});

const mapDispatchToProps = {
    loaderStatus: traksActions.loaderStatus,
    errorStatus: traksActions.errorStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetailsPage);