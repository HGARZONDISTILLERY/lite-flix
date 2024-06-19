import React from "react";

import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material"
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
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </>
  )
}

export default MovieList
