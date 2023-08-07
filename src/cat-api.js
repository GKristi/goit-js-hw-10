import axios from 'axios';

const API_KEY = 'live_ZRVB8csQMdZki9eHyqtAIlU1QehqV4d7cyevOONBUYkF9XyRE8WkawPGZNv5Tjl7';
axios.defaults.headers.common['x-api-key'] = API_KEY;
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(resp => resp)
        .catch(err => err);
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(resp => resp)
        .catch(err => err);
}