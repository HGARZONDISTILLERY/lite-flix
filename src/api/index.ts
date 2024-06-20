import axios from 'axios';
import { API_KEY, BASE_URL, NowPlayingMoviesResponse, PopularMoviesResponse } from './types';

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