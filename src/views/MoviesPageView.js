import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchMoviesByName } from '../services/movies-api';
import Searchbar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import Loader from '../components/Loader';

export default function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const location = useLocation();

    const searchQuery = new URLSearchParams(location.search).get('query');

    const onChangeQuery = queryString => {
        history.push({ ...location, search: `query=${queryString}` });
    };

    useEffect(() => {
        if (searchQuery === '') {
            return;
        }
        setIsLoading(true);
        fetchMoviesByName(searchQuery).then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [searchQuery]);

    return (
        <>
            <Searchbar onSubmit={onChangeQuery} />

            {searchQuery && (
                <MovieList
                    movies={movies}
                    title={`Search results for ${searchQuery}`}
                />
            )}
            {isLoading && <Loader />}
        </>
    );
}