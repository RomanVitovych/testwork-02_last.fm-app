import axios from 'axios';

const urlApi = 'htttp://ws.audioscrobbler.com/2.0/';
const keyApi = '5c930abea1023f9769b5509d7ba9509b';

const fetchTopTracks = () => {
    return axios
    .get(`${urlApi}?method=chart.gettoptracks&api_key=${keyApi}&format=json`)
    .then(response => response.data.tracks);
};

const fetchArtistDetails = (trackId) => {
    return axios
    .get(`${urlApi}?method=artist.getinfo&mbid=${trackId}&api_key=${keyApi}&format=json`)
    .then(response => response.data.artist);
};

const fetchTrackWithQuery = (query) => {
    return axios
    .get(`${urlApi}?method=track.search&track=${query}&api_key=${keyApi}&format=json`)
    .then(response => response.data.results.trackmatches.track);
};

export default {
    fetchTopTracks,
    fetchArtistDetails,
    fetchTrackWithQuery
};