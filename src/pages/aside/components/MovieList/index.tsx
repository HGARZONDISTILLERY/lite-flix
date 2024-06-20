import { useState, useEffect } from "react";

import { Box } from "@mui/material"
import MovieListItem from "../MovieListItem";
import { PopularMovie } from "../../../../api/types";
import PositionedMenu from "../PositionedMenu";

interface MovieListProps {
  popularMovies: PopularMovie[]
  featuredMovieTitle: string
}

const MovieList = ({ popularMovies, featuredMovieTitle }: MovieListProps) => {
  const [cleanMovieList, setCleanMovieList] = useState<PopularMovie[]>()
  const maxAmountOfMovies = 4

  useEffect(() => {
    setCleanMovieList(popularMovies?.filter(movie => {
      return movie?.original_title !== featuredMovieTitle
    }))
  }, [popularMovies, setCleanMovieList])
  
  return(
    <>
      <Box sx={{
        color: '#fff',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        paddingRight: '130px'
      }}>
        Ver:
        <PositionedMenu />
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'flex-end', flexWrap: 'wrap', paddingRight: '114px'}}>
        {cleanMovieList?.slice(0, maxAmountOfMovies).map(movie => (
          <MovieListItem movie={movie} key={movie?.id} />
        ))}
      </Box>
    </>
  )
}

export default MovieList
