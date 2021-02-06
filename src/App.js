import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

const HomePageView = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "HomePageView" */),
);
const MoviesPageView = lazy(() =>
  import('./views/MoviesPageView' /* webpackChunkName: "MoviesPageView" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);
const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPageView' /* webpackChunkName: "MovieDetailsPageView" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPageView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
export default App;