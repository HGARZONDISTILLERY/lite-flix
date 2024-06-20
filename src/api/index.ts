import axios from 'axios';
import { NowPlayingMoviesResponse } from './types';

const API_KEY = '6f26fd536dd6192ec8a57e94141f8b20';
const BASE_URL = 'https://api.themoviedb.org/3';

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