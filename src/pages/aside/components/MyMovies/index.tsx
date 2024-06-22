import { useEffect } from "react";

import { Box } from "@mui/material"
import { MovieListProps } from "../../../../utils/types";

const PopularMovies = ({ myMoviesList }: MovieListProps) => {

  useEffect(() => {
    console.log('>>>>', myMoviesList)
  }, [myMoviesList])
  
  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-end',
        flexWrap: 'wrap',
        paddingRight: '114px',
        '@media (max-width: 900px)': {
          padding: '0',
          alignContent: 'center',
        }
        }}>
      {myMoviesList?.map(movie => <div><p>{movie.title}</p><img src={movie.image} /></div>)}
    </Box>
  )
}

export default PopularMovies
