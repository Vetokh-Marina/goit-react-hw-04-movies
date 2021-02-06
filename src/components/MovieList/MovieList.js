import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';


function MovieList({ movies }) {
    const location = useLocation();

    return (
        <div className={s.wrapper}>
            {movies.length && (
                <ul className={s.list}>
                    {movies.map(movie => {
                        return (
                            <li key={movie.id} className={s.item}>
                                <Link
                                    to={{
                                        pathname: `movies/${movie.id}`,
                                        state: { from: location },
                                    }}
                                >
                                    <img
                                        className={s.image}
                                        src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                : 'https://help-odnoklassniki.ru/wp-content/uploads/2019/11/video.png'
                                        }
                                        alt={movie.title}
                                    />
                                    <p className={s.title}>{movie.title}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};