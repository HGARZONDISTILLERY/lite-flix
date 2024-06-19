import React from "react";

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import MovieListItem from "../MovieListItem";

const MovieList = () => {
  const [movieList, setMovieList] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setMovieList(String(event.target.value))
  }
  
  return(
    <>
      <FormControl sx={{
        width: '200px',
        margin: '0 auto'
      }}>
        <Select
          labelId="movie-list-label"
          id="movie-list-select"
          value={movieList}
          defaultValue="Populares"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap'}}>
        <MovieListItem />
        <MovieListItem />
        <MovieListItem />
        <MovieListItem />
      </Box>
    </>
  )
}

export default MovieList
