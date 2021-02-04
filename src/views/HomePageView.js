import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movies-api';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader';

export default function HomeView() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchTrendingMovies().then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <MovieList movies={movies} title="Trending today" />
            {isLoading && <Loader />}
        </>
    );
}
© 2021 GitHub, Inc.