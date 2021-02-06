import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Spinner() {
    return (
        <Loader
            className={s.Spiner}
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    );
}