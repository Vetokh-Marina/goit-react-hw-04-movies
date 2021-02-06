import PropTypes from 'prop-types';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';

import s from './MovieCard.module.css';

function MovieCard({ movie }) {
    const location = useLocation();
    const { url } = useRouteMatch();

    return (
        <>
            <hr />
            <div className={s.wrapper}>
                <img
                    className={s.image}
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : 'https://help-odnoklassniki.ru/wp-content/uploads/2019/11/video.png'
                    }
                    alt={movie.title}
                />
                <div className={s.content}>
                    <h2 className={s.title}>{movie.title}</h2>
                    <p className={s.text}>User Score: {movie.vote_average}</p>
                    <p className={s.category}>Overview:</p>
                    <p className={s.text}>{movie.overview}</p>
                    <p className={s.category}>Genres:</p>
                    {movie.genres && (
                        <ul>
                            {movie.genres.map((item, index) => (
                                <li key={index}>{item.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className={s.nav}>
                <p className={s.category}>Additional information</p>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink
                            to={{
                                pathname: `${url}/cast`,
                                state: { from: location?.state?.from ?? '/' },
                            }}
                            className={s.link}
                            activeClassName={s.activeLink}
                        >
                            Cast
            </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to={{
                                pathname: `${url}/reviews`,
                                state: { from: location?.state?.from ?? '/' },
                            }}
                            className={s.link}
                            activeClassName={s.activeLink}
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default MovieCard;
MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
};