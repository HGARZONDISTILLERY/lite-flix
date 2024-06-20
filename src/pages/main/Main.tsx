import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Box, Grid } from "@mui/material"
import Aside from "../aside/Aside"
import Title from "./components/Title/Title"
import Actions from "./components/Actions/Actions"
import { fetchNowPlayingMovies } from '../../api'
import { CustomError, Movie, NowPlayingMoviesResponse } from '../../api/types'

const Main = () => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | {original_title: ''} | undefined>({original_title: ''})

  const { data, error, isLoading } = useQuery<NowPlayingMoviesResponse, CustomError>('nowPlayingMovies', fetchNowPlayingMovies);

  useEffect(() => {
    if (!isLoading) {
      setFeaturedMovie(data?.results[0])
    }
  }, [data])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies: {error?.message}</div>;

  return(
    <Box component="main">
      <Grid container>
        <Grid item xs={8} component={"section"} sx={{marginTop: '30%'}}>
          <Title featuredMovieTitle={String(featuredMovie?.original_title)} />
          <Actions />
        </Grid>
        <Grid item xs={4} component={"aside"}>
          <Aside />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
