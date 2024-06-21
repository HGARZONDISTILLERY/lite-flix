import axios from 'axios';
import { NowPlayingMoviesResponse, PopularMoviesResponse } from './types';
import { BASE_URL, API_KEY } from '../utils/constants';

export const fetchNowPlayingMovies = async (): Promise<NowPlayingMoviesResponse> => {
  try {
    const response = await axios.get<NowPlayingMoviesResponse>(`${BASE_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};

export const fetchPopularMovies = async (): Promise<PopularMoviesResponse> => {
  try {
    const response = await axios.get<PopularMoviesResponse>(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};