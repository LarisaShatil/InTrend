import axios from 'axios';

const API_KEY = 'fe853c8d9aa8d1faa153fa897fc2f308';
const BASE_URL = 'https://api.themoviedb.org/3';

const _axios = axios.create({ baseURL: BASE_URL });

// https://api.themoviedb.org/3/movie/550?api_key=fe853c8d9aa8d1faa153fa897fc2f308

export const getTrendingMovies = async () => {
  return await _axios
    .get(`/trending/all/day?api_key=${API_KEY}&limit=20`)
    .then(obj => obj.data.results)
    .catch(err => console.log(err));
};

export const getTrendingPeople = async () => {
  return await _axios
    .get(`/person/popular?api_key=${API_KEY}&limit=20`)
    .then(obj => obj.data.results)
    .catch(err => console.log(err));
};

export const getMovieByQuery = async query => {
  const {
    data: { results },
  } = await _axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return results;
};

export const getMovieById = async movieId => {
  return await _axios
    .get(`/movie/${movieId}?api_key=${API_KEY}`)
    .then(result => result.data)
    .catch(err => console.log(err));
};

export const getCastInfo = async movieId => {
  return await _axios
    .get(`/movie/${movieId}/credits?api_key=${API_KEY}&limit=20`)
    .then(result => result.data.cast)
    .catch(err => console.log(err));
};

export const getReviewsInfo = async movieId => {
  return await _axios
    .get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(result => result.data.results)
    .catch(err => console.log(err));
};
