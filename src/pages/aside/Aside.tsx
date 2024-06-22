import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { collection, getDocs } from "firebase/firestore";

import { fetchPopularMovies } from "../../api";
import { MyMovieElement, PopularMovie, PopularMoviesResponse } from "../../api/types";
import MovieList from "./components/MovieList"
import { firestore } from "../../firebase";

interface AsideProps {
  featuredMovieTitle: string
}

const db = firestore
const moviesCollectionRef = collection(db, "movies")

const Aside = ({ featuredMovieTitle }: AsideProps) => {
  const [popularMovies, setPopularMovies] = useState<PopularMoviesResponse | {results: []} | undefined>({results: []})  
  const { data, error, isLoading } = useQuery<PopularMoviesResponse>('popularMovies', fetchPopularMovies)
  const [myMovies, setMyMovies] = useState<MyMovieElement[]>([])

  useEffect(() => {
    getDocs(moviesCollectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newMovie = doc.data()
        setMyMovies(prev => {
          console.log('Previous state:', prev);
          const exists = prev.some(movie => JSON.stringify(movie) === JSON.stringify(newMovie));
          if (!exists) {
            console.log('Previous state:', prev);
            return [...prev, newMovie];
          } else {
            return prev;
          }
        });
      });
    }).catch((error) => {
      console.error("Error when getting the documents: ", error);
    })
  }, [moviesCollectionRef])

  useEffect(() => {
    if (!isLoading) {
      setPopularMovies(data)
    }
  }, [data])

  useEffect(() => {
    console.log('myMovies', myMovies)
  }, [myMovies])

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error fetching movies: {error.message}</div>;

  return(
    <>
      <MovieList popularMovies={popularMovies?.results as PopularMovie[]} featuredMovieTitle={featuredMovieTitle} />
    </>
  )
}

export default Aside
