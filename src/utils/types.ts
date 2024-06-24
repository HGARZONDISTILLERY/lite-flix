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

export interface MyMovieElement {
  title?: string;
  image?: string;
}

export interface MovieListProps {
  popularMovies?: PopularMovie[];
  featuredMovieTitle?: string;
  myMoviesList?: MyMovieElement[];
}
