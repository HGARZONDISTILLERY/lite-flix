// import { useRef } from "react"

import './Home.css'
import { Box } from "@mui/material"
import Header from "./header/Header"
import Main from "./main/Main"
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchNowPlayingMovies } from '../api'
import { Movie, NowPlayingMoviesResponse, CustomError } from '../api/types'
import { IMAGES_BASE_URL } from '../utils/constants'

const emptyMovie = {
  adult: false,
  backdrop_path: './',
  genre_ids: [0],
  id: 0,
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 1,
  poster_path: './',
  release_date: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
}

const Home = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | undefined>(emptyMovie)
  const { data, error, isLoading } = useQuery<NowPlayingMoviesResponse, CustomError>('nowPlayingMovies', fetchNowPlayingMovies)

  useEffect(() => {
    if (!isLoading) {
      setFeaturedMovie(data?.results[0])
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching movies: {error?.message}</div>

  return(
    <Box sx={{
      width: '100vw',
      backgroundImage: `url(${IMAGES_BASE_URL}original${featuredMovie?.poster_path})`,
      paddingBottom: '114px',
      }}>
      <Header />
      <Main featuredMovie={featuredMovie} />
    </Box>
  )
}

export default Home


/* export default function Home() {
  const messageRef = useRef()

  return(
    <div>
      <form>
      <label>Enter message</label>
        <input type="text" ref={messageRef.current} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
} */
