import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
// import Home from './veiws/Home/Home';
// import TrackPage from './veiws/TrackPage/TrackPage';
// import TrackDetailsPage from './veiws/TrackDetailsPage/TrackDetailsPage';
import NotFound from './veiws/NotFound/NotFound';
import Load from './Components/Load/Load';

import routes from './veiws/routes';
import './App.css';

const Home = lazy(() => import('./veiws/Home/Home'));
const TrackPage = lazy(() => import('./veiws/TrackPage/TrackPage'));
const ArtistkDetailsPage = lazy(() => import('./veiws/ArtistDetailsPage/ArtistDetailsPage'));

const App = () => {
  const { HOME, TRACKS, ARTIST_DETAILS } = routes;
  return (
    <Layout>
      <Suspense fallback={<Load />}>
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={TRACKS} exact component={TrackPage} />
        <Route path={ARTIST_DETAILS} component={ArtistkDetailsPage} />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
