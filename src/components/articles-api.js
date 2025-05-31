import axios from 'axios';

const API_KEY = 'a1b31428124fcc2aba2a17b1ee3e3c7d';
const BASE_URL =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const PAGE_SIZE = 9;

axios.defaults.baseURL = BASE_URL;

export const fetchArticles = async (newTopic, currentPage = 1) => {
  const params = {
    client_id: API_KEY,
    query: newTopic,
    page: currentPage,
    per_page: PAGE_SIZE,
  };

  const response = await axios.get(BASE_URL + 'search/photos/', {
    params: {
      ...params,
    },
  });

  return response.data;
};
