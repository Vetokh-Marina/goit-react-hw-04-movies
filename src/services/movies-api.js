const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6286ff1d9bf26d8def33577531609d59';



async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    return fetchWithErrorHandling(url);
}

export function fetchMoviesByName(name) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`;
    return fetchWithErrorHandling(url);
}

export function fetchMovieDetails(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
    return fetchWithErrorHandling(url);
}

export function fetchMovieCast(id) {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    return fetchWithErrorHandling(url);
}

export function fetchMovieReviews(id) {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
    return fetchWithErrorHandling(url);
}