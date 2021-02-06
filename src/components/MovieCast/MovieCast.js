import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast } from '../../services/movies-api';
import s from './MovieCast.module.css';


export default function MovieCast({ id }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(id).then(data => {
            setCast(data.cast);
        });
    }, [id]);

    return (
        <>
            {cast && (
                <div className={s.wrapper}>
                    <ul className={s.list}>
                        {cast.map(actor => {
                            return (
                                <li className={s.item} key={actor.cast_id}>
                                    <img
                                        className={s.image}
                                        src={
                                            actor.profile_path
                                                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                                                : 'https://help-odnoklassniki.ru/wp-content/uploads/2019/11/video.png'
                                        }
                                        alt={actor.name}
                                    />
                                    <p className={s.name}>{actor.name}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}
MovieCast.propTypes = {
    id: PropTypes.string.isRequired,
};