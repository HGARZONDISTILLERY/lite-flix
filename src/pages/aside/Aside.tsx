import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { fetchPopularMovies } from "../../api";
import { PopularMovie, PopularMoviesResponse } from "../../api/types";
import MovieList from "./components/MovieList"

interface AsideProps {
  featuredMovieTitle: string
}

const Aside = ({ featuredMovieTitle }: AsideProps) => {
  console.log('featuredMovie in Aside', featuredMovieTitle)
  const [popularMovies, setPopularMovies] = useState<PopularMoviesResponse | {results: []} | undefined>({results: []})  
  const { data, error, isLoading } = useQuery<PopularMoviesResponse>('popularMovies', fetchPopularMovies)

  useEffect(() => {
    if (!isLoading) {
      setPopularMovies(data)
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error fetching movies: {error.message}</div>;

  return(
    <>
      <MovieList popularMovies={popularMovies?.results as PopularMovie[]} featuredMovieTitle={featuredMovieTitle} />
    </>
  )
}

export default Aside
