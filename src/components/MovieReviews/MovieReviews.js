import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/movies-api';
import s from './MovieReviews.module.css';

export default function MovieReviews({ id }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(id).then(data => setReviews(data.results));
    }, [id]);

    return (
        <div className={s.wrapper}>
            {reviews.length > 0 ? (
                <>
                    <ul className={s.list}>
                        {reviews.map((item, index) => (
                            <li key={index} className={s.item}>
                                <p className={s.title}> {item.author}</p>
                                <p> {item.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                    <p className={s.text}>No reviews to show</p>
                )}
        </div>
    );
}

MovieReviews.propTypes = {
    id: PropTypes.string.isRequired,
};