export const API_KEY = '6f26fd536dd6192ec8a57e94141f8b20';

export const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/'

export interface NowPlayingMoviesResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CustomError {
  message: string;
}

export interface PopularMoviesResponse {
  page: number;
  results: PopularMovie[];
  total_pages: number;
  total_results: number;
}

export interface PopularMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
